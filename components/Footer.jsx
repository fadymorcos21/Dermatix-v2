import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-bone text-ink border-t border-ink/15">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-5">
          <p className="display text-[44px] lg:text-[64px] leading-none tracking-tightest">
            Dermatix
            <span className="display-italic text-stone">.</span>
          </p>
          <p className="mt-5 text-[13px] text-ink/65 max-w-md leading-relaxed">
            A studio for medical aesthetics in Woodbridge, Ontario.
            Physician-led, obsessively subtle. Serving the GTA since 2019.
          </p>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <p className="eyebrow text-ink/50 mb-4">Menu</p>
          <ul className="space-y-2 text-[13px]">
            <li>
              <Link href="/services" className="editorial-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/consultation" className="editorial-link">
                Consultation
              </Link>
            </li>
            <li>
              <Link href="/results" className="editorial-link">
                Results
              </Link>
            </li>
            <li>
              <Link href="/contact" className="editorial-link">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/book" className="editorial-link">
                Book
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <p className="eyebrow text-ink/50 mb-4">Studio</p>
          <ul className="space-y-2 text-[13px] text-ink/75">
            <li>Mon – Fri · 9a – 6p</li>
            <li>Sat · 9a – 4p</li>
            <li>Sun · closed</li>
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-3">
          <p className="eyebrow text-ink/50 mb-4">Contact</p>
          <ul className="space-y-2 text-[13px]">
            <li>110 Ansley Grove Rd #10</li>
            <li>Woodbridge, ON L4L 3R1</li>
            <li>
              <a href="tel:19056058444" className="editorial-link">
                1·905·605·8444
              </a>
            </li>
            <li>
              <a
                href="mailto:clinic@dermatixclinic.com"
                className="editorial-link"
              >
                clinic@dermatixclinic.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] tracking-wider2 uppercase text-ink/50">
          <span>
            © {new Date().getFullYear()} Dermatix Clinic. All rights reserved.
          </span>
          <span className="flex items-center gap-6">
            <a href="#" className="editorial-link">
              Privacy
            </a>
            <a href="#" className="editorial-link">
              Terms
            </a>
            <a href="#" className="editorial-link">
              Instagram
            </a>
          </span>
          <span className="display-italic text-stone text-[14px]">
            — noticed, never placed.
          </span>
        </div>
      </div>
    </footer>
  );
}
