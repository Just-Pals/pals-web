"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease },
});

export default function BlogPageClient({ featured, otherPosts }: any) {
  const [apiStatus, setApiStatus] = useState<"loading" | "ok" | "err">("loading");

  // ── Client-side fetch so the API call is visible in browser Network tab ──
  useEffect(() => {
    fetch("https://api.pals.money/api/blogs?page=1&perPage=10&status=published", {
      cache: "no-store",
    })
      .then((r) => r.json())
      .then((data) => {
        console.groupCollapsed("[PALS] GET /api/blogs");
        console.log("URL  :", "https://api.pals.money/api/blogs?page=1&perPage=10&status=published");
        console.log("Data :", data);
        console.groupEnd();
        setApiStatus("ok");
      })
      .catch((err) => {
        console.warn("[PALS] /api/blogs error:", err);
        setApiStatus("err");
      });
  }, []);

  return (
    <div className="pt-32 lg:pt-40 pb-8">
      {/* ── Dev API badge ── */}
      <AnimatePresence>
        {process.env.NODE_ENV === "development" && apiStatus !== "loading" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-5 left-5 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono bg-gray-900 text-white shadow-lg"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                apiStatus === "ok" ? "bg-teal-400" : "bg-red-400"
              }`}
            />
            api.pals.money/api/blogs — {apiStatus === "ok" ? "200 OK" : "error"}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Page heading ── */}
      <div className="overflow-hidden mb-10 sm:mb-14">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-teal-600 mb-3"
        >
          Journal
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 0.05, ease }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tight text-gray-900 leading-none"
          >
            Articles
          </motion.h1>
        </div>

        <motion.p {...fadeUp(0.25)} className="mt-4 text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
          Finance, rewards, credit &amp; lifestyle insights — curated for the trustworthy.
        </motion.p>
      </div>

      {/* ── Featured post ── */}
      {featured && (
        <motion.div {...fadeUp(0.35)}>
          <Link href={`/blog/${featured.slug}`} className="block group">
            <motion.div
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 bg-white shadow-sm"
              whileHover={{ boxShadow: "0 24px 60px -10px rgba(0,0,0,0.12)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image side */}
                <div className="relative w-full lg:w-[56%] h-[240px] sm:h-[320px] lg:h-[440px] overflow-hidden bg-gray-100 shrink-0">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease }}
                  >
                    <Image
                      src={featured.image}
                      fill
                      alt={featured.title}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 56vw"
                      priority
                      unoptimized
                    />
                  </motion.div>

                  {/* Featured pill */}
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.55, duration: 0.4 }}
                  >
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow">
                      ✦ Featured
                    </span>
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content side */}
                <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12 xl:p-14 flex-1">
                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-[0.22em] uppercase text-teal-600 mb-4 px-3 py-1 bg-teal-50 rounded-full">
                      {featured.category}
                    </span>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black text-gray-900 leading-tight mt-3 group-hover:text-gray-700 transition-colors duration-300">
                      {featured.title}
                    </h2>

                    {featured.summary && (
                      <p className="text-gray-500 text-sm sm:text-base mt-4 leading-relaxed line-clamp-3">
                        {featured.summary}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{featured.date}</span>
                    <motion.span
                      className="flex items-center gap-1.5 text-sm font-bold text-gray-400 group-hover:text-gray-900 transition-colors duration-300"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      Read article <span>→</span>
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
