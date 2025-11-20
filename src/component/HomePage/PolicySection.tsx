"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const policyText = `
Pals Legal & Compliance Disclaimer

Pals is a community-based financial platform that works with licensed banking, payment, and compliance partners wherever required. These partners are responsible only for the services they directly provide and are not responsible for Pals circles, pooled funds, profit-sharing models, or any other Pals features.

All trademarks, logos, and brand names referenced on this platform belong to their respective owners.

Any offers, promotions, rewards, or benefits provided through Pals are subject to separate terms and may be available for a limited time.

Pals does not offer interest-based products or speculative financial instruments. Any activity involving digital assets, tokenized assets, or alternative financial models may carry risks. Users should review all terms carefully and consult a qualified financial advisor if needed.

Use of the Pals platform is subject to eligibility checks, verification, and compliance with applicable regional regulations.
`;

export default function PolicySection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full border-y border-white/10 bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <button
        className="block mx-auto text-center text-white/80 text-[14px] sm:text-[16px] md:text-[18px] uppercase tracking-[0.18em] hover:text-white transition"
        onClick={() => setOpen(!open)}
      >
        Legal & Policy {open ? "▲" : "▼"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto mt-6 sm:mt-8 text-white/50 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed whitespace-pre-line px-2"
          >
            {policyText}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
