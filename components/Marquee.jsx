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

  const Track = () => (
    <span className="inline-flex items-center whitespace-nowrap">
      {items.map((t, i) => (
        <span key={i} className="display text-[8vw] lg:text-[6.5rem] leading-none px-6 text-ink/90">
          {t}
          <span className="inline-block mx-6 text-gold">✦</span>
        </span>
      ))}
    </span>
  );

  return (
    <section className="relative py-10 lg:py-16 border-y border-ink/10 overflow-hidden bg-cream">
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
    </section>
  );
}
