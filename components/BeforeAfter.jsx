"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function BeforeAfter({
  beforeSrc = "/images/editorial-portrait.jpg",
  afterSrc = "/images/editorial-portrait.jpg",
  beforeLabel = "Before · Day 0",
  afterLabel = "After · Week 12",
}) {
  const wrapRef = useRef(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);
  const auto = useRef({ started: false });

  useEffect(() => {
    function onMove(e) {
      if (!dragging.current || !wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const x = clientX - rect.left;
      const next = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPct(next);
    }
    function stop() {
      dragging.current = false;
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  function handleEnter() {
    if (auto.current.started) return;
    auto.current.started = true;
    let p = 50;
    let dir = 1;
    const id = setInterval(() => {
      p += dir * 1.2;
      if (p >= 70) dir = -1;
      if (p <= 30) {
        dir = 1;
        clearInterval(id);
        setPct(50);
        return;
      }
      setPct(p);
    }, 24);
  }

  function startDrag() {
    dragging.current = true;
  }

  return (
    <div
      ref={wrapRef}
      onMouseEnter={handleEnter}
      className="relative aspect-[4/5] w-full border border-ink/15 overflow-hidden bg-cream select-none"
    >
      {/* Before */}
      <div className="absolute inset-0">
        <Image
          src={beforeSrc}
          alt="Before"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={{ filter: "contrast(0.92) saturate(0.7) brightness(0.92)" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.05] to-black/[0.18]" />
      </div>

      {/* After — clipped */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${pct}%)` }}
      >
        <Image
          src={afterSrc}
          alt="After"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={{ filter: "contrast(1.08) saturate(1.05) brightness(1.05)" }}
        />
      </div>

      {/* Handle line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-bone shadow-[0_0_0_1px_rgba(0,0,0,0.2)] pointer-events-none"
        style={{ left: `calc(${pct}% - 1px)` }}
      />

      {/* Knob */}
      <div
        role="slider"
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        tabIndex={0}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPct((p) => Math.max(0, p - 4));
          if (e.key === "ArrowRight") setPct((p) => Math.min(100, p + 4));
        }}
        className="absolute top-1/2 w-12 h-12 rounded-full bg-bone border border-ink flex items-center justify-center cursor-ew-resize shadow-[0_6px_24px_rgba(0,0,0,0.18)] eyebrow text-ink"
        style={{
          left: `${pct}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        ↔
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 eyebrow text-bone bg-ink/45 backdrop-blur-md border border-bone/20 px-3 py-1.5 rounded-full">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 eyebrow text-bone bg-ink/45 backdrop-blur-md border border-bone/20 px-3 py-1.5 rounded-full">
        {afterLabel}
      </span>
    </div>
  );
}
