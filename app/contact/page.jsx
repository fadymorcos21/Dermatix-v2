import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/InquiryForm";

export const metadata = {
  title: "Contact · Dermatix Clinic Woodbridge",
  description:
    "Get in touch with Dermatix Clinic in Woodbridge, Ontario. Send an inquiry, ask about a treatment, or call 1·905·605·8444.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      <Nav />

      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow text-ink/50 mb-4 tracking-wider3">
              Inquiries
            </p>
            <h1 className="display text-[12vw] sm:text-[8vw] lg:text-[6.5rem] xl:text-[7.4rem] leading-[0.92] tracking-tightest">
              Say
              <br />
              <span className="display-italic text-stone">hello.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] lg:text-[16px] leading-relaxed text-ink/75">
              Questions about a treatment, pricing, or whether something is
              right for you? Send us a note. We answer every inquiry as soon as
              we can.
            </p>

            <div className="mt-10 border-t border-ink/10 pt-6 space-y-5">
              <div>
                <p className="eyebrow text-ink/50 mb-2">Studio</p>
                <p className="text-[14px] text-ink/85 leading-relaxed">
                  110 Ansley Grove Rd #10
                  <br />
                  Woodbridge, ON L4L 3R1
                </p>
              </div>
              <div>
                <p className="eyebrow text-ink/50 mb-2">Phone</p>
                <a
                  href="tel:19056058444"
                  className="editorial-link text-[14px]"
                >
                  1·905·605·8444
                </a>
              </div>
              <div>
                <p className="eyebrow text-ink/50 mb-2">Fax</p>
                <p className="text-[14px] text-ink/75">1·905·605·2520</p>
              </div>
              <div>
                <p className="eyebrow text-ink/50 mb-2">Email</p>
                <a
                  href="mailto:clinic@dermatixclinic.com"
                  className="editorial-link text-[14px]"
                >
                  clinic@dermatixclinic.com
                </a>
              </div>
              <div>
                <p className="eyebrow text-ink/50 mb-2">Hours</p>
                <ul className="text-[14px] text-ink/75 space-y-1">
                  <li>Mon – Fri · 9a – 6p</li>
                  <li>Sat · 9a – 4p</li>
                  <li>Sun · closed</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-5 py-3 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors"
              >
                Book instead
                <span className="arrow-slide">→</span>
              </Link>
              <Link
                href="/book/consultation"
                className="group inline-flex items-center gap-2 rounded-full bg-bone text-ink border border-ink/15 px-5 py-3 text-[12px] tracking-wider2 uppercase hover:bg-cream transition-colors"
              >
                Book a consultation
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-bone">
        <div className="w-full h-[420px] lg:h-[520px] relative border-y border-ink/10">
          <iframe
            title="Dermatix Clinic location"
            src="https://www.google.com/maps?q=Dermatix+Clinic+110+Ansley+Grove+Rd+%2310+Woodbridge+ON+L4L+3R1&z=17&output=embed"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
