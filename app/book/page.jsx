import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { getServiceBySlug } from "@/lib/services";

export const metadata = {
  title: "Book an Appointment · Dermatix Clinic Woodbridge",
  description:
    "Request a service appointment at Dermatix Clinic, Woodbridge. We'll confirm within one business day.",
};

export default function BookPage({ searchParams }) {
  const requestedSlug = searchParams?.service || "";
  const initialService =
    requestedSlug && getServiceBySlug(requestedSlug) ? requestedSlug : "";
  const service = initialService ? getServiceBySlug(initialService) : null;

  return (
    <main className="relative">
      <Nav />

      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-bone border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow text-ink/50 mb-4 tracking-wider3">Appointment</p>
            <h1 className="display text-[12vw] sm:text-[8vw] lg:text-[6.5rem] xl:text-[7rem] leading-[0.92] tracking-tightest">
              Book your
              <br />
              <span className="display-italic text-stone">treatment.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] lg:text-[16px] leading-relaxed text-ink/75">
              {service
                ? `You're requesting a ${service.name} appointment. Choose a date that works and we'll confirm within one business day.`
                : "For existing patients, or anyone who already knows the treatment they want. Choose a service, pick a time, and we'll confirm shortly."}
            </p>

            {service && (
              <div className="mt-8 border border-ink/15 p-5 bg-bone/50 max-w-md">
                <p className="eyebrow text-ink/50 mb-2">Selected service</p>
                <p className="display text-[26px] leading-tight tracking-tightest">
                  {service.name}
                </p>
                <div className="mt-2 flex items-center justify-between text-[12px] text-ink/60">
                  <span>{service.time}</span>
                  <span>{service.tags?.[0]}</span>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-3 inline-block text-[12px] editorial-link"
                >
                  Read about this treatment →
                </Link>
              </div>
            )}

            <div className="mt-10 border-t border-ink/10 pt-6">
              <p className="eyebrow text-ink/50 mb-3">First time with us?</p>
              <Link
                href="/book/consultation"
                className="group inline-flex items-center gap-2 text-[13px] editorial-link"
              >
                Book a new patient consultation instead
                <span className="arrow-slide">→</span>
              </Link>
            </div>

            <div className="mt-8 border-t border-ink/10 pt-6 text-[13px] text-ink/65 space-y-2">
              <p>10 – 110 Ansley Grove Rd, Woodbridge, ON L4L 3R1</p>
              <p>
                <a href="tel:19056058444" className="editorial-link">
                  1·905·605·8444
                </a>
              </p>
              <p>
                <a href="mailto:clinic@dermatixclinic.com" className="editorial-link">
                  clinic@dermatixclinic.com
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <BookingForm initialService={initialService} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
