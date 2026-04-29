import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import BeforeAfter from "@/components/BeforeAfter";

export const metadata = {
  title: "Results · Dermatix Clinic Woodbridge",
  description:
    "What our patients say, and what our work looks like. Read reviews and see real results from Dermatix Clinic, Woodbridge.",
};

const stats = [
  { n: "12k+", l: "Treatments delivered" },
  { n: "847", l: "Verified 5★ reviews" },
  { n: "98%", l: "Would refer a friend" },
  { n: "2020", l: "Serving Woodbridge since" },
];

const quotes = [
  {
    q: "I went in for a consult and walked out with the first plan that didn't feel like an upsell. Six months later, my own mother asked what serum I was using.",
    n: "M. R.",
    t: "Patient · lip architecture + microtox",
  },
  {
    q: "Dermatix is the only clinic in the GTA where the doctor does the photos, the mapping, and the injections herself. It shows — in every millimetre.",
    n: "A. K.",
    t: "Patient · HIFU rebuild",
  },
  {
    q: "The room is beautiful, but the work is what keeps me. Three years on and nobody has ever said the word 'work'. Just 'you look well'.",
    n: "J. D.",
    t: "Patient since 2023",
  },
  {
    q: "I'd been to four other places. None of them said no to anything. Dermatix did — and explained why. That's when I knew.",
    n: "S. P.",
    t: "Patient · filler refinement",
  },
  {
    q: "My HIFU result kept building for six months. By month four I cancelled the surgical consult I'd booked the year before.",
    n: "L. C.",
    t: "Patient · HIFU full face",
  },
  {
    q: "First place that treated my Fitzpatrick V skin properly. No burns, no PIH, real results. I drive an hour each way and it's worth it.",
    n: "R. T.",
    t: "Patient · laser hair removal",
  },
];

const galleryImages = [
  "/images/glowing-skin.jpg",
  "/images/editorial-portrait.jpg",
  "/images/eye-mapping.jpg",
  "/images/face-mapping.jpg",
  "/images/hifu-treatment.jpg",
  "/images/prp-treatment.jpg",
];

export default function ResultsPage() {
  return (
    <main className="relative">
      <Nav />

      <PageHeader
        eyebrow="Results & Reviews"
        title="The work"
        italic="speaks softly."
        lede="Subtle by design. Below is what patients have written, and a glimpse at the kind of work we deliver every week. The full gallery is shared in-clinic with patient permission."
      />

      {/* Stats strip */}
      <section className="bg-bone border-b border-ink/10 py-10 lg:py-14">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="flex items-baseline gap-4">
              <span className="num text-[36px] lg:text-[44px] tracking-tight">
                {s.n}
              </span>
              <span className="text-[12px] text-ink/55 tracking-wide">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quotes */}
      <section className="py-20 lg:py-28 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-ink/50 mb-3">§ Verbatim</p>
            <h2 className="display text-[9vw] lg:text-[5.6rem] leading-[0.95] tracking-tightest max-w-4xl">
              In their own{" "}
              <span className="display-italic text-stone">words.</span>
            </h2>
          </Reveal>

          <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {quotes.map((q, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <figure className="bg-bone p-8 lg:p-10 h-full flex flex-col justify-between min-h-[340px]">
                  <blockquote className="display text-[22px] lg:text-[26px] leading-[1.2] text-ink/90">
                    &ldquo;{q.q}&rdquo;
                  </blockquote>
                  <figcaption className="mt-10 flex items-center justify-between">
                    <div>
                      <p className="display text-[18px]">{q.n}</p>
                      <p className="eyebrow text-ink/50 mt-1">{q.t}</p>
                    </div>
                    <span className="text-gold tracking-widest">★★★★★</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After slider */}
      <section className="py-20 lg:py-28 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-12 lg:mb-16 max-w-3xl">
            <p className="eyebrow text-ink/50 mb-3">§ The evidence</p>
            <h2 className="display text-[9vw] lg:text-[5.6rem] leading-[0.95] tracking-tightest">
              Before, <span className="display-italic text-stone">after</span>,
              <br />
              and what you'd actually see.
            </h2>
            <p className="mt-5 text-[14px] text-ink/65 max-w-md leading-relaxed">
              All photographs are clinical, unretouched and patient-released.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <BeforeAfter
                beforeSrc="/images/editorial-portrait.jpg"
                afterSrc="/images/editorial-portrait.jpg"
                beforeLabel="Before · Day 0"
                afterLabel="After · Week 12"
              />
            </Reveal>

            <Reveal delay={140}>
              <h3 className="display text-[clamp(40px,5vw,72px)] leading-[0.98] tracking-tightest">
                The slow miracle of{" "}
                <span className="display-italic text-stone">
                  doing less, well.
                </span>
              </h3>
              <p className="display mt-6 text-[20px] leading-[1.45] text-ink/75 max-w-[42ch]">
                Twelve weeks of the Resurface Ritual, paired with a daily
                routine of three actives. Photographed under the same daylight,
                at the same time, in the same chair.
              </p>

              <div className="mt-8 grid grid-cols-3 border-t border-ink/15">
                <div className="pt-5 pr-4">
                  <div className="display text-[44px] leading-none tracking-tight">
                    94
                    <span className="text-[22px] text-ink/55 align-top ml-1">
                      %
                    </span>
                  </div>
                  <div className="eyebrow text-ink/55 mt-2">
                    Reported smoother texture
                  </div>
                </div>
                <div className="pt-5 px-4 border-l border-ink/15">
                  <div className="display text-[44px] leading-none tracking-tight">
                    2.8
                    <span className="text-[22px] text-ink/55 align-top ml-1">
                      ×
                    </span>
                  </div>
                  <div className="eyebrow text-ink/55 mt-2">
                    Hyaluronic retention
                  </div>
                </div>
                <div className="pt-5 pl-4 border-l border-ink/15">
                  <div className="display text-[44px] leading-none tracking-tight">
                    12
                    <span className="text-[22px] text-ink/55 align-top ml-1">
                      wk
                    </span>
                  </div>
                  <div className="eyebrow text-ink/55 mt-2">
                    Avg. visible result
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/book/consultation"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors"
                >
                  Start your protocol
                  <span className="arrow-slide">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28 bg-cream border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <Reveal>
              <p className="eyebrow text-ink/50 mb-3">§ Selected work</p>
              <h2 className="display text-[42px] lg:text-[64px] leading-tight tracking-tightest max-w-3xl">
                A small{" "}
                <span className="display-italic text-stone">window.</span>
              </h2>
            </Reveal>
            <p className="max-w-sm text-[13px] text-ink/65 leading-relaxed">
              Full before-and-after gallery shared in clinic with patient
              consent. Reach out for relevant cases to your concern.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5">
            {galleryImages.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 80}>
                <div className="relative aspect-[4/5] w-full overflow-hidden grain">
                  <Image
                    src={src}
                    alt={`Result ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow text-bone/50 mb-4">Ready when you are</p>
            <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6rem] xl:text-[7rem] leading-[0.95] tracking-tightest">
              Make this list
              <br />
              <span className="display-italic text-champagne">longer.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 lg:items-end">
            <Link
              href="/book/consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-bone text-ink px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-champagne transition-colors"
            >
              Book consultation
              <span className="arrow-slide">→</span>
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-transparent text-bone border border-bone/30 px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-bone/10 transition-colors"
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
