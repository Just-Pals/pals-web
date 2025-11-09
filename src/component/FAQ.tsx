"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Pals?",
      answer: "Pals is a community platform designed to help you connect with like-minded people, build meaningful relationships, and grow together. We provide a safe, welcoming space for authentic conversations and genuine connections.",
    },
    {
      question: "Is Pals free to use?",
      answer: "Yes! Pals offers a free tier with access to all core features. We also offer premium plans with additional features like advanced customization, priority support, and exclusive community events.",
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply click the 'Get Started' button, create your account with your email, set up your profile, and start exploring communities that match your interests. The whole process takes less than 5 minutes.",
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely. We take privacy and security very seriously. Your data is encrypted, we never sell your information to third parties, and you have complete control over your privacy settings. We're GDPR compliant and follow industry best practices.",
    },
    {
      question: "Can I use Pals on mobile?",
      answer: "Yes! Pals is fully responsive and works great on all devices - phones, tablets, and desktops. We're also working on native mobile apps for iOS and Android, coming soon!",
    },
    {
      question: "How do I report inappropriate content?",
      answer: "We have a zero-tolerance policy for harassment and inappropriate content. Every post has a report button, and our moderation team reviews reports within 24 hours. You can also block users and customize your content filters.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
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

        {/* Contact CTA */}
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