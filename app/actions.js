"use server";

export async function submitBooking(formData) {
  const payload = {
    type: formData.get("type") || "appointment",
    service: formData.get("service") || "",
    name: formData.get("name") || "",
    email: formData.get("email") || "",
    phone: formData.get("phone") || "",
    preferredDate: formData.get("preferredDate") || "",
    preferredTime: formData.get("preferredTime") || "",
    notes: formData.get("notes") || "",
    submittedAt: new Date().toISOString(),
  };

  console.log("[Dermatix booking request]", payload);

  return {
    ok: true,
    message:
      "Thank you — your request has been received. We'll be in touch within one business day to confirm.",
  };
}

export async function submitInquiry(formData) {
  const payload = {
    name: formData.get("name") || "",
    email: formData.get("email") || "",
    phone: formData.get("phone") || "",
    subject: formData.get("subject") || "",
    message: formData.get("message") || "",
    submittedAt: new Date().toISOString(),
  };

  console.log("[Dermatix contact inquiry]", payload);

  return {
    ok: true,
    message:
      "Thank you — your message has been received. We'll be in touch within one business day.",
  };
}
