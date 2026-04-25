"use client";

import { useState } from "react";
import { submitInquiry } from "@/app/actions";

export default function InquiryForm() {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);
    setResult(null);
    const fd = new FormData(e.currentTarget);
    const r = await submitInquiry(fd);
    setResult(r);
    setPending(false);
    if (r?.ok) e.currentTarget.reset();
  }

  if (result?.ok) {
    return (
      <div className="bg-bone border border-ink/15 p-8 lg:p-12">
        <p className="eyebrow text-ink/50 mb-4">Sent</p>
        <h2 className="display text-[40px] lg:text-[56px] leading-tight tracking-tightest">
          Thank you. <span className="display-italic text-stone">We'll be in touch.</span>
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/75 max-w-md">
          {result.message}
        </p>
        <button
          type="button"
          onClick={() => setResult(null)}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-3 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-bone border border-ink/15 px-4 py-3 text-[14px] text-ink placeholder:text-ink/35 focus:outline-none focus:border-ink transition-colors rounded-[2px]";
  const labelClass = "eyebrow text-ink/55 mb-2 block";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
      <div className="md:col-span-2">
        <label htmlFor="phone" className={labelClass}>
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="subject" className={labelClass}>
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="e.g. question about HIFU pricing"
          className={inputClass}
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-none`}
          placeholder="Tell us a bit about what you're looking for, and we'll write back."
        />
      </div>

      {result && !result.ok && (
        <div className="md:col-span-2 text-[13px] text-red-700">
          Something went wrong. Please try again or call 1·905·605·8444.
        </div>
      )}

      <div className="md:col-span-2 flex items-center justify-between gap-4 pt-3">
        <p className="text-[12px] text-ink/55 max-w-md">
          We'll write back within one business day. Nothing is shared with third parties.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
        >
          {pending ? "Sending…" : "Send inquiry"}
          <span className="arrow-slide">→</span>
        </button>
      </div>
    </form>
  );
}
