import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-ink text-bone">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/shutterstock_2693129315.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/75 to-ink" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="flex items-center justify-between eyebrow text-bone/60">
          <span>§ 04 — Bookings</span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="pulse-dot" style={{ background: "#d9c4a1" }} />
            Taking new patients · 2026
          </span>
        </div>

        <Reveal>
          <h2 className="mt-12 display text-[13vw] lg:text-[10rem] leading-[0.88] tracking-tightest max-w-5xl">
            Begin with a{" "}
            <span className="display-italic text-champagne">quiet</span>
            <br />
            conversation.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal className="col-span-1 lg:col-span-5 max-w-md">
            <p className="text-[15px] leading-relaxed text-bone/75">
              Your first consultation is thirty minutes. No pressure, no plan
              without your sign-off. We&apos;ll discuss, map, and quote in
              writing before any product is touched.
            </p>
          </Reveal>

          <Reveal className="col-span-1 lg:col-span-7" delay={120}>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="tel:19056058444"
                className="group inline-flex items-center justify-between gap-3 rounded-full border border-bone/30 px-7 py-5 text-[13px] tracking-wider2 uppercase hover:bg-bone hover:text-ink transition-colors"
              >
                Call 1·905·605·8444
                <span className="arrow-slide">→</span>
              </a>
              <Link
                href="/consultation"
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-bone text-ink px-7 py-5 text-[13px] tracking-wider2 uppercase hover:bg-champagne transition-colors"
              >
                Book consult
                <span className="arrow-slide">→</span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Decorative bottom line */}
        <div className="mt-24 pt-6 border-t border-bone/20 flex items-center justify-between eyebrow text-bone/50">
          <span>Dermatix · established 2019</span>
          <span className="display-italic text-champagne text-[18px]">
            — see you soon.
          </span>
          <span>Woodbridge · Ontario</span>
        </div>
      </div>
    </section>
  );
}
