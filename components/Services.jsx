import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-36 bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 lg:mb-20">
          <Reveal>
            <p className="eyebrow text-ink/50 mb-3">§ 02 — Menu</p>
            <h2 className="display text-[10vw] lg:text-[6.5rem] leading-[0.95] tracking-tightest">
              Ten <span className="display-italic text-stone">protocols.</span>
              <br />
              Zero theatrics.
            </h2>
          </Reveal>
          <Reveal delay={140} className="max-w-sm">
            <p className="text-[14px] leading-relaxed text-ink/70">
              A tight, intentional menu — each protocol refined over thousands of
              treatments. Everything below is physician-led and delivered in-house.
            </p>
            <Link
              href="/consultation"
              className="mt-5 inline-flex items-center gap-2 text-[12px] tracking-wider2 uppercase editorial-link"
            >
              Request a consult <span className="arrow-slide">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <Link
                href={`/services/${s.slug}`}
                className="group bg-bone p-6 lg:p-7 h-full min-h-[420px] flex flex-col justify-between curtain relative"
              >
                <div className="flex items-start justify-between">
                  <span className="eyebrow text-ink/40">{s.no}</span>
                  <span className="eyebrow text-ink/40">{s.time}</span>
                </div>

                <div className="relative aspect-[4/3] w-full my-5 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover curtain-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
                </div>

                <div>
                  <h3 className="display text-[30px] lg:text-[34px] leading-none tracking-tightest">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/65 max-w-sm">
                    {s.blurb}
                  </p>
                  <div className="mt-5 flex items-center gap-2 flex-wrap">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-wider2 uppercase px-2.5 py-1 rounded-full border border-ink/15 text-ink/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="eyebrow text-ink/60">{s.time}</span>
                    <span className="arrow-slide text-ink/70 text-lg">→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
