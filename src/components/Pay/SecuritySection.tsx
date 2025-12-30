"use client";
import { motion } from "framer-motion";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function SecuritySection() {
  const revealRef = useRef<HTMLDivElement | null>(null);

  // Reveal text animation (uses global LenisProvider / ScrollTrigger scroller proxy)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const hEl = revealRef.current;

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
    });

    return () => ctx.revert();
  }, []);

  const text = "on PALS pay,  <br/> deserve better. <br/> and so much more.";
  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-14 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* ---- Heading ---- */}
        <h2
          ref={revealRef}
          className="text-center font-serif italic leading-[1.1]"
        >
          {text.split(" ").map((word, i) => {
            if (word === "<br/>" || word === "<br>") {
              return <br key={`br-${i}`} />;
            }
            return (
              <span
                key={i}
                className="reveal-word-wrapper overflow-hidden inline-block"
              >
                <span className="reveal-word inline-block text-[32px] sm:text-[42px] md:text-[60px] lg:text-[90px] text-[#C8FFD4]">
                  {word}&nbsp;
                </span>
              </span>
            );
          })}
        </h2>

        {/* ---- Lower Section ---- */}
        <div className="mt-16 sm:mt-24 md:mt-32 lg:mt-40 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-tight">
              secure
            </p>

            <p className="text-white/70 text-[14px] sm:text-[16px] md:text-lg mt-4 sm:mt-5 leading-relaxed">
              built with bank-grade protection, <br />
              without the bank-grade complications.
            </p>
          </motion.div>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <button className="w-[140px] sm:w-[160px] md:w-[180px] h-[55px] sm:h-[65px] md:h-[70px] border border-white rounded-full flex items-center px-2 sm:px-3 transition-all group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white rounded-full shadow-lg group-hover:translate-x-[calc(100%-1rem)] sm:group-hover:translate-x-[calc(100%-1.25rem)] md:group-hover:translate-x-24 transition-transform"></div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
