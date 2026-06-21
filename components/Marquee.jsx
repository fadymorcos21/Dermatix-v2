import Reveal from "./Reveal";

export default function Marquee() {
  const items = [
    "Botox",
    "Dermal Filler",
    "PRP",
    "Dermal Peel",
    "Laser Hair Removal",
    "HIFU Skin Tightening",
    "Hydrafacial",
    "Dermabrasion",
    "Scar Revision",
  ];

  return (
    <section className="relative py-10 lg:py-14 border-y border-ink/10 bg-[#f0e7d4]">
      <div className="px-6 lg:px-10">
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 lg:gap-x-8 lg:gap-y-4">
          {items.map((t, i) => (
            <Reveal
              as="span"
              key={t}
              delay={i * 80}
              className="inline-flex items-center gap-5 lg:gap-8"
            >
              <span className="display text-[20px] sm:text-[24px] lg:text-[30px] tracking-tightest text-ink/80 whitespace-nowrap">
                {t}
              </span>
              {i < items.length - 1 && (
                <span className="text-ink/30 text-[10px]" aria-hidden>
                  ✦
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
