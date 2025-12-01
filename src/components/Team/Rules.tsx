"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faq = [
  {
    title: "not in my interest.",
    color: "#00E6FF",
    content:
      "a 100% cashback winner is selected every hour, from transactions made between 12 PM and 10 PM.",
  },
  {
    title: "join the poolitics.",
    color: "#41c935ff", // no background when closed
    content:
      "shop at select partner malls and outlets using pals pay to be eligible for the hourly draw.",
  },
  {
    title: "credit where credit is due.",
    color: "#FFE100",
    content:
      "probability decides. every transaction you do with pals pay increases your odds of winning. only one win per user per day.",
  },
  {
    title: "impactful spending.",
    color: "#FF9800",
    content:
      "if you win, the 100% cashback amount is automatically credited to your pals balance and you'll be notified instantly.",
  },
];

export default function Rules() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20">
      {/* HEADER */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <p className="text-[10px] xs:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 uppercase">
          Frequently Asked Questions
        </p>
        <h2 className="text-[#c6ff00] italic text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mt-2 sm:mt-3">
          the rules
        </h2>
      </div>

      {/* LIST */}
      <div className="space-y-0">
        {faq.map((item, i) => {
          const opened = openIndex === i;
          return (
            <div key={i} className="border-b border-gray-700">
              {/* HEADER ROW */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center py-4 sm:py-6 md:py-8 px-2 sm:px-4"
              >
                <span className="italic text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-left">
                  {item.title}
                </span>

                <div className="flex items-center gap-2 sm:gap-3 text-gray-400 shrink-0">
                  <span className="text-sm sm:text-base md:text-lg font-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <motion.span
                    animate={{ rotate: opened ? 180 : 0 }}
                    className="text-lg sm:text-xl md:text-2xl"
                  >
                    ▼
                  </motion.span>
                </div>
              </button>

              {/* CONTENT */}
              <AnimatePresence>
                {opened && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10 text-black text-sm sm:text-base md:text-lg leading-relaxed"
                      style={{ background: item.color }}
                    >
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
