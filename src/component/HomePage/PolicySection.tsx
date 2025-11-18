"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const policyText = `
The Venmo Mastercard® is issued by The Bancorp Bank, N.A., pursuant to license by Mastercard International Incorporated. Card may be used everywhere Mastercard is accepted. Mastercard and the circles design are registered trademarks of Mastercard International Incorporated. The Bancorp Bank, N.A. is issuer of the Card only and not responsible for the associated accounts or other products, services, or offers from Venmo.

Venmo cash back terms apply. Offers are available for a limited time.

Cryptocurrency activity is subject to risks and may result in losses. Consult your financial advisor.

All trademarks belong to their respective owners.
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
