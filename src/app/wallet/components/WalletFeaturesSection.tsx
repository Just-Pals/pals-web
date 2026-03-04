"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function WalletHeroSection() {
  const { scrollY } = useScroll();

  // Animation tuned for 80vh height
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const blurValue = useTransform(scrollY, [0, 600], [0, 30]);
  const y = useTransform(scrollY, [0, 600], [0, -140]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.95]);

  const blur = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <section className="h-[80vh] min-h-[600px] bg-[#F5F5F5] flex items-center justify-center text-center px-6">
      <motion.h1
        style={{
          opacity,
          y,
          scale,
          filter: blur,
        }}
        className={`
          ${playfair.className}
          text-black
          font-black
          leading-[0.92]
          tracking-[-1px]
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-[130px]
          max-w-6xl
        `}
      >
        payments, for the
        <br />
        ones with taste.
      </motion.h1>
    </section>
  );
}