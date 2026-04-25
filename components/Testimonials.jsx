import Reveal from "./Reveal";

const quotes = [
  {
    q: "I went in for a consult and walked out with the first plan that didn't feel like an upsell. Six months later, my own mother asked what serum I was using.",
    n: "M. R.",
    t: "Patient · lip architecture + microtox",
  },
  {
    q: "Dermatix is the only clinic in the GTA where the doctor does the photos, the mapping, and the injections herself. It shows — in every millimetre.",
    n: "A. K.",
    t: "Patient · HIFU rebuild",
  },
  {
    q: "The room is beautiful, but the work is what keeps me. Three years on and nobody has ever said the word 'work'. Just 'you look well'.",
    n: "J. D.",
    t: "Patient since 2023",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-40 bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-ink/50 mb-3">§ 06 — The notes</p>
          <h2 className="display text-[9vw] lg:text-[5.8rem] leading-[0.95] tracking-tightest max-w-4xl">
            Read 847 reviews and this is the <span className="display-italic text-stone">through-line.</span>
          </h2>
        </Reveal>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="bg-bone p-8 lg:p-10 h-full flex flex-col justify-between min-h-[340px]">
                <blockquote className="display text-[24px] lg:text-[28px] leading-[1.15] text-ink/90">
                  &ldquo;{q.q}&rdquo;
                </blockquote>
                <figcaption className="mt-10 flex items-center justify-between">
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
  );
}
