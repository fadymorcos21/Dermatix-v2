"use server";

import { getServiceBySlug } from "@/lib/services";

const defaultStaffEmail = "clinic@dermatixclinic.ca";
const defaultFromEmail = "Dermatix Clinic <noreply@dermatixclinic.ca>";

function textValue(formData, key) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function splitEmailList(value) {
  return (value || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function getStaffEmails() {
  const configuredEmails =
    process.env.DERMATIX_STAFF_EMAILS ||
    process.env.STAFF_EMAILS ||
    defaultStaffEmail;

  return splitEmailList(configuredEmails);
}

function getTestEmail() {
  return process.env.RESEND_TEST_EMAIL?.trim() || "";
}

function getFromEmail() {
  if (getTestEmail()) {
    return (
      process.env.RESEND_TEST_FROM_EMAIL?.trim() ||
      "Dermatix Clinic <onboarding@resend.dev>"
    );
  }

  return process.env.RESEND_FROM_EMAIL || defaultFromEmail;
}

function normalizeRecipients(to) {
  return Array.isArray(to) ? to.filter(Boolean) : [to].filter(Boolean);
}

function prepareRecipients({ to, subject, text, html }) {
  const intendedRecipients = normalizeRecipients(to);
  const testEmail = getTestEmail();

  if (!testEmail) {
    return {
      to: intendedRecipients,
      subject,
      text,
      html,
    };
  }

  const intendedLabel = intendedRecipients.join(", ");

  return {
    to: [testEmail],
    subject: `[TEST to ${intendedLabel}] ${subject}`,
    text: [
      `TEST MODE: This email was originally addressed to ${intendedLabel}.`,
      "",
      text,
    ].join("\n"),
    html: `
      <div style="margin:0 0 16px;padding:12px 14px;background:#fff3cd;border:1px solid #eed589;color:#5f4a00;font-family:Arial,sans-serif;font-size:13px;line-height:1.5;">
        TEST MODE: This email was originally addressed to ${escapeHtml(intendedLabel)}.
      </div>
      ${html}
    `,
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function labelValue(value, fallback = "Not provided") {
  return value ? value : fallback;
}

function formatService(slug) {
  if (!slug) return "Consultation";
  return getServiceBySlug(slug)?.name || slug;
}

function formatDate(value) {
  if (!value) return "";

  const [year, month, day] = value.split("-");
  if (!year || !month || !day) return value;

  return `${month}/${day}/${year}`;
}

function formatTime(value) {
  if (!value) return "";

  const [hourValue, minute = "00"] = value.split(":");
  const hour = Number(hourValue);

  if (Number.isNaN(hour)) return value;

  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${minute} ${period}`;
}

function detailsTable(rows) {
  return `
    <table role="presentation" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;margin-top:18px;">
      <tbody>
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding:10px 0;border-top:1px solid #e8dfd2;color:#766f65;font-size:13px;width:34%;">${escapeHtml(
                  label,
                )}</td>
                <td style="padding:10px 0;border-top:1px solid #e8dfd2;color:#24221f;font-size:14px;">${escapeHtml(
                  labelValue(value),
                )}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function emailShell(content) {
  return `
    <div style="margin:0;padding:0;background:#f6f1e7;color:#24221f;font-family:Inter,Arial,sans-serif;">
      <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
        <div style="background:#fffaf0;border:1px solid #e8dfd2;padding:28px;">
          <p style="margin:0 0 16px;color:#766f65;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;">Dermatix Clinic</p>
          ${content}
        </div>
      </div>
    </div>
  `;
}

function staffBookingEmail(payload) {
  const typeLabel =
    payload.type === "consultation"
      ? "confirmed consultation booking"
      : "confirmed appointment booking";
  const service = formatService(payload.service);
  const title = `New ${typeLabel} from ${payload.name || "a website visitor"}`;
  const date = formatDate(payload.preferredDate);
  const time = formatTime(payload.preferredTime);

  return {
    subject: `[Dermatix] ${title}`,
    text: [
      title,
      "",
      `Type: ${payload.type}`,
      `Service: ${service}`,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Booking date: ${labelValue(date)}`,
      `Booking time: ${labelValue(time)}`,
      "Duration: 30 minutes",
      `Notes: ${labelValue(payload.notes)}`,
      `Submitted: ${payload.submittedAt}`,
    ].join("\n"),
    html: emailShell(`
      <h1 style="margin:0;color:#24221f;font-family:Georgia,serif;font-weight:400;font-size:30px;line-height:1.15;">${escapeHtml(
        title,
      )}</h1>
      ${detailsTable([
        ["Type", payload.type],
        ["Service", service],
        ["Name", payload.name],
        ["Email", payload.email],
        ["Phone", payload.phone],
        ["Booking date", date],
        ["Booking time", time],
        ["Duration", "30 minutes"],
        ["Notes", payload.notes],
        ["Submitted", payload.submittedAt],
      ])}
    `),
  };
}

function customerBookingEmail(payload) {
  const isConsultation = payload.type === "consultation";
  const service = formatService(payload.service);
  const heading = isConsultation
    ? "Your 30-minute consultation booking is confirmed."
    : "Your 30-minute appointment booking is confirmed.";
  const date = formatDate(payload.preferredDate);
  const time = formatTime(payload.preferredTime);

  return {
    subject: isConsultation
      ? "Your Dermatix consultation booking is confirmed"
      : "Your Dermatix appointment booking is confirmed",
    text: [
      `Hi ${payload.name || "there"},`,
      "",
      heading,
      "If any details need to change, our team will contact you directly.",
      "",
      `Service: ${service}`,
      `Booking date: ${labelValue(date)}`,
      `Booking time: ${labelValue(time)}`,
      "Duration: 30 minutes",
      "",
      "Dermatix Clinic",
      "1-905-605-8444",
      "110 Ansley Grove Rd #10, Woodbridge, ON L4L 3R1",
    ].join("\n"),
    html: emailShell(`
      <h1 style="margin:0;color:#24221f;font-family:Georgia,serif;font-weight:400;font-size:30px;line-height:1.15;">${escapeHtml(
        heading,
      )}</h1>
      <p style="margin:18px 0 0;color:#514c45;font-size:15px;line-height:1.6;">Hi ${escapeHtml(
        payload.name || "there",
      )}, your time is on our schedule. If any details need to change, our team will contact you directly.</p>
      ${detailsTable([
        ["Service", service],
        ["Booking date", date],
        ["Booking time", time],
        ["Duration", "30 minutes"],
      ])}
      <p style="margin:20px 0 0;color:#514c45;font-size:14px;line-height:1.6;">Dermatix Clinic<br />1-905-605-8444<br />110 Ansley Grove Rd #10, Woodbridge, ON L4L 3R1</p>
    `),
  };
}

function staffInquiryEmail(payload) {
  const title = `New contact inquiry from ${payload.name || "a website visitor"}`;

  return {
    subject: `[Dermatix] ${payload.subject || title}`,
    text: [
      title,
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${labelValue(payload.phone)}`,
      `Subject: ${payload.subject}`,
      `Message: ${payload.message}`,
      `Submitted: ${payload.submittedAt}`,
    ].join("\n"),
    html: emailShell(`
      <h1 style="margin:0;color:#24221f;font-family:Georgia,serif;font-weight:400;font-size:30px;line-height:1.15;">${escapeHtml(
        title,
      )}</h1>
      ${detailsTable([
        ["Name", payload.name],
        ["Email", payload.email],
        ["Phone", payload.phone],
        ["Subject", payload.subject],
        ["Message", payload.message],
        ["Submitted", payload.submittedAt],
      ])}
    `),
  };
}

function customerInquiryEmail(payload) {
  return {
    subject: "We received your Dermatix inquiry",
    text: [
      `Hi ${payload.name || "there"},`,
      "",
      "Thanks for reaching out to Dermatix Clinic.",
      "Our team will write back within one business day.",
      "",
      `Subject: ${payload.subject}`,
      "",
      "Dermatix Clinic",
      "1-905-605-8444",
      "110 Ansley Grove Rd #10, Woodbridge, ON L4L 3R1",
    ].join("\n"),
    html: emailShell(`
      <h1 style="margin:0;color:#24221f;font-family:Georgia,serif;font-weight:400;font-size:30px;line-height:1.15;">Thanks for reaching out.</h1>
      <p style="margin:18px 0 0;color:#514c45;font-size:15px;line-height:1.6;">Hi ${escapeHtml(
        payload.name || "there",
      )}, we received your message and our team will write back within one business day.</p>
      ${detailsTable([["Subject", payload.subject]])}
      <p style="margin:20px 0 0;color:#514c45;font-size:14px;line-height:1.6;">Dermatix Clinic<br />1-905-605-8444<br />110 Ansley Grove Rd #10, Woodbridge, ON L4L 3R1</p>
    `),
  };
}

async function sendResendEmail({ to, replyTo, subject, text, html, tag }) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY.");
  }

  const prepared = prepareRecipients({ to, subject, text, html });
  const body = {
    from: getFromEmail(),
    to: prepared.to,
    subject: prepared.subject,
    text: prepared.text,
    html: prepared.html,
    tags: [{ name: "source", value: tag }],
  };

  if (replyTo) {
    body.reply_to = replyTo;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "User-Agent": "dermatix-website/1.0",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend email failed (${response.status}): ${errorText}`);
  }

  return response.json();
}

async function sendSubmissionEmails({ staffEmail, customerEmail, replyTo, tag }) {
  const staffEmails = getStaffEmails();

  if (!staffEmails.length) {
    throw new Error("No staff notification emails configured.");
  }

  await Promise.all([
    sendResendEmail({
      to: staffEmails,
      replyTo,
      tag,
      ...staffEmail,
    }),
    sendResendEmail({
      to: replyTo,
      tag,
      ...customerEmail,
    }),
  ]);
}

export async function submitBooking(formData) {
  const payload = {
    type: textValue(formData, "type") || "appointment",
    service: textValue(formData, "service"),
    name: textValue(formData, "name"),
    email: textValue(formData, "email"),
    phone: textValue(formData, "phone"),
    preferredDate: textValue(formData, "preferredDate"),
    preferredTime: textValue(formData, "preferredTime"),
    notes: textValue(formData, "notes"),
    submittedAt: new Date().toISOString(),
  };

  console.log("[Dermatix confirmed booking]", payload);

  try {
    await sendSubmissionEmails({
      staffEmail: staffBookingEmail(payload),
      customerEmail: customerBookingEmail(payload),
      replyTo: payload.email,
      tag: payload.type === "consultation" ? "consultation" : "appointment",
    });
  } catch (error) {
    console.error("[Dermatix booking email failed]", error);

    return {
      ok: false,
      message:
        "Something went wrong. Please try again or call 1-905-605-8444.",
    };
  }

  return {
    ok: true,
    message:
      "Thank you - your 30-minute booking is confirmed. A confirmation email is on its way.",
  };
}

export async function submitInquiry(formData) {
  const payload = {
    name: textValue(formData, "name"),
    email: textValue(formData, "email"),
    phone: textValue(formData, "phone"),
    subject: textValue(formData, "subject"),
    message: textValue(formData, "message"),
    submittedAt: new Date().toISOString(),
  };

  console.log("[Dermatix contact inquiry]", payload);

  try {
    await sendSubmissionEmails({
      staffEmail: staffInquiryEmail(payload),
      customerEmail: customerInquiryEmail(payload),
      replyTo: payload.email,
      tag: "contact",
    });
  } catch (error) {
    console.error("[Dermatix inquiry email failed]", error);

    return {
      ok: false,
      message:
        "Something went wrong. Please try again or call 1-905-605-8444.",
    };
  }

  return {
    ok: true,
    message:
      "Thank you - your message has been received. We'll be in touch within one business day.",
  };
}
