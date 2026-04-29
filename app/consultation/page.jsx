import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Consultation · Dermatix Clinic Woodbridge",
  description:
    "A new patient consultation at Dermatix - a 30-minute, physician-led conversation about your skin, your goals, and the right plan.",
};

const expectations = [
  {
    no: "01",
    label: "Conversation",
    body: "Your concerns, history, lifestyle and goals — without a sales pitch.",
  },
  {
    no: "02",
    label: "Assessment",
    body: "Skin analysis, facial mapping and photo-documentation under controlled light.",
  },
  {
    no: "03",
    label: "Plan",
    body: "A staged plan with cost ranges and realistic timelines — yours to take home.",
  },
  {
    no: "04",
    label: "Decide later",
    body: "No pressure to book on the day. We'd rather you choose at your own pace.",
  },
];

export default function ConsultationPage() {
  return (
    <main className="relative">
      <Nav />

      {/* Hero */}
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow text-ink/50 mb-4 tracking-wider3">
              New patient consultation
            </p>
            <h1 className="display text-[12vw] sm:text-[8vw] lg:text-[6.5rem] xl:text-[7.4rem] leading-[0.92] tracking-tightest">
              The plan
              <br />
              <span className="display-italic text-stone">comes first.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] lg:text-[16px] leading-relaxed text-ink/75">
              A 30-minute, physician-led conversation about your skin, your goals and the
              right protocol — or sequence of protocols — to get you there. We don't sell
              add-ons; we design plans.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 eyebrow text-ink/60">
              <span>30 min</span>
              <span className="w-1 h-1 rounded-full bg-ink/30" />
              <span>Physician-led · By appointment</span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/book/consultation"
                className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors"
              >
                Book consultation
                <span className="arrow-slide">→</span>
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-bone text-ink border border-ink/15 px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-cream transition-colors"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden grain vignette">
              <Image
                src="/images/face-mapping.jpg"
                alt="Consultation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 lg:py-28 bg-cream border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-12 lg:mb-16 max-w-3xl">
            <p className="eyebrow text-ink/50 mb-3">§ What to expect</p>
            <h2 className="display text-[42px] lg:text-[64px] leading-tight tracking-tightest">
              An hour, well{" "}
              <span className="display-italic text-stone">spent.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
            {expectations.map((p) => (
              <Reveal key={p.no}>
                <div className="bg-cream p-6 lg:p-8 min-h-[220px]">
                  <div className="eyebrow text-ink/40 mb-4">{p.no}</div>
                  <h3 className="display text-[26px] leading-tight tracking-tightest">
                    {p.label}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink/65">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notes & policies */}
      <section className="py-20 lg:py-28 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="eyebrow text-ink/50 mb-3">§ Good to know</p>
            <h2 className="display text-[42px] lg:text-[56px] leading-tight tracking-tightest">
              Before you
              <br />
              <span className="display-italic text-stone">come in.</span>
            </h2>
          </Reveal>
          <div className="col-span-12 lg:col-span-8">
            <ul className="border-t border-ink/10 text-[15px]">
              {[
                "Come with a clean face if possible — makeup is fine, we'll cleanse.",
                "Bring a list of any medications, supplements or recent treatments.",
                "Allow 30 minutes. Plans take time, and you should feel unrushed.",
                "We accept all major credit cards. Treatment plans can be staged.",
                "24-hour cancellation policy. We'll send a reminder the day before.",
              ].map((p, i) => (
                <li
                  key={i}
                  className="py-4 border-b border-ink/10 flex items-start justify-between gap-6"
                >
                  <span>{p}</span>
                  <span className="eyebrow text-ink/40 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow text-bone/50 mb-4">Next step</p>
            <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6rem] xl:text-[7rem] leading-[0.95] tracking-tightest">
              Book your
              <br />
              <span className="display-italic text-champagne">consultation.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 lg:items-end">
            <Link
              href="/book/consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-bone text-ink px-6 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-champagne transition-colors"
            >
              Book consultation
              <span className="arrow-slide">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
