import Reveal from "./Reveal";

const quotes = [
  {
    q: "A one-stop place for skin, face, body and health care. The clinic is tidy and clean, and the doctors are all professionals. Dr. Farid Parham is gentle, warm and highly knowledgeable — you feel you are in good hands the moment he starts talking. And the owner, Albert, is humble and attentive; he makes you feel part of the family.",
    n: "Maria S. Nueno",
    t: "Google review",
  },
  {
    q: "Always a great experience. Caring. Knowledgeable. I highly recommend it.",
    n: "Josie Carnovale",
    t: "Google review",
  },
  {
    q: "I come here every time for my services. The Dr. is extremely knowledgeable and I feel safe doing any procedure with him. Highly recommend!!! I will be back soon for more!",
    n: "Local Guide",
    t: "Google review",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-40 bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-ink/50 mb-3">§ 05 — The notes</p>
          <h2 className="display text-[9vw] lg:text-[5.8rem] leading-[0.95] tracking-tightest max-w-4xl">
            Read the reviews — <span className="display-italic text-stone">the same words keep coming back.</span>
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
