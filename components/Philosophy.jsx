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
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* top cap */}
        <circle cx="32" cy="7.5" r="2.2" />

        {/* staff */}
        <path d="M32 10 V57" />

        {/* subtle base */}
        <path d="M29.8 57 H34.2" />

        {/* snake body - upper wrap */}
        <path
          d="
    M38.6 14.8
    C36.8 13.5, 34.6 12.9, 32.2 12.9
    C27.8 12.9, 24.2 15.3, 23.1 18.7
    C22.2 21.3, 23.1 23.8, 25.2 25.2
    C27.2 26.5, 29.6 27.1, 32.4 27.3
    C35.3 27.5, 37.8 28.1, 39.6 29.4
    C41.5 30.8, 42.4 32.8, 42.2 35
    C42 37.4, 40.6 39.6, 38.5 41
    C36.4 42.5, 33.8 43.3, 30.9 43.1
    C27.8 42.9, 25.1 41.4, 23.3 39
  "
        />

        {/* snake body - lower continuation */}
        <path
          d="
    M23.3 39
    C21.9 37.2, 21.2 35.1, 21.4 32.9
    C21.7 29.7, 23.8 27, 27.1 25.7
    C29.5 24.7, 32.1 24.5, 34.8 24.7
    C38.3 25, 41.3 26, 43.6 27.8
    C46.1 29.8, 47.4 32.7, 47.2 36
    C47 39.4, 45.2 42.5, 42.2 44.9
    C39.2 47.3, 35.4 48.7, 31.3 48.8
    C27.2 48.9, 23.6 47.7, 20.9 45.4
  "
        />

        {/* tail */}
        <path
          d="
    M20.9 45.4
    C19.6 44.2, 18.7 42.8, 18.2 41.4
    C17.6 39.6, 17.6 37.7, 18.2 36.1
  "
        />

        {/* head */}
        <path
          d="
    M38.6 14.8
    C40.2 13.6, 42.4 13.5, 44.1 14.4
    C45.8 15.2, 46.9 16.9, 47 18.8
    C47.1 20.7, 46.3 22.4, 44.9 23.5
    C43.5 24.6, 41.6 25, 39.8 24.5
    C38.1 24.1, 36.7 22.8, 36.1 21.1
    C35.5 19.3, 35.7 17.2, 36.9 15.8
    C37.3 15.4, 37.9 15, 38.6 14.8
    Z
  "
        />

        {/* jaw line */}
        <path d="M38.3 21.8 C40 22.6, 42.2 22.6, 44 21.6" />

        {/* eye */}
        <circle cx="42.4" cy="17.8" r="0.7" fill="currentColor" stroke="none" />

        {/* tongue */}
        <path d="M47 19.1 L49.4 18.2" />
        <path d="M47 19.1 L49.3 20.1" />
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
