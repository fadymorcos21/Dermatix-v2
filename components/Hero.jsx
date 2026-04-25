import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 lg:pt-32 pb-10 overflow-hidden">
      {/* Top meta line */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between eyebrow text-ink/60">
        <span className="flex items-center gap-2">
          <span className="pulse-dot" aria-hidden /> Now booking · Spring 2026
        </span>
        <span>Woodbridge · Ontario · 43°47&apos;N</span>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mt-10 lg:mt-14 grid grid-cols-12 gap-6 lg:gap-10 items-end">
        {/* Headline column */}
        <div className="col-span-12 lg:col-span-7 animate-fade-up">
          <p className="eyebrow text-ink/50 mb-6">Medical Aesthetics · 01 / 10 Services</p>
          <h1 className="display text-[14vw] leading-[0.88] lg:text-[10.2rem] tracking-tightest">
            Skin, <span className="display-italic text-stone">considered.</span>
            <br />
            Beauty, <span className="display-italic text-gold">undetectable.</span>
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-14 max-w-2xl">
            <p className="text-[15px] leading-relaxed text-ink/75 max-w-md">
              A quiet studio in Woodbridge for the obsessively subtle. Board-certified
              medical aesthetics — Botox, filler, HIFU, PRP and more — delivered with the
              restraint of a couture atelier.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="#book"
                className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone pl-6 pr-5 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors"
              >
                Book a consult
                <span className="arrow-slide">→</span>
              </a>
              <a href="#services" className="text-[13px] editorial-link text-ink/70">
                View menu
              </a>
            </div>
          </div>
        </div>

        {/* Image stack */}
        <div className="col-span-12 lg:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full max-w-[520px] ml-auto">
            <div className="absolute inset-0 rounded-[2px] overflow-hidden grain vignette animate-scale-in">
              <Image
                src="/images/hero-portrait.jpg"
                alt="Dermatix patient portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>

            {/* Floating spec card */}
            <div className="absolute -left-8 lg:-left-16 bottom-10 bg-bone/90 backdrop-blur-sm border border-ink/10 px-5 py-4 w-[240px] shadow-[0_20px_60px_-30px_rgba(23,21,15,0.35)] animate-fade-up">
              <p className="eyebrow text-ink/50">Protocol No. 04</p>
              <p className="display text-[22px] leading-tight mt-1">Lip Architecture</p>
              <p className="text-[12px] text-ink/60 mt-2">
                Hyaluronic filler · 45 min · undetectable finish
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-ink/50 tracking-wider2 uppercase">
                <span>from $650</span>
                <span className="arrow-slide">→</span>
              </div>
            </div>

            {/* Vertical ruler */}
            <div className="hidden lg:flex absolute -right-8 top-0 bottom-0 flex-col justify-between text-[10px] text-ink/40 tracking-wider2 uppercase">
              <span>01 · Consult</span>
              <span>02 · Design</span>
              <span>03 · Treat</span>
              <span>04 · Glow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ruler / stats */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mt-16 lg:mt-24 border-t border-ink/10 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-ink/80">
        {[
          { n: "12k+", l: "Treatments delivered" },
          { n: "10", l: "Signature protocols" },
          { n: "4.9★", l: "Across 800+ reviews" },
          { n: "2012", l: "Serving Woodbridge since" },
        ].map((s) => (
          <div key={s.l} className="flex items-baseline gap-4">
            <span className="num text-[36px] lg:text-[44px] tracking-tight">{s.n}</span>
            <span className="text-[12px] text-ink/55 tracking-wide">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
