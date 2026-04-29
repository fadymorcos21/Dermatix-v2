import Reveal from "./Reveal";

export default function Marquee() {
  const items = [
    "Botox",
    "Dermal Filler",
    "PRP",
    "Dermal Peel",
    "Laser Hair Removal",
    "Cryolipolysis",
    "HIFU Skin Tightening",
    "HIFU Vaginal Tightening",
    "Hydrafacial",
    "Dermabrasion",
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
              className="display text-[4.6vw] sm:text-[3vw] lg:text-[2.2rem] leading-none text-ink/90 inline-flex items-center"
            >
              {t}
              {i < items.length - 1 && (
                <span aria-hidden className="text-gold ml-5 lg:ml-8">
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
