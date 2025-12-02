"use client";
import { motion } from "framer-motion";

export default function SecuritySection() {
  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto">
        {/* ---- Heading ---- */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center font-serif italic leading-[1.1]"
        >
          <span className="block text-[32px] sm:text-[42px] md:text-[60px] lg:text-[90px] text-[#C8FFD4]">
            on PALS pay, 
            <br/>
           deserve better.
          </span>
          <span className="block text-[28px] sm:text-[36px] md:text-[50px] lg:text-[80px] text-[#A3C3A3]/80 mt-2 sm:mt-3 md:mt-4">
            and so much more.
          </span>
        </motion.h2>

        {/* ---- Lower Section ---- */}
        <div className="mt-16 sm:mt-24 md:mt-32 lg:mt-40 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md"
        >
          <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-tight">
            secure
          </p>

          <p className="text-white/70 text-[14px] sm:text-[16px] md:text-lg mt-4 sm:mt-5 leading-relaxed">
            built with bank-grade protection, <br/>without the bank-grade complications.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <button className="w-[140px] sm:w-[160px] md:w-[180px] h-[55px] sm:h-[65px] md:h-[70px] border border-white rounded-full flex items-center px-2 sm:px-3 transition-all group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white rounded-full shadow-lg group-hover:translate-x-[calc(100%-1rem)] sm:group-hover:translate-x-[calc(100%-1.25rem)] md:group-hover:translate-x-24 transition-transform"></div>
          </button>
        </motion.div>

        </div>
      </div>
    </section>
  );
}
