"use client";
import { motion } from "framer-motion";

export default function Statement() {
  return (
    <section className="bg-black text-center py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-[32px] sm:text-[42px] md:text-[64px] lg:text-[80px] text-[#C5FFB0] font-serif italic leading-tight"
        >
          the future of money
          <br />
          … is social.
        </motion.h2>

        <p className="mt-6 sm:mt-8 md:mt-10 text-white/70 max-w-2xl mx-auto leading-relaxed text-[14px] sm:text-[16px] md:text-[18px]">
          pay fast. borrow easy. lend wisely. invest together. all from your pools. <br/> all with your pals. secure. simple. palworthy.
        </p>

        <motion.a
          href="#how-it-works"
          whileHover={{ y: -3 }}
          className="inline-block mt-8 sm:mt-10 md:mt-12 text-[#D5FF00] tracking-[0.25em] text-[10px] sm:text-xs md:text-sm uppercase"
        >
          how it works ↓
        </motion.a>
      </div>
    </section>
  );
}
