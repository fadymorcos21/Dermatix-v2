import Image from "next/image";
import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section className="relative py-28 lg:py-40 bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Sticky label column */}
        <div className="col-span-12 lg:col-span-3 lg:sticky lg:top-28">
          <Reveal>
            <p className="eyebrow text-ink/50 mb-4">§ 01 — Philosophy</p>
            <p className="display text-[28px] leading-tight text-ink/90">
              A studio,<br />
              not a factory.
            </p>
          </Reveal>
        </div>

        {/* Editorial text */}
        <div className="col-span-12 lg:col-span-6">
          <Reveal>
            <h2 className="display text-[8vw] lg:text-[5.2rem] leading-[0.95] tracking-tightest text-ink">
              We treat the face like <span className="display-italic text-stone">architecture</span> —
              every proportion mapped, every angstrom of product earned.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 grid sm:grid-cols-2 gap-10 max-w-2xl text-[14px] leading-relaxed text-ink/75">
              <p>
                Dermatix began as a reaction to the assembly-line medspa. Where others push
                volume, we study proportion. Every consult is an hour minimum. Every plan is
                drawn by hand over facial mapping before a single unit is mixed.
              </p>
              <p>
                Our protocols are imported from European aesthetic medicine and edited for
                Canadian climate and Canadian faces. The result is an outcome your friends will
                notice but never place — the cleanest compliment in aesthetics.
              </p>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-12 flex items-center gap-4">
              <span className="h-px w-16 bg-ink/30" />
              <span className="eyebrow text-ink/60">Signature protocols · since 2012</span>
            </div>
          </Reveal>
        </div>

        {/* Image column */}
        <div className="col-span-12 lg:col-span-3 relative">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden grain">
              <Image
                src="/images/face-mapping.jpg"
                alt="Facial mapping"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] text-bone tracking-wider2 uppercase">
                <span>DX · 04</span>
                <span>MAP · F-22</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 text-[12px] text-ink/55 leading-relaxed">
              Proportional mapping, performed at every new-patient consult. No two faces
              receive the same plan.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
