// Booking validation, slot generation and overlap rules.
// Pure functions only — no DB, no AWS, no React.
// Times are tracked as "minutes since local midnight" in America/Toronto.

const CLINIC_TIMEZONE = "America/Toronto";
const SLOT_INTERVAL_MINUTES = 15;

// Mon–Fri 9–18, Sat 9–16, Sun closed.
// Keys are JS getDay() values: 0 Sun … 6 Sat.
const CLINIC_HOURS_BY_DOW = {
  0: null,
  1: { open: 9 * 60, close: 18 * 60 },
  2: { open: 9 * 60, close: 18 * 60 },
  3: { open: 9 * 60, close: 18 * 60 },
  4: { open: 9 * 60, close: 18 * 60 },
  5: { open: 9 * 60, close: 18 * 60 },
  6: { open: 9 * 60, close: 16 * 60 },
};

const SERVICE_DURATIONS = {
  consultation: 30,
  botox: 30,
  "dermal-filler": 30,
  prp: 60,
  hydrafacial: 60,
};

const DEFAULT_DURATION_MINUTES = 60;

export function getDuration({ type, service }) {
  if (type === "consultation") return SERVICE_DURATIONS.consultation;
  if (service && SERVICE_DURATIONS[service] !== undefined) {
    return SERVICE_DURATIONS[service];
  }
  return DEFAULT_DURATION_MINUTES;
}

export function isValidDateString(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

export function isValidTimeString(value) {
  return typeof value === "string" && /^\d{2}:\d{2}$/.test(value);
}

export function timeToMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function minutesToTime(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// "Today" as an ISO date string (YYYY-MM-DD) in clinic timezone.
export function todayInClinicTz() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: CLINIC_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

// Current minute-of-day in clinic timezone.
export function nowMinutesInClinicTz() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: CLINIC_TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  let hour = 0;
  let minute = 0;
  for (const p of parts) {
    if (p.type === "hour") hour = Number(p.value);
    if (p.type === "minute") minute = Number(p.value);
  }
  // Midnight comes back as "24:00" from some locales; normalize.
  if (hour === 24) hour = 0;
  return hour * 60 + minute;
}

// Day-of-week for a YYYY-MM-DD date string.
// Parses as UTC midnight to avoid host-timezone shifts; the calendar day
// is what matters here, not the absolute moment.
export function dayOfWeekFromDate(dateString) {
  const [y, m, d] = dateString.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

export function clinicHoursForDate(dateString) {
  return CLINIC_HOURS_BY_DOW[dayOfWeekFromDate(dateString)] ?? null;
}

export function isClinicOpen(dateString) {
  return clinicHoursForDate(dateString) !== null;
}

export function isPastDate(dateString) {
  return dateString < todayInClinicTz();
}

// Every possible 15-min start time on this date that fits within hours.
export function generateAllStartSlots(dateString, durationMinutes) {
  const hours = clinicHoursForDate(dateString);
  if (!hours) return [];
  const lastStart = hours.close - durationMinutes;
  if (lastStart < hours.open) return [];
  const slots = [];
  for (let m = hours.open; m <= lastStart; m += SLOT_INTERVAL_MINUTES) {
    slots.push(m);
  }
  return slots;
}

// If booking for today, drop any slots that have already started.
export function filterPastSlots(dateString, slots) {
  if (dateString !== todayInClinicTz()) return slots;
  const now = nowMinutesInClinicTz();
  return slots.filter((m) => m > now);
}

// True if [aStart, aEnd) overlaps any of the existing { start, end } intervals.
export function hasOverlap(aStart, aEnd, existing) {
  return existing.some((b) => aStart < b.end && b.start < aEnd);
}

// Filter out start times whose [start, start+duration) overlaps an existing booking.
export function filterAvailableStarts(slots, durationMinutes, existing) {
  return slots.filter(
    (start) => !hasOverlap(start, start + durationMinutes, existing),
  );
}

// One-shot: list of "HH:MM" strings free for a date+duration.
export function computeAvailableTimes(dateString, durationMinutes, existing) {
  const all = generateAllStartSlots(dateString, durationMinutes);
  const future = filterPastSlots(dateString, all);
  const free = filterAvailableStarts(future, durationMinutes, existing);
  return free.map(minutesToTime);
}

// Validate a booking attempt against time/date rules (no DB lookup here).
// Returns { ok: true, startMinutes, endMinutes, durationMinutes } on success,
// or { ok: false, message } with a user-friendly reason.
export function validateBooking({ date, time, type, service }) {
  if (!isValidDateString(date)) {
    return { ok: false, message: "Please choose a valid date." };
  }
  if (!isValidTimeString(time)) {
    return { ok: false, message: "Please choose a valid time." };
  }

  const startMinutes = timeToMinutes(time);
  if (startMinutes % SLOT_INTERVAL_MINUTES !== 0) {
    return {
      ok: false,
      message: "Appointments must start in 15-minute intervals.",
    };
  }

  if (isPastDate(date)) {
    return {
      ok: false,
      message: "You cannot book an appointment in the past.",
    };
  }

  const hours = clinicHoursForDate(date);
  if (!hours) {
    return {
      ok: false,
      message: "Please select a time during clinic hours.",
    };
  }

  const durationMinutes = getDuration({ type, service });
  const endMinutes = startMinutes + durationMinutes;

  if (startMinutes < hours.open || endMinutes > hours.close) {
    return {
      ok: false,
      message: "Please select a time during clinic hours.",
    };
  }

  if (date === todayInClinicTz() && startMinutes <= nowMinutesInClinicTz()) {
    return {
      ok: false,
      message: "You cannot book an appointment in the past.",
    };
  }

  return { ok: true, startMinutes, endMinutes, durationMinutes };
}

export const BOOKING_CONFIG = {
  CLINIC_TIMEZONE,
  SLOT_INTERVAL_MINUTES,
};
