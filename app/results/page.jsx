import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Results · Dermatix Clinic Woodbridge",
  description:
    "Public review highlights and a visual look at Dermatix Clinic in Woodbridge.",
};

const stats = [
  { n: "10", l: "Services listed" },
  { n: "#10", l: "Ansley Grove unit" },
  { n: "5.0", l: "Public review listing" },
  { n: "12", l: "Reviews listed publicly" },
];

const reviewHighlights = [
  {
    q: "I come here every time for my services, the Dr. is extremely knowledgeable and i feel safe doing any procedure with him. Highly recommend!!! I will be back soon for more!",
    n: "Public review excerpt",
    t: "BestProsInTown listing",
  },
  {
    q: "Dermatix Clinic is listed among Woodbridge skin care clinics with a 5.0 public rating summary.",
    n: "Public listing note",
    t: "BestProsInTown Woodbridge roundup",
  },
  {
    q: "The public listing places Dermatix Clinic at 110 Ansley Grove Rd #10, Woodbridge, matching the client meeting notes.",
    n: "Location note",
    t: "Public directory listing",
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
        title="Public notes,"
        italic="carefully."
        lede="A lighter, factual review page: public listing highlights, clinic visuals, and no invented treatment counts, testimonials, or before-and-after claims."
      />

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

      <section className="py-20 lg:py-28 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-ink/50 mb-3">§ Public review notes</p>
            <h2 className="display text-[9vw] lg:text-[5.6rem] leading-[0.95] tracking-tightest max-w-4xl">
              What is public,
              <br />
              <span className="display-italic text-stone">not invented.</span>
            </h2>
          </Reveal>

          <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {reviewHighlights.map((q, i) => (
              <Reveal key={q.q} delay={i * 100}>
                <figure className="bg-bone p-8 lg:p-10 h-full flex flex-col justify-between min-h-[320px]">
                  <blockquote className="display text-[22px] lg:text-[26px] leading-[1.2] text-ink/90">
                    “{q.q}”
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

      <section className="py-20 lg:py-28 bg-cream border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <Reveal>
              <p className="eyebrow text-ink/50 mb-3">§ Clinic visuals</p>
              <h2 className="display text-[42px] lg:text-[64px] leading-tight tracking-tightest max-w-3xl">
                A small{" "}
                <span className="display-italic text-stone">window.</span>
              </h2>
            </Reveal>
            <p className="max-w-sm text-[13px] text-ink/65 leading-relaxed">
              These images are used as visual atmosphere across the site. Add
              verified before-and-after cases only once the client approves the
              exact photos and release language.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5">
            {galleryImages.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 80}>
                <div className="relative aspect-[4/5] w-full overflow-hidden grain">
                  <Image
                    src={src}
                    alt={`Dermatix visual ${i + 1}`}
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
