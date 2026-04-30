import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata = {
  title: "Book a Consultation · Dermatix Clinic Woodbridge",
  description:
    "Book a confirmed 30-minute new patient consultation at Dermatix Clinic, Woodbridge.",
};

export default function BookConsultationPage() {
  return (
    <main className="relative">
      <Nav />

      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow text-ink/50 mb-4 tracking-wider3">
              New patient consultation
            </p>
            <h1 className="display text-[12vw] sm:text-[8vw] lg:text-[6.5rem] xl:text-[7rem] leading-[0.92] tracking-tightest">
              Start with
              <br />
              <span className="display-italic text-stone">a plan.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] lg:text-[16px] leading-relaxed text-ink/75">
              A 30-minute, physician-led conversation about your skin, your
              goals, and the right protocol — or sequence of protocols — to get
              you there. No treatment on the day. No pressure.
            </p>

            <div className="mt-8 border border-ink/15 p-5 bg-bone/50 max-w-md">
              <p className="eyebrow text-ink/50 mb-2">What you'll leave with</p>
              <ul className="space-y-2 text-[14px] text-ink/80 mt-3">
                <li className="flex items-start gap-3">
                  <span className="eyebrow text-ink/40 pt-1">01</span>
                  <span>A focused review of your concerns and treatment goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="eyebrow text-ink/40 pt-1">02</span>
                  <span>A staged treatment plan with realistic timelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="eyebrow text-ink/40 pt-1">03</span>
                  <span>Time and space to decide — book on your schedule</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 border-t border-ink/10 pt-6">
              <p className="eyebrow text-ink/50 mb-3">
                Already know what you want?
              </p>
              <Link
                href="/book"
                className="group inline-flex items-center gap-2 text-[13px] editorial-link"
              >
                Book a service appointment instead
                <span className="arrow-slide">→</span>
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
