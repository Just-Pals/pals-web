"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function SecuritySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  // Text fade effect (grey → white)
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [0.25, 1]);

  return (
    <section
      ref={ref}
      className="w-full bg-black py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-center flex flex-col items-center"
    >
      <div className="mb-4 sm:mb-6 bg-white p-3 sm:p-4 rounded-lg inline-block">
  <Image
    src="/icons/lock.svg"
    alt="Secure Icon"
    width={60}
    height={60}
    className="w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px]"
  />
</div>

      {/* Top Label */}
      <motion.p
        style={{ opacity: textOpacity }}
        className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-white/70 px-4"
      >
        YOUR DATA ISN'T OUR BUSINESS. KEEPING IT SAFE IS.
      </motion.p>

      {/* Main Text Animated */}
      <motion.h2
        style={{ opacity: textOpacity }}
        className="mt-6 sm:mt-8 text-[20px] sm:text-[24px] md:text-[30px] lg:text-[48px] leading-[1.3] max-w-4xl font-medium text-white/60 px-4"
      >
        all your personal data and
        <br className="hidden sm:block" />
        transactions are encrypted and
        <br className="hidden sm:block" />
        secured. there&apos;s no room for mistakes
        <br className="hidden sm:block" />
        because we didn&apos;t leave any.
      </motion.h2>
    </section>
  );
}
