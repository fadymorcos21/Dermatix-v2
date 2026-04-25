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
          ? "backdrop-blur-md bg-bone/75 border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between px-6 lg:px-10 h-16 lg:h-20">
        <a href="#top" className="flex items-center gap-2">
          <span className="display text-[22px] lg:text-[26px] tracking-tightest">
            Dermatix
          </span>
          <span className="eyebrow text-ink/50 hidden sm:inline">— est. Woodbridge</span>
        </a>
        <div className="hidden md:flex items-center gap-9 text-[13px] tracking-wide text-ink/80">
          <a href="#services" className="editorial-link">Services</a>
          <a href="#signature" className="editorial-link">Signature</a>
          <a href="#experience" className="editorial-link">Experience</a>
          <a href="#location" className="editorial-link">Location</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline eyebrow text-ink/50">1·905·605·8444</span>
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
