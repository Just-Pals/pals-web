"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SafetyNetSection() {
  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">

        {/* Left Animation Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/pay/safety-dots.png"
            alt="safety animation"
            width={200}
            height={200}
            className="opacity-80 w-[120px] sm:w-[160px] md:w-[200px]"
          />

          <Image
            src="/pay/shield-icon.png"
            alt="shield"
            width={60}
            height={60}
            className="mt-4 sm:mt-6 w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px]"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mt-8 sm:mt-12 md:mt-0"
        >
          <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[34px] font-semibold leading-tight">
            your payments come <br /> with a safety net
          </h2>

          <p className="text-white/70 mt-4 sm:mt-6 leading-relaxed text-[14px] sm:text-[16px] md:text-lg">
            in the unlikely event of a payment not going through, make another
            one. if you're charged for the first, PALS will credit you the money
            back.
          </p>
        </motion.div>
      </div>

      {/* SPACER */}
      <div className="h-[120px] sm:h-[160px] md:h-[200px] lg:h-[260px]"></div>

      {/* MEET YOUR SKIN */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-[32px] sm:text-[42px] md:text-[60px] lg:text-[95px] font-serif italic text-[#C8FFD4] leading-none"
      >
        {/* meet your skin */}
        gift collectibles, coupons.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center mx-auto text-white/70 text-[14px] sm:text-[16px] md:text-lg mt-6 sm:mt-8 md:mt-10 leading-relaxed"
      >
        PALS pay is built to showcase you. your tastes. your wins. your
        collections. explore the skins your scanner can wear. it might just be
        what you need to find yourself.
        </motion.p>
      </div>
    </section>
  );
}
