"use client";
import { motion } from "framer-motion";

export default function SecuritySection() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-24 py-40">

      {/* ---- Heading ---- */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center font-serif italic leading-[1.1]"
      >
        <span className="block text-[60px] md:text-[90px] text-[#C8FFD4]">
          on PALS pay, 
          <br/>
          security is first.
        </span>
        <span className="block text-[50px] md:text-[80px] text-[#A3C3A3]/80 mt-4">
          and second.
        </span>
      </motion.h2>

      {/* ---- Lower Section ---- */}
      <div className="mt-40 flex flex-col md:flex-row justify-between items-center gap-20">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md"
        >
          <p className="text-[28px] md:text-[32px] font-semibold leading-tight">
            switch to anonymity, <br />
            create an alias UPI ID.
          </p>

          <p className="text-white/70 text-lg mt-5 leading-relaxed">
            hide your sensitive details from merchants when you pay,
            because your details are for your eyes only.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <button className="w-[180px] h-[70px] border border-white rounded-full flex items-center px-3 transition-all group">
            <div className="w-12 h-12 bg-white rounded-full shadow-lg group-hover:translate-x-24 transition-transform"></div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
