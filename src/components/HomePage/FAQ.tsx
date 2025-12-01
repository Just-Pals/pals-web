"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    // 1. Basics
    {
      question: "What is Pals?",
      answer:
        "Pals is a members-only financial circle where your friends, family, or trusted community become your financial power. Instead of banks and interest, Pals uses real assets (like gold) and shared risk to give you fair access to money.",
    },
    {
      question: "Is Pals a bank?",
      answer:
        "No. Pals is not a bank. It is a community-based financial platform that works with regulated partners where required, and is built on ethical and Islamic finance principles.",
    },
    {
      question: "Who is Pals for?",
      answer:
        "Pals is for people who carry their communities — the one everyone calls in a crisis, the sibling who sends money home, the quiet backbone of the family, the builder who always shows up.",
    },
    {
      question: "Do I need to be Muslim to use Pals?",
      answer:
        "No. Pals is inspired by Islamic finance but open to anyone who believes money should be fair, transparent, and backed by real value.",
    },

    // 2. How Pals Works
    {
      question: "How does a circle work on Pals?",
      answer:
        "A circle is a small, trusted group of people who pool funds, back them with real assets like gold, and follow clear rules on how members can request and use money.",
    },
    {
      question: "How do I create a circle?",
      answer:
        "You choose trusted people, invite them to Pals, and set rules together. Over time, your combined history builds collective credibility.",
    },
    {
      question: "How do members access money from the circle?",
      answer:
        "Members request funds based on circle rules. Instead of interest, Pals uses structures like profit sharing, fees, and scheduled repayments — all transparent and predefined.",
    },
    {
      question: "What makes Pals different from loan apps or microfinance?",
      answer:
        "Pals avoids interest, credit scores, and anonymous risk engines. It is built on trust inside your circle, real asset backing, and shared risk/reward.",
    },

    // 3. Money, Profit, Returns
    {
      question: "Do I earn interest on Pals?",
      answer:
        "No. Pals avoids interest entirely. You may share in profits or fees generated through ethical structures aligned with Islamic finance principles.",
    },
    {
      question: "If there is no interest, how does Pals make money?",
      answer:
        "Pals may charge transparent service fees or design profit-sharing models. Everything is clear upfront — no hidden charges.",
    },
    {
      question: "What do circle members gain by contributing?",
      answer:
        "Members gain fair, interest-free access when needed, a share of the upside when the circle does well, and a system that values trust and community.",
    },

    // 4. Ethics & Islamic Finance
    {
      question: "How is Pals aligned with Islamic finance?",
      answer:
        "Pals avoids riba (interest), gharar (uncertainty), and maysir (speculation). All transactions are backed by real assets with fair risk-sharing.",
    },
    {
      question: "Is Pals Shariah-certified?",
      answer:
        "Pals is built on Islamic finance principles and will undergo scholar review for formal certification as the product evolves.",
    },
    {
      question: "Can non-Muslims trust an Islamic finance–based system?",
      answer:
        "Yes. Islamic finance is simply ethical and transparent finance. Many non-Muslims use it worldwide because it's stable and avoids exploitation.",
    },

    // 5. Safety, Risk, Gold
    {
      question: "Is my money safe in a Pals circle?",
      answer:
        "All finance carries risk, but Pals reduces unnecessary risk through gold-backed pools, clear rules, and small trust-based circles.",
    },
    {
      question: "What does gold-backed mean in Pals?",
      answer:
        "A portion of your circle’s pool is held in or linked to gold or similar real assets, anchoring value in something stable and tangible.",
    },
    {
      question: "What happens if someone cannot repay on time?",
      answer:
        "Each circle agrees on rules: grace periods, new schedules, or using part of the pool to absorb shocks. The goal is dignity, not punishment.",
    },

    // 6. Joining & Using Pals
    {
      question: "How do I join Pals?",
      answer:
        "Join the waitlist on the website. Early access opens first for small trusted groups, then communities as systems stabilize.",
    },
    {
      question: "Can I join Pals alone, or do I need a circle?",
      answer:
        "You can join alone, but the real power comes from building or joining a trusted circle.",
    },
    {
      question: "Is there a minimum income or credit score?",
      answer:
        "No. Traditional credit scores are not the main factor. Pals values real-world trust over paperwork.",
    },
    {
      question: "Which countries will Pals support first?",
      answer:
        "Pals will launch region-by-region based on regulations and partnerships. The roadmap will be shared publicly.",
    },

    // 7. Legal & Regulatory
    {
      question: "Is Pals regulated?",
      answer:
        "Pals works with licensed, regulated partners like banks, NBFCs, and payment providers depending on the country.",
    },
    {
      question: "Is Pals a replacement for my bank?",
      answer:
        "No. Pals works alongside your existing financial life — it's a community-first layer, not a substitute.",
    },
    {
      question: "Will my data be safe?",
      answer:
        "Yes. Pals uses encryption, strict data protection, and never sells your data. It’s only used to run and improve the platform.",
    },

    // 8. Community & Culture
    {
      question: "Can strangers join my circle?",
      answer:
        "Not by default. Circles start with people who already trust each other. Verified communities may come later.",
    },
    {
      question: "What if there is conflict inside a circle?",
      answer:
        "Pals provides tools for clear agreements and transparent records. Serious disputes may use escalation paths or mediators depending on the region.",
    },
    {
      question: "Why was Pals created?",
      answer:
        "For people trusted in real life but invisible on paper — those who carry their communities and deserve a financial system that carries them back.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to understand Pals.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200">
            Contact Support →
          </button>
        </div>
      </div>
    </section>
  );
}
