"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqData = [
  { q: "What is PALS?", a: "PALS is a members-only club that rewards trustworthy individuals with financial and lifestyle privileges." },
  { q: "How do I become a member?", a: "You need a verified profile and consistent trustworthy history. Membership is selective." },
  { q: "Does PALS provide cashback benefits?", a: "Yes, members unlock cashback, rewards and exclusive experiences." },
  { q: "Is my data secure?", a: "All transactions are encrypted and we do not sell or share personal data." },
  { q: "Is PALS free to join?", a: "Yes, there is no joining cost. Eligibility requirements apply." },
  { q: "Is there a mobile app?", a: "Yes, PALS is available on iOS and Android." },
  { q: "Can I refer my friends?", a: "Yes, referral rewards allow trusted invites." },
  { q: "How do rewards work?", a: "Your reliability and participation unlock new reward tiers." },
  { q: "Is PALS international?", a: "Membership region availability varies by territory." },
  { q: "Can I cancel membership?", a: "Yes, cancellation can be done anytime from your account settings." },
];

export default function FaqSection() {
  const [sectionOpen, setSectionOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full border-y border-white/10 bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      
      {/* Section Header Toggle */}
      <button
        onClick={() => setSectionOpen(!sectionOpen)}
     className="block mx-auto text-center text-white/80 text-[14px] sm:text-[16px] md:text-[18px] uppercase tracking-[0.18em] hover:text-white transition"
       
       >
        F A Q s   {sectionOpen ? "▲" : "▼"}
      </button>

      <AnimatePresence>
        {sectionOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 mt-6 sm:mt-8"
          >
            {faqData.map((item, i) => (
              <FaqItem
                key={i}
                index={i}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                q={item.q}
                a={item.a}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function FaqItem({ index, q, a, openIndex, setOpenIndex }: any) {
  const ref = useRef(null);
  useInView(ref); // keeps scroll highlight behavior (but now full white)

  return (
    <div ref={ref} className="transition">

      <button
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        className="w-full text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium text-white"
      >
        {q}
      </button>

      <AnimatePresence>
        {openIndex === index && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="text-white/60 mt-2 sm:mt-3 leading-relaxed text-[14px] sm:text-[15px] md:text-[17px] pr-2 sm:pr-4"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
