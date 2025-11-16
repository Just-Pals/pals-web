"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnersSection() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center px-6 py-32">

      {/* TOP BRAND PLATFORM IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/partners-platform.png"
          alt="Partner Brands Platform"
          width={650}
          height={400}
          className="mx-auto"
        />
      </motion.div>

      {/* TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-14 text-center max-w-3xl leading-relaxed text-[26px] md:text-[32px] font-light"
      >
        <p>
          shopping is hard.{" "}
          <span className="text-[#FF4AF0] italic font-semibold">for others.</span>
        </p>

        <p className="mt-4">
          for you, it’s as easy as picking a{" "}
          <span className="text-[#00E6FF] italic font-semibold">partner brand outlet</span>,
          paying with{" "}
          <span className="text-[#C7FF4A] italic font-semibold">PALS pay</span>,
        </p>

        <p className="mt-4">
          and{" "}
          <span className="text-[#FFB347] italic font-semibold">claiming 2x cashback.</span>
        </p>
      </motion.div>
    </section>
  );
}
