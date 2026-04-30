import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const featured = [
  {
    no: "S/01",
    title: "The Whisper Lip",
    caption:
      "A dermal filler conversation for lips: shape, border, proportion and hydration, planned around the face you already have.",
    img: "/images/serice-lip-filler-option.jpg",
    meta: ["Dermal Filler", "Lips", "Proportion"],
    href: "/services/dermal-filler",
  },
  {
    no: "S/02",
    title: "The Soft Reset",
    caption:
      "A neuromodulator treatment for expression lines, planned around movement rather than stillness.",
    img: "/images/serice-botox.jpg",
    meta: ["Injectable", "Expression", "Movement"],
    href: "/services/botox",
  },
  {
    no: "S/03",
    title: "The HIFU Lift",
    caption:
      "Focused ultrasound for selected lifting and tightening goals, with gradual collagen remodeling.",
    img: "/images/service-7-skin-tightening.jpg",
    meta: ["Ultrasound", "Tightening", "Collagen"],
    href: "/services/hifu-skin-tightening",
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
              § 03 — Service Spotlight
            </p>
            <h2 className="display text-[10vw] lg:text-[7rem] leading-[0.92] tracking-tightest text-bone">
              Service{" "}
              <span className="display-italic text-champagne">spotlight</span>
              <br />
              selections.
            </h2>
          </Reveal>
          <Reveal delay={120} className="max-w-sm">
            <p className="text-[14px] leading-relaxed text-bone/70">
              Three editorial starting points for common goals: subtle lip
              structure, softer expression lines, and a non-surgical tightening
              conversation.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {featured.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <Link href={f.href} className="group block">
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
                    <span key={m} className="flex items-center gap-3">
                      {m}
                      {j < f.meta.length - 1 && (
                        <span className="h-px w-4 bg-bone/30" />
                      )}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-20 lg:mt-28 display-italic text-bone/30 text-[8vw] lg:text-[6rem] leading-none">
            — noticed, never placed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
