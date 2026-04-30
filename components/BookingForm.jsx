"use client";

import { useEffect, useMemo, useState } from "react";
import { submitBooking } from "@/app/actions";
import { services } from "@/lib/services";

function formatTimeLabel(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const displayH = h % 12 || 12;
  return `${displayH}:${String(m).padStart(2, "0")} ${period}`;
}

function todayInToronto() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export default function BookingForm({ initialService = "" }) {
  const [service, setService] = useState(initialService);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [availability, setAvailability] = useState({
    status: "idle",
    times: [],
  });
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState(null);

  const todayStr = useMemo(() => todayInToronto(), []);

  // Fetch available start times whenever date + service change.
  useEffect(() => {
    if (!date || !service) {
      setAvailability({ status: "idle", times: [] });
      setTime("");
      return;
    }

    let cancelled = false;
    setAvailability({ status: "loading", times: [] });
    setTime("");

    const url = `/api/availability?date=${encodeURIComponent(
      date,
    )}&service=${encodeURIComponent(service)}&type=appointment`;

    fetch(url)
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (cancelled) return;
        if (!r.ok || !data.ok) {
          setAvailability({
            status: "error",
            times: [],
            message: data?.message || "Could not load available times.",
          });
          return;
        }
        setAvailability({
          status: "loaded",
          times: data.times || [],
          reason: data.reason,
        });
      })
      .catch(() => {
        if (cancelled) return;
        setAvailability({
          status: "error",
          times: [],
          message: "Could not load available times.",
        });
      });

    return () => {
      cancelled = true;
    };
  }, [date, service]);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setPending(true);
    setResult(null);
    const fd = new FormData(form);
    fd.set("type", "appointment");
    fd.set("service", service);
    fd.set("preferredDate", date);
    fd.set("preferredTime", time);
    const r = await submitBooking(fd);
    setResult(r);
    setPending(false);
    if (r?.ok) {
      form.reset();
      setService(initialService);
      setDate("");
      setTime("");
      setAvailability({ status: "idle", times: [] });
    }
  }

  if (result?.ok) {
    return (
      <div className="bg-bone border border-ink/15 p-8 lg:p-12">
        <p className="eyebrow text-ink/50 mb-4">Confirmed</p>
        <h2 className="display text-[40px] lg:text-[56px] leading-tight tracking-tightest">
          Thank you. <span className="display-italic text-stone">You&apos;re booked.</span>
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
    "w-full bg-bone border border-ink/15 px-4 py-3 text-[14px] text-ink placeholder:text-ink/35 focus:outline-none focus:border-ink transition-colors rounded-[2px] disabled:opacity-60 disabled:cursor-not-allowed";
  const labelClass = "eyebrow text-ink/55 mb-2 block";

  const timeDisabled =
    availability.status !== "loaded" || availability.times.length === 0;

  let timePlaceholder = "Select a time…";
  if (!service) timePlaceholder = "Pick a service first";
  else if (!date) timePlaceholder = "Pick a date first";
  else if (availability.status === "loading") timePlaceholder = "Loading available times…";
  else if (availability.status === "error") timePlaceholder = availability.message;
  else if (availability.status === "loaded") {
    if (availability.reason === "CLOSED")
      timePlaceholder = "Closed on this date";
    else if (availability.reason === "PAST")
      timePlaceholder = "That date has passed";
    else if (availability.times.length === 0)
      timePlaceholder = "No times available — try another date";
  }

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
            required
            min={todayStr}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className={labelClass}>
            Time
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            disabled={timeDisabled}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={inputClass}
          >
            <option value="">{timePlaceholder}</option>
            {availability.times.map((t) => (
              <option key={t} value={t}>
                {formatTimeLabel(t)}
              </option>
            ))}
          </select>
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
          {result.message ||
            "Something went wrong. Please try again or call 1·905·605·8444."}
        </div>
      )}

      <div className="md:col-span-2 flex items-center justify-between gap-4 pt-3">
        <p className="text-[12px] text-ink/55 max-w-md">
          Your booking is confirmed by email. No charge until your visit.
        </p>
        <button
          type="submit"
          disabled={pending || !time}
          className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
        >
          {pending ? "Sending…" : "Confirm booking"}
          <span className="arrow-slide">→</span>
        </button>
      </div>
    </form>
  );
}
