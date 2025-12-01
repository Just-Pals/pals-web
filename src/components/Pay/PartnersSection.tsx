"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnersSection() {
  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* TOP BRAND PLATFORM IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[650px]"
        >
          <Image
            src="/pay/partners-platform.png"
            alt="Partner Brands Platform"
            width={650}
            height={400}
            className="mx-auto w-full h-auto"
          />
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 sm:mt-12 md:mt-14 text-center max-w-3xl mx-auto leading-relaxed text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] font-light"
        >
        <p>
          Because your circle {"> "}
          <span className="text-[#FF4AF0] italic font-semibold">any bank.</span>
        </p>
        <p className="mt-4">
          and your spends deserve{" "}
          <span className="text-[#00E6FF] italic font-semibold">rewards 
            <br/> and duas</span>,
          <span className="text-[#C7FF4A] italic font-semibold"> your bank can’t match.</span>,
        </p>

        <p className="mt-4">
        
          <span className="text-[#FFB347] italic font-semibold">your network = your networth.</span>
        </p>
      </motion.div>
      </div>
    </section>
  );
}
