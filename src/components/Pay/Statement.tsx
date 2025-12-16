"use client";
import { motion } from "framer-motion";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Statement() {
  const revealRef = useRef<HTMLDivElement | null>(null);
  const pRevealRef = useRef<HTMLParagraphElement | null>(null);

  // Reveal text animation (uses global LenisProvider / ScrollTrigger scroller proxy)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const hEl = revealRef.current;
      const pEl = pRevealRef.current;

      if (hEl) {
        const hWords = Array.from(hEl.querySelectorAll(".reveal-word"));
        gsap.from(hWords, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.06,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: hEl,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        });
      }

      if (pEl) {
        const pWords = Array.from(pEl.querySelectorAll(".reveal-word"));
        gsap.from(pWords, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.06,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pEl,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const text = "the future of money <br/> … is social.";
  return (
    <section className="bg-black text-center py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={revealRef}
          className="reveal-wrapper overflow-hidden inline-block text-[32px] sm:text-[42px] md:text-[64px] lg:text-[80px] text-[#C5FFB0] font-serif italic leading-tight"
        >
          {text.split(" ").map((word, i) => {
            if (word === "<br/>" || word === "<br>") {
              return <br key={`br-${i}`} />;
            }
            return (
              <span key={i} className="reveal-word-wrapper overflow-hidden inline-block">
                <span className="reveal-word inline-block">{word}&nbsp;</span>
              </span>
            );
          })}
        </h2>

        <p
          ref={pRevealRef}
          className="mt-6 sm:mt-8 md:mt-10 text-white/70 max-w-2xl mx-auto leading-relaxed text-[14px] sm:text-[16px] md:text-[18px]"
        >
          {"pay fast. borrow easy. lend wisely. invest together. all from your pools. <br/> all with your pals. secure. simple. palworthy."
            .split(" ")
            .map((word, i) => {
              if (word === "<br/>" || word === "<br>") {
                return <br key={`p-br-${i}`} />;
              }
              return (
                <span key={i} className="reveal-word-wrapper overflow-hidden inline-block">
                  <span className="reveal-word inline-block">{word}&nbsp;</span>
                </span>
              );
            })}
        </p>

        <motion.a
          href="#how-it-works"
          whileHover={{ y: -3 }}
          className="inline-block mt-8 sm:mt-10 md:mt-12 text-[#D5FF00] tracking-[0.25em] text-[10px] sm:text-xs md:text-sm uppercase"
        >
          how it works ↓
        </motion.a>
      </div>
    </section>
  );
}