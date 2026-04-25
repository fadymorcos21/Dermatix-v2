import Image from "next/image";
import Reveal from "./Reveal";

const steps = [
  {
    no: "01",
    title: "Consult",
    body: "An unhurried hour. We listen first, photograph in standardised light, and map the face against our proportional grid.",
    img: "/images/eye-mapping.jpg",
    tag: "No product yet",
  },
  {
    no: "02",
    title: "Design",
    body: "A hand-drawn plan, agreed in writing. You see exactly what will move, by how many millimetres, before a single unit is mixed.",
    img: "/images/face-mapping.jpg",
    tag: "Drawn to scale",
  },
  {
    no: "03",
    title: "Treat",
    body: "Same physician, every visit. Technique refined over twelve years — measured, steady, almost quiet.",
    img: "/images/filler-injection.jpg",
    tag: "Same hands",
  },
  {
    no: "04",
    title: "Glow",
    body: "A two-week review on the house. We measure outcomes and adjust with the same obsession we designed with.",
    img: "/images/shutterstock_2667855143.jpg",
    tag: "Follow-up included",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-40 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-ink/50 mb-3">§ 04 — Experience</p>
              <h2 className="display text-[10vw] lg:text-[6.5rem] leading-[0.95] tracking-tightest">
                Four rooms.
                <br />
                <span className="display-italic text-stone">One obsession.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Reveal delay={120}>
              <p className="text-[15px] leading-relaxed text-ink/75">
                The Dermatix visit is choreographed like a tasting menu. Each room is a
                course — paced to give you space to think, breathe, and actually be
                listened to.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-ink/15">
          {steps.map((s, i) => (
            <Reveal key={s.no}>
              <article className="group grid grid-cols-12 gap-6 lg:gap-10 items-center py-10 lg:py-14 border-b border-ink/15 hover:bg-bone/60 transition-colors duration-700 px-2">
                <span className="col-span-2 lg:col-span-1 num text-[30px] lg:text-[52px] text-ink/70">
                  {s.no}
                </span>
                <div className="col-span-10 lg:col-span-4">
                  <h3 className="display text-[40px] lg:text-[64px] leading-none tracking-tightest">
                    {s.title}
                  </h3>
                  <p className="eyebrow text-ink/50 mt-2">{s.tag}</p>
                </div>
                <p className="col-span-12 lg:col-span-4 text-[14px] leading-relaxed text-ink/75 max-w-md">
                  {s.body}
                </p>
                <div className="col-span-12 lg:col-span-3 relative">
                  <div className="relative aspect-[5/4] w-full overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 280px"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-700" />
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
