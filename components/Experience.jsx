import Image from "next/image";
import Reveal from "./Reveal";

const steps = [
  {
    no: "01",
    title: "Consult",
    body: "Thirty unhurried minutes. We listen first, photograph in standardised light, and map the face against our proportional grid.",
    img: "/images/section-04-consult.png",
    tag: "No product yet",
    bg: "#F4E3D6",
  },
  {
    no: "02",
    title: "Design",
    body: "A hand-drawn plan, agreed in writing. You see exactly what will move, by how many millimetres, before a single unit is mixed.",
    img: "/images/section-04-design.png",
    tag: "Drawn to scale",
    bg: "#EFF3F5",
  },
  {
    no: "03",
    title: "Treat",
    body: "Same physician, every visit. Measured, steady, almost quiet.",
    img: "/images/section-04-Treat.png",
    tag: "Same hands",
    bg: "#F1F0E5",
    rightFade: "12%",
  },
  {
    no: "04",
    title: "Glow",
    body: "A two-week review follow up. We measure outcomes and adjust with the same obsession we designed with.",
    img: "/images/section-04-glow.png",
    tag: "Follow-up included",
    bg: "#F6DFDA",
    rightFade: "12%",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative"
      style={{ backgroundColor: "#f1ead8" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-28 lg:pt-40 pb-16 lg:pb-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-ink/50 mb-3">§ 03 — Experience</p>
              <p className="eyebrow text-stone mb-5">What to expect</p>
              <h2 className="display text-[10vw] lg:text-[6.5rem] leading-[0.95] tracking-tightest">
                Four rooms.
                <br />
                <span className="display-italic text-stone">One rhythm.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Reveal delay={120}>
              <p className="text-[15px] leading-relaxed text-ink/75">
                The Dermatix experience unfolds across four quiet rooms —
                <span className="text-ink"> Consult, Design, Treat, Glow.</span>{" "}
                Choreographed like a tasting menu, each room paced to give you
                space to think, breathe, and actually be listened to. No rush,
                no hard sell — just considered care, end to end.
              </p>
              <p className="eyebrow text-ink/50 mt-6">
                Scroll for the full walk-through ↓
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {steps.map((s) => (
        <div
          key={s.no}
          className="relative w-full"
          style={{ backgroundColor: s.bg }}
        >
          <Reveal from="top">
            <div className="relative mx-auto max-w-[1600px]">
              <Image
                src={s.img}
                alt={s.title}
                width={1915}
                height={821}
                sizes="(max-width: 1600px) 100vw, 1600px"
                className="w-full h-auto block"
                priority={s.no === "01"}
              />

              <div
                className="absolute inset-y-0 left-0 w-[6%] pointer-events-none"
                style={{
                  background: `linear-gradient(to right, ${s.bg} 0%, transparent 100%)`,
                }}
              />
              <div
                className="absolute inset-y-0 right-0 pointer-events-none"
                style={{
                  width: s.rightFade ?? "6%",
                  background: `linear-gradient(to left, ${s.bg} 0%, transparent 100%)`,
                }}
              />

              <div className="absolute inset-y-0 left-[20%] right-[54%] flex flex-col justify-center">
                <h3 className="display text-[36px] sm:text-[52px] lg:text-[72px] leading-none tracking-tightest text-ink">
                  {s.title}
                </h3>
                <p className="eyebrow text-ink/55 mt-3 lg:mt-4">{s.tag}</p>
                <p className="hidden sm:block text-[13px] lg:text-[14px] leading-relaxed text-ink/75 mt-4 lg:mt-6">
                  {s.body}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      ))}
    </section>
  );
}
