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

      {/* Hero band */}
      <section className="relative pt-28 lg:pt-32 pb-12 lg:pb-16 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-4 eyebrow text-ink/50 mb-6">
              <Link href="/services" className="editorial-link">
                Services
              </Link>
              <span>/</span>
              <span>{service.no}</span>
            </div>
            <h1 className="display text-[12vw] sm:text-[8vw] lg:text-[6.5rem] xl:text-[7.2rem] leading-[0.92] tracking-tightest">
              {service.name}
            </h1>
            <p className="mt-6 max-w-xl text-[15px] lg:text-[16px] leading-relaxed text-ink/75">
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

      {/* What it treats */}
      <section className="py-20 lg:py-28 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="eyebrow text-ink/50 mb-3">§ What it treats</p>
            <h2 className="display text-[42px] lg:text-[56px] leading-tight tracking-tightest">
              Built for a
              <br />
              <span className="display-italic text-stone">specific result.</span>
            </h2>
          </Reveal>
          <div className="col-span-12 lg:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 border-t border-ink/10">
              {service.treats.map((t, i) => (
                <Reveal key={t} delay={i * 60}>
                  <li className="py-4 border-b border-ink/10 flex items-center justify-between text-[15px]">
                    <span>{t}</span>
                    <span className="eyebrow text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-cream border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-12 lg:mb-16">
            <p className="eyebrow text-ink/50 mb-3">§ The protocol</p>
            <h2 className="display text-[42px] lg:text-[64px] leading-tight tracking-tightest max-w-3xl">
              How a {service.name.toLowerCase()} visit{" "}
              <span className="display-italic text-stone">runs.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
            {service.process.map((p) => (
              <div key={p.step} className="bg-cream p-6 lg:p-8 min-h-[200px]">
                <div className="eyebrow text-ink/40 mb-4">{p.step}</div>
                <h3 className="display text-[26px] leading-tight tracking-tightest">
                  {p.label}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink/65">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="eyebrow text-ink/50 mb-3">§ Common questions</p>
            <h2 className="display text-[42px] lg:text-[56px] leading-tight tracking-tightest">
              Honest
              <br />
              <span className="display-italic text-stone">answers.</span>
            </h2>
          </Reveal>
          <div className="col-span-12 lg:col-span-8">
            <ul className="border-t border-ink/10">
              {service.faqs.map((f, i) => (
                <li
                  key={f.q}
                  className="py-6 border-b border-ink/10 grid grid-cols-12 gap-4"
                >
                  <span className="col-span-12 md:col-span-1 eyebrow text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-12 md:col-span-11">
                    <p className="display text-[22px] lg:text-[26px] leading-tight tracking-tightest">
                      {f.q}
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink/70 max-w-2xl">
                      {f.a}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 lg:py-32 bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow text-bone/50 mb-4">Next step</p>
            <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6rem] xl:text-[7rem] leading-[0.95] tracking-tightest">
              Book a {service.name.toLowerCase()}
              <br />
              <span className="display-italic text-champagne">visit.</span>
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
              Or book a consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
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
