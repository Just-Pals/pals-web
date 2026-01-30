"use client";
import { motion } from "framer-motion";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SecuritySection() {
  const revealRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const hEl = revealRef.current;
      if (!hEl) return;

      const words = Array.from(hEl.querySelectorAll(".reveal-word"));
      gsap.from(words, {
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
    });

    return () => ctx.revert();
  }, []);

  const text = "on PALS pay, <br/> deserve better. <br/> and so much more.";

  return (
    <section className="w-full bg-black text-white py-16 lg:py-32">
      
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Heading */}
        <h2
          ref={revealRef}
          className="text-center font-serif italic leading-[1.1]"
        >
          {text.split(" ").map((word, i) => {
            if (word === "<br/>" || word === "<br>") return <br key={i} />;
            return (
              <span
                key={i}
                className="overflow-hidden inline-block"
              >
                <span className="reveal-word inline-block text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-[#C8FFD4]">
                  {word}&nbsp;
                </span>
              </span>
            );
          })}
        </h2>

        {/* Feature Row */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <p className="text-[28px] md:text-[34px] font-semibold">
              secure
            </p>
            <p className="mt-4 text-white/70 text-[16px] md:text-lg leading-relaxed">
              built with bank-grade protection, <br />
              without the bank-grade complications.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/pay/secure.png"
              alt="Secure"
              width={320}
              height={320}
              className="w-[220px] sm:w-[260px] md:w-[320px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
