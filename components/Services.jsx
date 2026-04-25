import Image from "next/image";
import Reveal from "./Reveal";

const services = [
  {
    no: "01",
    name: "Botox",
    blurb: "Neuromodulator microdosing for softened expression without the freeze.",
    time: "20 min",
    from: "$11 / unit",
    img: "/images/botox-lip.jpg",
    tags: ["Wrinkles", "Jaw slim", "Baby-tox"],
  },
  {
    no: "02",
    name: "Dermal Filler",
    blurb: "Architectural hyaluronic acid — lips, cheeks, chin, jaw, tear trough.",
    time: "45 min",
    from: "$650",
    img: "/images/filler-injection.jpg",
    tags: ["Volume", "Contour", "Hydration"],
  },
  {
    no: "03",
    name: "PRP Treatment",
    blurb: "Your plasma, reapplied. Regeneration for skin, scalp and tone.",
    time: "60 min",
    from: "$550",
    img: "/images/prp-treatment.jpg",
    tags: ["Collagen", "Hair", "Glow"],
  },
  {
    no: "04",
    name: "Dermal Peel",
    blurb: "Medical-grade resurfacing calibrated to your Fitzpatrick type.",
    time: "40 min",
    from: "$180",
    img: "/images/shutterstock_2472173333.jpg",
    tags: ["Texture", "Pigment", "Acne"],
  },
  {
    no: "05",
    name: "Laser Hair Removal",
    blurb: "Diode & Nd:YAG platforms for all skin types — safe, permanent reduction.",
    time: "15–60 min",
    from: "$60",
    img: "/images/shutterstock_2604269051.jpg",
    tags: ["All skin types", "Permanent"],
  },
  {
    no: "06",
    name: "Cryolipolysis",
    blurb: "Targeted fat reduction by controlled cooling. No knife, no downtime.",
    time: "60 min",
    from: "$450",
    img: "/images/shutterstock_2385017027.jpg",
    tags: ["Body", "Non-surgical"],
  },
  {
    no: "07",
    name: "HIFU Skin Tightening",
    blurb: "High-intensity focused ultrasound for a non-surgical lift — 12-month build.",
    time: "75 min",
    from: "$1,200",
    img: "/images/hifu-treatment.jpg",
    tags: ["Lift", "Collagen"],
  },
  {
    no: "08",
    name: "HIFU Vaginal Tightening",
    blurb: "Discreet, physician-led intimate wellness protocol.",
    time: "45 min",
    from: "$1,400",
    img: "/images/shutterstock_2348572749.jpg",
    tags: ["Wellness", "Discreet"],
  },
  {
    no: "09",
    name: "Hydrafacial",
    blurb: "A cleanse, exfoliate and infuse — every treatment, always the right answer.",
    time: "50 min",
    from: "$210",
    img: "/images/glowing-skin.jpg",
    tags: ["Glow", "Monthly"],
  },
  {
    no: "10",
    name: "Dermabrasion",
    blurb: "Controlled surface renewal for scars, texture and fine lines.",
    time: "45 min",
    from: "$300",
    img: "/images/shutterstock_2353782881.jpg",
    tags: ["Texture", "Scars"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-36 bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 lg:mb-20">
          <Reveal>
            <p className="eyebrow text-ink/50 mb-3">§ 02 — Menu</p>
            <h2 className="display text-[10vw] lg:text-[6.5rem] leading-[0.95] tracking-tightest">
              Ten <span className="display-italic text-stone">protocols.</span>
              <br />
              Zero theatrics.
            </h2>
          </Reveal>
          <Reveal delay={140} className="max-w-sm">
            <p className="text-[14px] leading-relaxed text-ink/70">
              A tight, intentional menu — each protocol refined over thousands of
              treatments. Everything below is physician-led and delivered in-house.
            </p>
            <a href="#book" className="mt-5 inline-flex items-center gap-2 text-[12px] tracking-wider2 uppercase editorial-link">
              Request a consult <span className="arrow-slide">→</span>
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 90}>
              <article className="group bg-bone p-6 lg:p-7 h-full min-h-[420px] flex flex-col justify-between curtain relative">
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
                    <span className="eyebrow text-ink/60">from {s.from}</span>
                    <span className="arrow-slide text-ink/70 text-lg">→</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
