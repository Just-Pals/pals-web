"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SafetyNetSection() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-24 pt-40 pb-32">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center">

        {/* Left Animation Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/safety-dots.png"
            alt="safety animation"
            width={200}
            height={200}
            className="opacity-80"
          />

          <Image
            src="/shield-icon.png"
            alt="shield"
            width={60}
            height={60}
            className="mt-6"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mt-16 md:mt-0"
        >
          <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight">
            your payments come <br /> with a safety net
          </h2>

          <p className="text-white/70 mt-6 leading-relaxed text-lg">
            in the unlikely event of a payment not going through, make another
            one. if you're charged for the first, PALS will credit you the money
            back.
          </p>
        </motion.div>
      </div>

      {/* SPACER */}
      <div className="h-[200px] md:h-[260px]"></div>

      {/* MEET YOUR SKIN */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-[60px] md:text-[95px] font-serif italic text-[#C8FFD4] leading-none"
      >
        meet your skin
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center mx-auto text-white/70 text-lg mt-10 leading-relaxed"
      >
        PALS pay is built to showcase you. your tastes. your wins. your
        collections. explore the skins your scanner can wear. it might just be
        what you need to find yourself.
      </motion.p>
    </section>
  );
}
