"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-md bg-bone/80 border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1670px] flex items-center justify-between px-5 lg:px-10 h-16 lg:h-20">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="inline-flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8 rounded-[4px] bg-ink text-bone display text-[16px] lg:text-[18px] leading-none">
            D
          </span>
          <span className="display text-[20px] lg:text-[22px] tracking-tightest text-ink">
            Dermatix
          </span>
        </a>

        {/* Center nav — kept on the left half so it never overlaps the portrait */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] tracking-wide text-ink/85 ml-8 lg:ml-14 mr-auto">
          <a href="#services" className="editorial-link">
            Services
          </a>
          <a href="#book" className="editorial-link">
            Consultation
          </a>
          <a href="#testimonials" className="editorial-link">
            Results
          </a>
          <a href="#location" className="editorial-link">
            Contact
          </a>
        </div>

        {/* Right side — Book CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#book"
            className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone px-5 py-2.5 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors"
          >
            Book
            <span className="arrow-slide">→</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
