"use client";
import { motion } from "framer-motion";

export default function Statement() {
  return (
    <section className="bg-black text-center py-40 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-[64px] md:text-[80px] text-[#C5FFB0] font-serif italic leading-tight"
      >
        make a statement
        <br />
        every time you pay
      </motion.h2>

      <p className="mt-8 text-white/70 max-w-2xl mx-auto leading-relaxed text-[18px]">
        scan & pay via UPI. earn assured rewards. claim collectibles. all of this
        in a secure payment experience the creditworthy deserve.
      </p>

      <motion.a
        href="#how-it-works"
        whileHover={{ y: -3 }}
        className="inline-block mt-12 text-[#D5FF00] tracking-[0.25em] text-sm uppercase"
      >
        how it works ↓
      </motion.a>
    </section>
  );
}
