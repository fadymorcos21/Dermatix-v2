import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  services,
  getServiceBySlug,
  getServiceSlugs,
} from "@/lib/services";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.name} · Dermatix Clinic Woodbridge`,
    description: service.summary,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="relative">
      <Nav />

      <section className="relative bg-bone pt-28 lg:pt-32 pb-12 lg:pb-16 border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-4 eyebrow text-ink/50 mb-6">
              <Link href="/services" className="editorial-link">
                Services
              </Link>
              <span>/</span>
              <span>{service.no}</span>
            </div>
            <h1 className="display text-[12vw] sm:text-[8vw] lg:text-[6.5rem] xl:text-[7.2rem] leading-[0.92] tracking-tightest max-w-5xl">
              {service.name}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] lg:text-[17px] leading-relaxed text-ink/75">
              {service.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 eyebrow text-ink/60">
              <span>{service.time}</span>
              <span className="w-1 h-1 rounded-full bg-ink/30" />
              <span>{service.tags.join(" · ")}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`/book?service=${service.slug}`}
                className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors"
              >
                Book this treatment
                <span className="arrow-slide">→</span>
              </Link>
              <Link
                href="/book/consultation"
                className="group inline-flex items-center gap-2 rounded-full bg-bone text-ink border border-ink/15 px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-cream transition-colors"
              >
                Book a consultation
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden grain vignette">
              <Image
                src={service.img}
                alt={service.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-char text-bone border-b border-bone/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10 border-x border-bone/10">
            {service.facts.map((fact) => (
              <div key={fact.label} className="bg-char py-6 px-4 lg:px-6">
                <p className="eyebrow text-bone/45 mb-3">{fact.label}</p>
                <p className="display text-[24px] lg:text-[30px] leading-tight tracking-tightest">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="eyebrow text-ink/50 mb-3">§ The read</p>
            <h2 className="display text-[42px] lg:text-[58px] leading-tight tracking-tightest">
              More than
              <br />
              <span className="display-italic text-stone">a menu item.</span>
            </h2>
          </Reveal>

          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-start">
                <div className="space-y-6">
                  {service.story.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[18px] lg:text-[22px] leading-relaxed text-ink/78 max-w-3xl"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="border-y border-ink/15 divide-y divide-ink/10">
                  <div className="py-5">
                    <p className="eyebrow text-ink/45 mb-3">Good fit for</p>
                    <ul className="space-y-2">
                      {service.goodFor.slice(0, 4).map((item) => (
                        <li
                          key={item}
                          className="text-[14px] leading-relaxed text-ink/70 flex gap-3"
                        >
                          <span className="mt-[0.55em] h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="py-5">
                    <p className="eyebrow text-ink/45 mb-3">Keep in mind</p>
                    <p className="text-[14px] leading-relaxed text-ink/68">
                      Service details, candidacy, treatment intensity, downtime,
                      and sequencing should be confirmed during a consultation.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="eyebrow text-ink/50 mb-3">§ Fit check</p>
            <h2 className="display text-[42px] lg:text-[56px] leading-tight tracking-tightest">
              Useful for,
              <br />
              <span className="display-italic text-stone">not universal.</span>
            </h2>
          </Reveal>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
            <div className="bg-bone p-6 lg:p-8">
              <p className="eyebrow text-ink/45 mb-6">Common conversations</p>
              <ul className="divide-y divide-ink/10">
                {service.goodFor.map((t, i) => (
                  <Reveal key={t} delay={i * 45}>
                    <li className="py-4 flex items-center justify-between gap-4 text-[15px] leading-snug">
                      <span>{t}</span>
                      <span className="eyebrow text-ink/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div className="bg-cream p-6 lg:p-8">
              <p className="eyebrow text-ink/45 mb-6">Boundaries</p>
              <ul className="divide-y divide-ink/10">
                {service.boundaries.map((item, i) => (
                  <Reveal key={item} delay={i * 45}>
                    <li className="py-4 grid grid-cols-[auto_1fr] gap-4 text-[14px] leading-relaxed text-ink/70">
                      <span className="eyebrow text-ink/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-12 lg:mb-16 max-w-3xl">
            <p className="eyebrow text-ink/50 mb-3">§ The protocol</p>
            <h2 className="display text-[42px] lg:text-[64px] leading-tight tracking-tightest">
              How a {service.name.toLowerCase()} conversation{" "}
              <span className="display-italic text-stone">unfolds.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
            {service.process.map((p) => (
              <div key={p.step} className="bg-cream p-6 lg:p-8 min-h-[220px]">
                <div className="eyebrow text-ink/40 mb-5">{p.step}</div>
                <h3 className="display text-[28px] leading-tight tracking-tightest">
                  {p.label}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-ink/68">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="eyebrow text-ink/50 mb-3">§ FAQ</p>
            <h2 className="display text-[42px] lg:text-[56px] leading-tight tracking-tightest">
              The small
              <br />
              <span className="display-italic text-stone">print, clearly.</span>
            </h2>
          </Reveal>
          <div className="col-span-12 lg:col-span-8">
            <ul className="border-t border-ink/10">
              {service.faqs.map((f, i) => (
                <li
                  key={f.q}
                  className="py-6 lg:py-8 border-b border-ink/10 grid grid-cols-12 gap-4"
                >
                  <span className="col-span-12 md:col-span-1 eyebrow text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-12 md:col-span-11">
                    <p className="display text-[24px] lg:text-[32px] leading-tight tracking-tightest">
                      {f.q}
                    </p>
                    <p className="mt-3 text-[14px] lg:text-[15px] leading-relaxed text-ink/70 max-w-3xl">
                      {f.a}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow text-bone/50 mb-4">Next step</p>
            <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6rem] xl:text-[7rem] leading-[0.95] tracking-tightest">
              Start with
              <br />
              <span className="display-italic text-champagne">a consult.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 lg:items-end">
            <Link
              href={`/book?service=${service.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-bone text-ink px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-champagne transition-colors"
            >
              Book this treatment
              <span className="arrow-slide">→</span>
            </Link>
            <Link
              href="/book/consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-transparent text-bone border border-bone/30 px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-bone/10 transition-colors"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-bone">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="eyebrow text-ink/50 mb-2">More from the menu</p>
              <h2 className="display text-[36px] lg:text-[48px] leading-tight tracking-tightest">
                Other <span className="display-italic text-stone">protocols.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="text-[12px] tracking-wider2 uppercase editorial-link"
            >
              All services <span className="arrow-slide">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-bone p-6 lg:p-7 min-h-[360px] flex flex-col justify-between curtain"
              >
                <div className="flex items-start justify-between">
                  <span className="eyebrow text-ink/40">{s.no}</span>
                  <span className="eyebrow text-ink/40">{s.modality}</span>
                </div>
                <div className="relative aspect-[4/3] w-full my-5 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover curtain-img"
                  />
                </div>
                <div>
                  <h3 className="display text-[26px] leading-none tracking-tightest">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[13px] text-ink/60 max-w-sm">
                    {s.blurb}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
