"use client";

import { motion } from "framer-motion";

export default function AnimatedInfoSection() {
  return (
    <section className="h-screen bg-[#dfe8d7] flex items-center">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#111827] mb-10"
        >
          Fundraising on GoFundMe is easy, powerful, and trusted.
        </motion.h2>

        {/* PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-[#1f2937] leading-relaxed mb-10"
        >
          Get what you need to help your fundraiser succeed on GoFundMe,
          whether you’re raising money for yourself, friends, family, or
          charity. With no fee to start, GoFundMe is the world’s leading{" "}
          <AnimatedLink text="crowdfunding" /> platform—from{" "}
          <AnimatedLink text="memorial" /> tributes and funerals to{" "}
          <AnimatedLink text="medical" /> emergencies and{" "}
          <AnimatedLink text="nonprofits" />. Whenever you need help, you can{" "}
          <AnimatedLink text="ask here" />.
        </motion.p>

        {/* SECOND LINE */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-[#1f2937]"
        >
          Still have <AnimatedLink text="questions" />? Learn more about{" "}
          <AnimatedLink text="how GoFundMe works" />.
        </motion.p>

      </div>
    </section>
  );
}

/* LINK ANIMATION */

function AnimatedLink({ text }: { text: string }) {
  return (
    <span className="relative font-medium cursor-pointer group">
      {text}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#111827] transition-all duration-300 group-hover:w-full"></span>
    </span>
  );
}