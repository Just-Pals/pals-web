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
      className="w-full bg-black py-28 px-6 text-center flex flex-col items-center"
    >
      <div className="mb-6 bg-white p-4 rounded-lg inline-block">
  <Image
    src="/icons/lock.svg"
    alt="Secure Icon"
    width={60}
    height={60}
  />
</div>

      {/* Top Label */}
      <motion.p
        style={{ opacity: textOpacity }}
        className="text-[12px] tracking-[0.25em] uppercase text-white/70"
      >
        YOUR DATA ISN'T OUR BUSINESS. KEEPING IT SAFE IS.
      </motion.p>

      {/* Main Text Animated */}
      <motion.h2
        style={{ opacity: textOpacity }}
        className="mt-8 text-[30px] md:text-[48px] leading-[1.3] max-w-4xl font-medium text-white/60"
      >
        all your personal data and
        <br />
        transactions are encrypted and
        <br />
        secured. there&apos;s no room for mistakes
        <br />
        because we didn&apos;t leave any.
      </motion.h2>
    </section>
  );
}
