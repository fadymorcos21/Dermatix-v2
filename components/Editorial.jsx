import Image from "next/image";
import Reveal from "./Reveal";

export default function Editorial() {
  return (
    <section className="relative bg-bone overflow-hidden">
      {/* Full-bleed image with overlay */}
      <div className="relative h-[85vh] min-h-[640px] w-full">
        <Image
          src="/images/dark-filler.jpg"
          alt="Editorial"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />
        <div className="absolute inset-0 grain" />

        <div className="relative z-10 h-full mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col justify-between py-16">
          <div className="flex items-center justify-between eyebrow text-bone/70">
            <span>§ 07 — Editorial</span>
          </div>

          <Reveal className="max-w-4xl">
            <p className="display text-bone text-[9vw] lg:text-[6rem] leading-[0.98] tracking-tightest">
              &ldquo;The best aesthetic work is the work you never notice — it&apos;s
              the confidence that walks into a room{" "}
              <span className="display-italic text-champagne">
                a half-second before the face does.
              </span>
              &rdquo;
            </p>
            <div className="mt-10 flex items-center gap-4 text-bone/80 text-[13px] tracking-wide">
              <span className="h-px w-10 bg-bone/60" />
              Dermatix Woodbridge
            </div>
          </Reveal>

          <div className="flex items-end justify-between eyebrow text-bone/60">
            <span>Dermatix · established 2019</span>
            <span className="hidden sm:inline">Woodbridge · Ontario</span>
          </div>
        </div>
      </div>

    </section>
  );
}
