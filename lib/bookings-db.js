/**
 * Dermatix bookings — DynamoDB layer.
 *
 * Required env vars:
 *   AWS_REGION              (default: ca-central-1)
 *   AWS_ACCESS_KEY_ID
 *   AWS_SECRET_ACCESS_KEY
 *   BOOKINGS_TABLE_NAME     (default: dermatix-bookings)
 *
 * Table create (one-time, run once with the AWS CLI):
 *   aws dynamodb create-table \
 *     --table-name dermatix-bookings \
 *     --attribute-definitions \
 *       AttributeName=date,AttributeType=S \
 *       AttributeName=startMinutes,AttributeType=N \
 *     --key-schema \
 *       AttributeName=date,KeyType=HASH \
 *       AttributeName=startMinutes,KeyType=RANGE \
 *     --billing-mode PAY_PER_REQUEST \
 *     --region ca-central-1
 *
 * Item shape:
 *   {
 *     date: "2026-05-15",            // partition key (clinic-local YYYY-MM-DD)
 *     startMinutes: 600,             // sort key (minutes since local midnight)
 *     endMinutes: 660,
 *     durationMinutes: 60,
 *     bookingId: "uuid",
 *     type: "appointment" | "consultation",
 *     service: "botox",
 *     name, email, phone, notes,
 *     submittedAt: ISO string,
 *   }
 *
 * Concurrency note: range-overlap can't be conditionally checked in a single
 * DynamoDB write, so the caller validates against a fresh listing and we then
 * issue a conditional put that prevents two bookings at the *exact same start*.
 * A vanishingly small race window remains for two simultaneous overlapping
 * (but non-identical) starts; acceptable for clinic volume.
 */

import { randomUUID } from "node:crypto";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  QueryCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";

const TABLE_NAME = process.env.BOOKINGS_TABLE_NAME || "dermatix-bookings";
const REGION = process.env.AWS_REGION || "ca-central-1";

let _docClient;
function getClient() {
  if (!_docClient) {
    const base = new DynamoDBClient({ region: REGION });
    _docClient = DynamoDBDocumentClient.from(base);
  }
  return _docClient;
}

/**
 * Returns existing bookings for the given clinic-local date, as
 * minimal interval objects: [{ start, end, bookingId }].
 */
export async function listBookingsForDate(dateString) {
  const out = await getClient().send(
    new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: "#d = :d",
      ExpressionAttributeNames: { "#d": "date" },
      ExpressionAttributeValues: { ":d": dateString },
    }),
  );
  return (out.Items || []).map((item) => ({
    start: item.startMinutes,
    end: item.endMinutes,
    bookingId: item.bookingId,
  }));
}

/**
 * Atomic-ish create: assigns a UUID and writes with a condition that no item
 * exists at the same (date, startMinutes). Throws an Error with code
 * "SLOT_TAKEN" if the condition fails.
 */
export async function createBooking(item) {
  const bookingId = randomUUID();
  const record = { ...item, bookingId };

  try {
    await getClient().send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: record,
        ConditionExpression:
          "attribute_not_exists(#d) AND attribute_not_exists(#s)",
        ExpressionAttributeNames: {
          "#d": "date",
          "#s": "startMinutes",
        },
      }),
    );
    return record;
  } catch (err) {
    if (err?.name === "ConditionalCheckFailedException") {
      const slotTaken = new Error("This time is no longer available.");
      slotTaken.code = "SLOT_TAKEN";
      throw slotTaken;
    }
    throw err;
  }
}
