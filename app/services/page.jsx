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
    "Explore the Dermatix Clinic service menu in Woodbridge, Ontario, including injectables, skin treatments, laser, body contouring, and intimate wellness.",
};

// Editorial-grid sizes — 12-column grid, varied cards for visual rhythm
const sizeMap = {
  0: "lg:col-span-6",
  1: "lg:col-span-6",
  2: "lg:col-span-4",
  3: "lg:col-span-4",
  4: "lg:col-span-4",
  5: "lg:col-span-4",
  6: "lg:col-span-4",
  7: "lg:col-span-4",
  8: "lg:col-span-6",
  9: "lg:col-span-6",
};

const mediaHeightMap = {
  0: "h-[420px]",
  1: "h-[420px]",
  2: "h-[340px]",
  3: "h-[340px]",
  4: "h-[340px]",
  5: "h-[340px]",
  6: "h-[340px]",
  7: "h-[340px]",
  8: "h-[420px]",
  9: "h-[420px]",
};

export default function ServicesPage() {
  return (
    <main className="relative">
      <Nav />

      <PageHeader
        eyebrow="The Menu"
        title="Ten protocols."
        italic="Carefully considered."
        lede="Explore our treatments with clear, helpful context before booking. Choose a service to learn more, or start with a consultation."
      />

      <section className="bg-bone pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-5 lg:gap-6 mt-8">
            {services.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={(i % 3) * 90}
                className={`col-span-12 md:col-span-6 ${sizeMap[i]}`}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="tx-card group relative block h-full border border-ink/15 bg-cream overflow-hidden transition-colors duration-500 hover:border-ink"
                >
                  {/* Media */}
                  <div
                    className={`relative ${mediaHeightMap[i]} overflow-hidden`}
                  >
                    <Image
                      src={s.img}
                      alt={s.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/35" />

                    {/* Number badge top-left */}
                    <span className="absolute top-3.5 left-3.5 z-[2] eyebrow text-bone bg-ink/40 backdrop-blur-md border border-bone/20 px-3 py-1.5 rounded-full">
                      {s.no} — {s.tags?.[0] ?? "Protocol"}
                    </span>

                    {/* Time bottom-right */}
                    <span className="absolute bottom-3.5 right-3.5 z-[2] eyebrow text-bone">
                      {s.time}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 lg:p-7 flex flex-col gap-4">
                    <h3 className="display text-[28px] lg:text-[32px] leading-none tracking-tightest transition-colors duration-300 group-hover:text-stone">
                      {s.name}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-ink/65 max-w-[42ch]">
                      {s.blurb}
                    </p>
                    <div className="mt-auto pt-4 border-t border-ink/15 flex items-center justify-between">
                      <span className="eyebrow text-ink/55">Read protocol</span>
                      <span className="arrow-slide text-ink/70 text-[14px]">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 lg:mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-ink/15 pt-10">
            <div>
              <p className="eyebrow text-ink/50 mb-2">
                Not sure where to start?
              </p>
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
