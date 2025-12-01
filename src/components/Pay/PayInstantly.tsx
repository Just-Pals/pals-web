"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PayInstantly() {
  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center order-1 md:order-1"
        >
          <Image
            src="/pay/phone-pay.png"
            alt="Pay Instantly UI"
            width={350}
            height={700}
            className="object-contain w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 order-2 md:order-2"
        >
          <h2 className="text-[36px] sm:text-[48px] md:text-[70px] lg:text-[90px] text-[#00FFA3] font-serif italic leading-none">
            add <br/> your pals
          </h2>

          <p className="text-white/70 mt-4 sm:mt-6 text-[14px] sm:text-[16px] md:text-lg max-w-md">
            bring in the people you trust the most.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
