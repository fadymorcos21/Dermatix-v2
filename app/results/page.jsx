import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import BeforeAfter from "@/components/BeforeAfter";

export const metadata = {
  title: "Results · Dermatix Clinic Woodbridge",
  description:
    "Public review highlights and a visual look at Dermatix Clinic in Woodbridge.",
};

const stats = [
  { n: "10", l: "Amazing services" },
  { n: "5.0", l: "Star overall rating" },
  { n: "2019", l: "Serving Woodbridge since" },
];

const reviews = [
  {
    q: "A one-stop place for skin, face, body and health care. The clinic is tidy and clean, and the doctors are all professionals. Dr. Farid Parham is gentle, warm and highly knowledgeable — you feel you are in good hands the moment he starts talking. And the owner, Albert, is humble and attentive; he makes you feel part of the family.",
    n: "Maria S. Nueno",
    t: "Google review",
  },
  {
    q: "Always a great experience. Caring. Knowledgeable. I highly recommend it.",
    n: "Josie Carnovale",
    t: "Google review",
  },
  {
    q: "I come here every time for my services. The Dr. is extremely knowledgeable and I feel safe doing any procedure with him. Highly recommend!!! I will be back soon for more!",
    n: "Local Guide",
    t: "Google review",
  },
];

export default function ResultsPage() {
  return (
    <main className="relative">
      <Nav />

      <PageHeader
        eyebrow="Results & Reviews"
        title="Hear from"
        italic="our patients."
        lede="Real reviews from real visits — and a look inside the Woodbridge studio."
      />

      <section className="bg-bone border-b border-ink/10 py-10 lg:py-14">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
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

      <section className="py-20 lg:py-28 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-ink/50 mb-3">§ Patient reviews</p>
            <h2 className="display text-[9vw] lg:text-[5.6rem] leading-[0.95] tracking-tightest max-w-4xl">
              Read in{" "}
              <span className="display-italic text-stone">their words.</span>
            </h2>
          </Reveal>

          <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {reviews.map((q, i) => (
              <Reveal key={q.n} delay={i * 100}>
                <figure className="bg-bone p-8 lg:p-10 h-full flex flex-col justify-between min-h-[340px]">
                  <blockquote className="display text-[20px] lg:text-[22px] leading-[1.25] text-ink/90">
                    &ldquo;{q.q}&rdquo;
                  </blockquote>
                  <figcaption className="mt-10 flex items-center justify-between gap-4">
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

      <section className="py-20 lg:py-28 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-12 lg:mb-16 max-w-3xl">
            <Reveal>
              <p className="eyebrow text-ink/50 mb-3">§ Before / After</p>
              <h2 className="display text-[9vw] lg:text-[5.6rem] leading-[0.95] tracking-tightest">
                Before,{" "}
                <span className="display-italic text-stone">after.</span>
              </h2>
              <p className="mt-5 text-[14px] text-ink/65 max-w-md leading-relaxed">
                Drag to compare. Real patient before-and-after photographs are
                shared privately in consultation, with consent — this is a
                format preview.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <BeforeAfter
                beforeSrc="/images/editorial-portrait.jpg"
                afterSrc="/images/editorial-portrait.jpg"
                beforeLabel="Before"
                afterLabel="After"
              />
            </Reveal>

            <Reveal delay={140}>
              <h3 className="display text-[clamp(36px,4.5vw,64px)] leading-[0.98] tracking-tightest">
                Photographed in the same chair,{" "}
                <span className="display-italic text-stone">
                  the same daylight.
                </span>
              </h3>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/75 max-w-[44ch]">
                Standardised lighting, same angle, same time of day — so what
                you see is the change, not the camera. The full gallery is kept
                in-clinic and shared with patient consent during consultation.
              </p>
              <div className="mt-8">
                <Link
                  href="/book/consultation"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors"
                >
                  Book a consultation
                  <span className="arrow-slide">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-ink/50 mb-3">§ Clinic visuals</p>
            <h2 className="display text-[42px] lg:text-[64px] leading-tight tracking-tightest max-w-3xl">
              A quick{" "}
              <span className="display-italic text-stone">
                peak at what we do.
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/10" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow text-bone/50 mb-4">Ready when you are</p>
            <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6rem] xl:text-[7rem] leading-[0.95] tracking-tightest">
              Start with
              <br />
              <span className="display-italic text-champagne">a consult.</span>
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
