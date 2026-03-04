"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function WalletStorySection() {
  const ref = useRef(null);

  // Track THIS section only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 30%"],
  });

  // Smooth fade-in
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const blurValue = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

  const blur = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <section
      ref={ref}
      className="h-[70vh] min-h-[600px] bg-[#F5F5F5] flex items-center justify-center px-6"
    >
      <motion.div
        style={{
          opacity,
          y,
          scale,
          filter: blur,
        }}
        className="max-w-5xl text-center"
      >
        <p className="text-3xl md:text-4xl leading-relaxed text-black font-medium">
          every payment has a story. some of which deserve to be
          celebrated: the payments made to special people. these
          deserve a UPI experience,{" "}
          <span
            className={`${playfair.className} italic text-3xl md:text-4xl`}
          >
            designed tastefully.
          </span>
        </p>
      </motion.div>
    </section>
  );
}