import Image from "next/image";
import Reveal from "./Reveal";

const features = [
  {
    titleA: "Proportion",
    titleB: "Led",
    body: "We design in harmony with your natural structure.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="34" height="21" />
        <rect x="3" y="11" width="21" height="21" />
        <rect x="3" y="19" width="13" height="13" />
        <path d="M3 19 A13 13 0 0 1 16 32" />
        <path d="M16 19 A8 8 0 0 1 24 11" />
      </svg>
    ),
  },
  {
    titleA: "Subtle",
    titleB: "Results",
    body: "Refined outcomes that look like you, elevated.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 5 C13 5 9 11 9 19 C9 27 13 35 20 35 C27 35 31 27 31 19 C31 11 27 5 20 5 Z" />
        <path d="M14 17 Q16 15 18 17" />
        <path d="M22 17 Q24 15 26 17" />
        <path d="M20 19 V23" />
        <path d="M16 27 Q20 30 24 27" />
      </svg>
    ),
  },
  {
    titleA: "Medical",
    titleB: "Excellence",
    body: "Evidence-based treatments delivered with precision.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="20" cy="6" r="2" />
        <path d="M20 8 V34" />
        <path d="M20 10 Q13 9 11 13" />
        <path d="M20 10 Q27 9 29 13" />
        <path d="M14 16 Q20 19 26 16" />
        <path d="M14 22 Q20 25 26 22" />
        <path d="M14 16 Q12 19 14 22" />
        <path d="M26 16 Q28 19 26 22" />
        <path d="M17 34 H23" />
      </svg>
    ),
  },
  {
    titleA: "Luxury",
    titleB: "Experience",
    body: "Discreet, personalized care in a calm, elevated space.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 15 L20 5 L32 15 L20 35 Z" />
        <path d="M8 15 H32" />
        <path d="M14 15 L20 5 L26 15" />
        <path d="M14 15 L20 35 L26 15" />
      </svg>
    ),
  },
];

export default function Philosophy() {
  return (
    <section className="relative pt-14 lg:pt-24 bg-[#f3ede5]">
      {/* Top strip — sampled from the mock */}
      <div className="bg-[#f3ede5]">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
          {/* Left text column */}
          <div className="px-6 lg:pl-10 lg:pr-10 py-10 lg:py-14 flex flex-col justify-center">
            <Reveal>
              <p className="eyebrow text-ink/55 mb-4">§ 01 — Philosophy</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-[7vw] lg:text-[3.2rem] xl:text-[3.8rem] leading-[0.98] tracking-tightest text-ink">
                We treat the face like{" "}
                <span className="display-italic text-stone">architecture</span>{" "}
                — proportion before product, intention before volume.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <span className="block h-px w-14 bg-ink/30 mt-6 mb-4" />
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-2xl text-[13px] leading-relaxed text-ink/75">
                <p>
                  Where others push volume, we study proportion. Considered,
                  deliberate work — calibrated to the features you already have.
                </p>
                <p className="sm:border-l sm:border-ink/15 sm:pl-6">
                  The result is an outcome your friends will notice — the
                  cleanest compliment in aesthetics.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right image column — flush with bottom feature bar */}
          <div className="relative h-[50vh] min-h-[380px] lg:h-auto lg:min-h-[540px]">
            <Image
              src="/images/philosophy-seciont-bg-transparent-woman.png"
              alt="Facial proportional mapping"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-bottom"
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* Bottom feature bar — sampled from the mock */}
      <div className="bg-[#f8f4ef]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => {
              const showMobileDivider = i === 1 || i === 3;
              const showLgDivider = i === 1 || i === 2 || i === 3;
              return (
                <Reveal
                  key={f.titleA}
                  delay={i * 90}
                  className="relative py-10 lg:py-14 px-4 lg:px-7 flex flex-col items-center text-center"
                >
                  {showMobileDivider && (
                    <span
                      aria-hidden
                      className="absolute left-0 top-[15%] bottom-[15%] w-px bg-ink/15 lg:hidden"
                    />
                  )}
                  {showLgDivider && (
                    <span
                      aria-hidden
                      className="hidden lg:block absolute left-0 top-[15%] bottom-[15%] w-px bg-ink/15"
                    />
                  )}
                  <div className="w-9 h-9 lg:w-11 lg:h-11 mb-4 text-gold">
                    {f.icon}
                  </div>
                  <h3 className="display text-[19px] lg:text-[22px] leading-[1.1] text-ink mb-3">
                    {f.titleA}
                    <br />
                    {f.titleB}
                  </h3>
                  <p className="text-[12px] lg:text-[13px] text-ink/65 leading-relaxed max-w-[220px]">
                    {f.body}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-6 flex items-center justify-center gap-4">
          <span className="h-px flex-1 max-w-[160px] bg-ink/20" />
          <span className="eyebrow text-ink/55 text-[10px]">
            Dermatix Clinic · Woodbridge, Ontario
          </span>
          <span className="h-px flex-1 max-w-[160px] bg-ink/20" />
        </div>
      </div>
    </section>
  );
}
