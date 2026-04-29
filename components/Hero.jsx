import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          // src="/images/hero-option-2.png"
          src="/images/landing-hero-background.jpg"
          alt="Dermatix patient portrait"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_top] lg:object-[65%_top]"
        />
        {/* Light warm wash on the left to brighten the text area, dies off well before the model */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,236,222,0.7)_0%,rgba(248,236,222,0.65)_38%,rgba(248,236,222,0.2)_46%,transparent_52%)] lg:bg-[linear-gradient(to_right,rgba(248,236,222,0.65)_0%,rgba(248,236,222,0.6)_40%,rgba(248,236,222,0.18)_48%,transparent_54%)]"
        />
        {/* Soft top fade so the nav reads cleanly */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgba(35,28,22,0.18)] to-transparent"
        />
      </div>

      {/* Hero copy */}
      <div className="relative z-10 mx-auto max-w-[1400px] h-full px-6 lg:px-12 flex items-center">
        <div className="max-w-xl animate-fade-up">
          <p className="eyebrow text-[#8a1f2b] mb-5 tracking-wider3 text-[10px]">
            Dermatix Clinic Woodbridge
          </p>
          <h1 className="display text-ink text-[9vw] sm:text-[7vw] lg:text-[5.4rem] xl:text-[6rem] leading-[0.95] tracking-tightest">
            Medical
            <br />
            aesthetics with a
            <br />
            lighter touch.
          </h1>
          <p className="mt-6 text-[14px] lg:text-[15px] leading-relaxed text-ink/80 max-w-sm">
            Personalized injectables, skin renewal, HIFU, PRP, laser hair
            removal, and body contouring in Woodbridge.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/book/consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone pl-4 pr-5 py-3 text-[12px] tracking-wide hover:bg-moss transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="4.5" width="18" height="16" rx="2" />
                <path d="M3 9h18" />
                <path d="M8 3v3M16 3v3" />
              </svg>
              Book consultation
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-bone/85 backdrop-blur-sm text-ink px-5 py-3 text-[12px] tracking-wide border border-ink/10 hover:bg-bone transition-colors"
            >
              View treatments
              <span className="arrow-slide">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Lower meta strip */}
      <div className="absolute bottom-6 inset-x-0 z-10 px-6 lg:px-12">
        <div className="mx-auto max-w-[1400px] flex items-center justify-between eyebrow text-ink/70">
          <span className="hidden sm:flex items-center gap-2">
            <span className="pulse-dot" aria-hidden /> Now booking · Spring 2026
          </span>
          <span className="hidden md:inline">
            10 Ansley Grove Rd · Woodbridge, ON
          </span>
          <span className="ml-auto sm:ml-0">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
