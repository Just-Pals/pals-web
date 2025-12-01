"use client";

import { useEffect, useRef, useState } from "react";

// distance in px from viewport center where a line becomes fully white
const HOT_ZONE = 60;

const LINES = [
  
"pals is for the people",
"who hold their tribe together",
"who step up before anyone asks",
"who treat trust like it actually matters",
"they deserve a syste",
"that sends that energy right bac",
"with real access, real safety",
"and real ways to grow",
"we win because our circle does",
];

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [weights, setWeights] = useState<number[]>(() => LINES.map(() => 0));

  useEffect(() => {
    let raf = 0;

    const measure = () => {
      if (!containerRef.current) return;
      const nodes = Array.from(
        containerRef.current.querySelectorAll<HTMLSpanElement>("[data-line]")
      );

      const mid = window.innerHeight / 2;

      const newWeights = nodes.map((el) => {
        const rect = el.getBoundingClientRect();
        const lineMid = rect.top + rect.height / 2;
        const dist = Math.abs(lineMid - mid);
        // 1 when near center, fades to ~0.25 away from center
        const t = Math.max(0, 1 - dist / (HOT_ZONE * 3)); // softer falloff
        return t;
      });

      setWeights(newWeights);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="w-full bg-black flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 md:py-28 pb-0">
      <div ref={containerRef} className="w-full max-w-4xl mx-auto">
        <h3 className="text-white/50 text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.35em] uppercase mb-6 sm:mb-8 md:mb-10">
          Not everyone makes it in.
        </h3>

        <div className="space-y-2 sm:space-y-3">
          {LINES.map((text, i) => {
            const w = weights[i] ?? 0;
            const opacity = 0.28 + w * 0.72; // 0.28 → 1
            const translate = 6 - w * 6; // 6px → 0px
            return (
              <span
                key={i}
                data-line
                className="block text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] leading-[1.35] will-change-[opacity,transform] transition-[opacity,transform] duration-150"
                style={{
                  opacity,
                  transform: `translateY(${translate}px)`,
                  color: "rgba(255,255,255,1)",
                }}
              >
                {text}
              </span>
            );
          })}
        </div>

        {/* Horizontal divider */}
        <div className="mt-10 sm:mt-12 md:mt-16 h-px w-full bg-white/10" />
      </div>
    </section>
  );
}
