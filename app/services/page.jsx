import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export const metadata = {
  title: "Services · Dermatix Clinic Woodbridge",
  description:
    "A tight, intentional menu of medical aesthetic protocols — physician-led and delivered in-house in Woodbridge, Ontario.",
};

export default function ServicesPage() {
  return (
    <main className="relative">
      <Nav />

      <PageHeader
        eyebrow="The Menu"
        title="Ten protocols."
        italic="Zero theatrics."
        lede="Every treatment below is physician-led, delivered in-house, and refined over thousands of cases. Choose a service to read more — or book a consultation and we'll design a plan with you."
      />

      <section className="bg-bone pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10 mt-8">
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

          <div className="mt-16 lg:mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-ink/10 pt-10">
            <div>
              <p className="eyebrow text-ink/50 mb-2">Not sure where to start?</p>
              <p className="display text-[28px] lg:text-[36px] leading-tight tracking-tightest max-w-xl">
                Book a consultation and we'll build the right plan together.
              </p>
            </div>
            <Link
              href="/book/consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors shrink-0"
            >
              Book consultation
              <span className="arrow-slide">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
