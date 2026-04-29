import Image from "next/image";
import Reveal from "./Reveal";

const featured = [
  {
    no: "S/01",
    title: "The Whisper Lip",
    caption:
      "Hyaluronic filler in the under-dosed, hydration-first tradition. Restores border clarity and softens philtrum asymmetry without volume tells.",
    img: "/images/botox-lip.jpg",
    meta: ["45 min", "Hyaluronic acid", "12–16 mo result"],
  },
  {
    no: "S/02",
    title: "The Editorial Brow",
    caption:
      "Microdosed neuromodulator, placed against our proportional grid. Lifts the lateral brow by 1–2 millimetres — cinematic, never surgical.",
    img: "/images/editorial-portrait.jpg",
    meta: ["20 min", "Microdose", "3–4 mo result"],
  },
  {
    no: "S/03",
    title: "The HIFU Rebuild",
    caption:
      "High-intensity ultrasound re-scaffolds collagen in the lower face and neck. One appointment, twelve months of build, zero downtime.",
    img: "/images/hifu-treatment.jpg",
    meta: ["75 min", "Non-surgical", "12 mo build"],
  },
];

export default function Signature() {
  return (
    <section
      id="signature"
      className="relative py-28 lg:py-40 bg-ink text-bone overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 lg:mb-24">
          <Reveal>
            <p className="eyebrow text-bone/50 mb-3">
              § 03 — Signature Protocols
            </p>
            <h2 className="display text-[10vw] lg:text-[7rem] leading-[0.92] tracking-tightest text-bone">
              The house's{" "}
              <span className="display-italic text-champagne">quietest</span>
              <br />
              greatest hits.
            </h2>
          </Reveal>
          <Reveal delay={120} className="max-w-sm">
            <p className="text-[14px] leading-relaxed text-bone/70">
              Three protocols we've taught to every injector on the floor. Each
              one is the answer to a question a patient asks at least three
              times a week.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {featured.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden grain">
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover curtain-img transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] text-bone/80 tracking-wider2 uppercase">
                    <span>{f.no}</span>
                    <span className="flex items-center gap-1">
                      <span className="h-px w-6 bg-bone/60" />
                      Dermatix
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-bone/85">
                    <span className="eyebrow">{f.meta[0]}</span>
                    <span className="eyebrow">{f.meta[2]}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <h3 className="display text-[32px] lg:text-[40px] leading-none text-bone">
                    {f.title}
                  </h3>
                  <span className="arrow-slide text-bone/70 text-xl">→</span>
                </div>
                <p className="mt-4 text-[13.5px] leading-relaxed text-bone/70 max-w-md">
                  {f.caption}
                </p>
                <div className="mt-5 flex items-center gap-3 text-[11px] tracking-wider2 uppercase text-bone/55">
                  {f.meta.map((m, j) => (
                    <span key={j} className="flex items-center gap-3">
                      {m}
                      {j < f.meta.length - 1 && (
                        <span className="h-px w-4 bg-bone/30" />
                      )}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Decorative bottom type */}
        <Reveal>
          <p className="mt-20 lg:mt-28 display-italic text-bone/30 text-[8vw] lg:text-[6rem] leading-none">
            — noticed, never placed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
