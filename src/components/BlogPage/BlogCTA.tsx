"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BlogCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease }}
      className="bg-gray-900 py-16 sm:py-20"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="w-12 h-12 bg-teal-500 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-xl font-black"
        >
          P
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.18, ease }}
          className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 leading-tight"
        >
          Never miss an article
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.26, ease }}
          className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed"
        >
          Join PALS and get finance, rewards &amp; lifestyle insights delivered to you.
          <br className="hidden sm:block" /> Faith-powered. 0% interest. Gold-backed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.34, ease }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link href="/register">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-3.5 rounded-full transition-colors duration-300 text-sm cursor-pointer"
            >
              Join PALS →
            </motion.span>
          </Link>
          <Link href="/blog">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 text-sm cursor-pointer border border-white/20"
            >
              Browse all articles
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
