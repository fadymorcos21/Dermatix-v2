"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const opaque = scrolled || !isHome;

  function openServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function scheduleCloseServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        opaque
          ? "backdrop-blur-md bg-bone/85 border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1670px] flex items-center justify-between px-5 lg:px-10 h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="inline-flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8 rounded-[4px] bg-ink text-bone display text-[16px] lg:text-[18px] leading-none">
            D
          </span>
          <span className="display text-[20px] lg:text-[22px] tracking-tightest text-ink">
            Dermatix
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] tracking-wide text-ink/85 ml-8 lg:ml-14 mr-auto">
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <Link
              href="/services"
              className={`editorial-link inline-flex items-center gap-1.5 ${
                servicesOpen ? "text-ink" : ""
              }`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services
              <span
                className={`inline-block transition-transform duration-300 text-[10px] ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              >
                ▾
              </span>
            </Link>

            {/* Dropdown — pt-4 forms the hover bridge between trigger and panel */}
            <div
              className={`absolute left-0 top-full pt-5 transition-all duration-500 ease-out ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-3 pointer-events-none"
              }`}
            >
              <div
                className="bg-bone border border-ink/10 shadow-[0_30px_80px_-30px_rgba(23,21,15,0.35)] w-[640px] p-6 lg:p-7 grain"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-ink/10">
                  <p className="eyebrow text-ink/55">The Menu · 10 protocols</p>
                  <Link
                    href="/services"
                    className="text-[11px] tracking-wider2 uppercase editorial-link"
                  >
                    View all <span className="arrow-slide">→</span>
                  </Link>
                </div>

                <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
                  {services.map((s, i) => (
                    <li
                      key={s.slug}
                      className="opacity-0 translate-y-1 transition-all duration-500 ease-out"
                      style={{
                        opacity: servicesOpen ? 1 : 0,
                        transform: servicesOpen
                          ? "translateY(0)"
                          : "translateY(4px)",
                        transitionDelay: servicesOpen
                          ? `${80 + i * 35}ms`
                          : "0ms",
                      }}
                    >
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-center justify-between gap-3 py-2.5 px-2 -mx-2 rounded-sm hover:bg-cream transition-colors"
                      >
                        <span className="flex items-baseline gap-3 min-w-0">
                          <span className="eyebrow text-ink/40 shrink-0">
                            {s.no}
                          </span>
                          <span className="display text-[18px] tracking-tightest text-ink truncate">
                            {s.name}
                          </span>
                        </span>
                        <span className="arrow-slide text-ink/50 text-[14px]">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between gap-4">
                  <p className="text-[12px] text-ink/60 max-w-xs">
                    Not sure where to start? Begin with a consultation.
                  </p>
                  <Link
                    href="/book/consultation"
                    className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-4 py-2 text-[11px] tracking-wider2 uppercase hover:bg-moss transition-colors shrink-0"
                  >
                    Book consult
                    <span className="arrow-slide">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/consultation" className="editorial-link">
            Consultation
          </Link>
          <Link href="/results" className="editorial-link">
            Results
          </Link>
          <Link href="/contact" className="editorial-link">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-5 py-2.5 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors"
          >
            Book
            <span className="arrow-slide">→</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
