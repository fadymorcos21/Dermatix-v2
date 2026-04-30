// GET /api/availability?date=YYYY-MM-DD&service=botox&type=appointment
// Returns the list of free 15-minute start times for that date and service.
//
// Response shape:
//   { ok: true, times: ["10:00", "10:15", ...], duration: 30, reason?: "PAST" | "CLOSED" }
// or
//   { ok: false, message: "..." }

import { NextResponse } from "next/server";
import {
  computeAvailableTimes,
  getDuration,
  isClinicOpen,
  isPastDate,
  isValidDateString,
} from "@/lib/booking-rules";
import { listBookingsForDate } from "@/lib/bookings-db";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date") || "";
  const service = searchParams.get("service") || "";
  const type = searchParams.get("type") || "";

  if (!isValidDateString(date)) {
    return NextResponse.json(
      { ok: false, message: "Invalid date." },
      { status: 400 },
    );
  }

  if (isPastDate(date)) {
    return NextResponse.json({ ok: true, times: [], reason: "PAST" });
  }

  if (!isClinicOpen(date)) {
    return NextResponse.json({ ok: true, times: [], reason: "CLOSED" });
  }

  const duration = getDuration({ type, service });

  let bookings = [];
  try {
    bookings = await listBookingsForDate(date);
  } catch (err) {
    console.error("[availability] DynamoDB query failed", err);
    return NextResponse.json(
      { ok: false, message: "Could not load available times." },
      { status: 500 },
    );
  }

  const times = computeAvailableTimes(date, duration, bookings);
  return NextResponse.json({ ok: true, times, duration });
}
