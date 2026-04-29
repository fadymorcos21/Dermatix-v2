"use client";

import { useState } from "react";
import { submitBooking } from "@/app/actions";
import { services } from "@/lib/services";

export default function BookingForm({ initialService = "" }) {
  const [service, setService] = useState(initialService);
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setPending(true);
    setResult(null);
    const fd = new FormData(form);
    fd.set("type", "appointment");
    fd.set("service", service);
    const r = await submitBooking(fd);
    setResult(r);
    setPending(false);
    if (r?.ok) form.reset();
  }

  if (result?.ok) {
    return (
      <div className="bg-bone border border-ink/15 p-8 lg:p-12">
        <p className="eyebrow text-ink/50 mb-4">Confirmed</p>
        <h2 className="display text-[40px] lg:text-[56px] leading-tight tracking-tightest">
          Thank you. <span className="display-italic text-stone">You're booked.</span>
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/75 max-w-md">
          {result.message}
        </p>
        <button
          type="button"
          onClick={() => setResult(null)}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-3 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors"
        >
          Book another
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-bone border border-ink/15 px-4 py-3 text-[14px] text-ink placeholder:text-ink/35 focus:outline-none focus:border-ink transition-colors rounded-[2px]";
  const labelClass = "eyebrow text-ink/55 mb-2 block";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="md:col-span-2">
        <label htmlFor="service-select" className={labelClass}>
          Service
        </label>
        <select
          id="service-select"
          name="service-select"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          className={inputClass}
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="preferredDate" className={labelClass}>
            Date
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className={labelClass}>
            Time
          </label>
          <input
            id="preferredTime"
            name="preferredTime"
            type="time"
            className={inputClass}
          />
        </div>
      </div>

      <div className="md:col-span-2">
        <label htmlFor="notes" className={labelClass}>
          Notes (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Anything we should know — concerns, prior treatments, goals."
        />
      </div>

      {result && !result.ok && (
        <div className="md:col-span-2 text-[13px] text-red-700">
          Something went wrong. Please try again or call 1·905·605·8444.
        </div>
      )}

      <div className="md:col-span-2 flex items-center justify-between gap-4 pt-3">
        <p className="text-[12px] text-ink/55 max-w-md">
          Your 30-minute booking is confirmed by email. No charge until your visit.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
        >
          {pending ? "Sending…" : "Confirm booking"}
          <span className="arrow-slide">→</span>
        </button>
      </div>
    </form>
  );
}
