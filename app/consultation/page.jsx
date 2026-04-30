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

const consultFeatures = [
  {
    icon: "clock",
    label: "30 minutes",
    body: "Focused on you and your goals.",
  },
  {
    icon: "shield",
    label: "Physician-led",
    body: "Medical expertise you can trust.",
  },
  {
    icon: "sliders",
    label: "Personalized plan",
    body: "Treatments that make sense for your skin and life.",
  },
  {
    icon: "leaf",
    label: "No pressure",
    body: "Honest recommendations. No add-ons.",
  },
];

function FeatureIcon({ type }) {
  if (type === "clock") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden className="h-10 w-10">
        <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M24 13v12l8 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden className="h-10 w-10">
        <path d="M24 6l15 6v11c0 10-6.4 16.3-15 19-8.6-2.7-15-9-15-19V12l15-6z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M17.5 24.5l4.4 4.4 9.2-10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "sliders") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden className="h-10 w-10">
        <path d="M14 8v32M24 8v32M34 8v32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="14" cy="17" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="24" cy="30" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="34" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden className="h-10 w-10">
      <path d="M25 42c10-6 14-16 10-30-14 5-22 13-22 23" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M13 35c7-2 13-8 17-18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function ConsultationPage() {
  return (
    <main className="relative">
      <Nav />

      <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] overflow-hidden bg-bone pt-20 lg:pt-20 border-b border-ink/10">
        <div className="absolute inset-y-0 left-[40vw] right-0 hidden md:block">
          <Image
            src="/images/consultation-landing.png"
            alt="Consultation appointment at Dermatix Clinic"
            fill
            priority
            sizes="60vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/consultation-landing.png"
            alt="Consultation appointment at Dermatix Clinic"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[64%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,241,231,1)_0%,rgba(246,241,231,1)_40%,rgba(246,241,231,0.72)_48%,rgba(246,241,231,0)_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,241,231,0.18)_0%,rgba(246,241,231,0)_38%,rgba(246,241,231,0.58)_100%)]" />

        <div className="relative z-[1] mx-auto max-w-[1400px] px-6 lg:px-10 min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex flex-col justify-center pb-36 lg:pb-36">
          <div className="max-w-[520px] pt-10 lg:pt-0">
            <div className="mb-5">
              <p className="eyebrow text-clay/70 tracking-wider3">
                New patient consultation
              </p>
              <div className="mt-3 h-px w-14 bg-clay/45" />
            </div>

            <h1 className="display text-[clamp(58px,8vw,112px)] leading-[0.88] tracking-tightest">
              The plan
              <br />
              <span className="display-italic text-stone">comes first.</span>
            </h1>

            <p className="mt-8 max-w-[430px] text-[15px] lg:text-[16px] leading-[1.75] text-ink/72">
              A 30-minute, physician-led conversation about your skin, your
              goals and the right protocol — or sequence of protocols — to get
              you there. We don't sell add-ons; we design plans.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/book/consultation"
                className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-7 py-4 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors"
              >
                Book consultation
                <span className="arrow-slide">→</span>
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-bone/45 backdrop-blur-sm text-ink border border-ink/18 px-7 py-4 text-[12px] tracking-wider2 uppercase hover:bg-bone transition-colors"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="relative mt-12 w-full lg:absolute lg:left-10 lg:right-10 lg:bottom-8 lg:mt-0 lg:w-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-[8px] border border-ink/12 bg-bone/80 backdrop-blur-xl shadow-[0_24px_80px_-44px_rgba(23,21,15,0.45)] overflow-hidden">
              {consultFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-5 px-6 py-5 lg:px-8 lg:py-7 border-b md:border-r md:border-b-0 border-ink/10 last:border-b-0 lg:last:border-r-0 text-clay"
                >
                  <div className="shrink-0 text-gold">
                    <FeatureIcon type={feature.icon} />
                  </div>
                  <div>
                    <h2 className="display text-[24px] leading-tight tracking-tightest text-ink">
                      {feature.label}
                    </h2>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink/62">
                      {feature.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                "Come with a clean face if possible. If not, we can cleanse before assessment.",
                "Bring a list of medications, supplements, allergies and recent treatments.",
                "Share any pregnancy, breastfeeding, cold sore, skin sensitivity or medical history that may affect treatment planning.",
                "Bring reference photos if they help explain what you like, what you dislike or what you want to avoid.",
                "Allow 30 minutes. You can leave with the plan and decide on treatment later.",
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
