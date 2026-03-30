"use client";

import BlogCard from "./BlogCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BlogList({ posts }: any) {
  const categories: string[] = useMemo(() => {
    const cats = posts.map((p: any) => p.category as string);
    return ["All", ...Array.from(new Set(cats))] as string[];
  }, [posts]);

  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((p: any) => p.category === active)),
    [active, posts]
  );

  return (
    <div className="pb-6">
      {/* ── Section header ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-4 mb-7"
      >
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 shrink-0">More Articles</h2>
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-gray-400 shrink-0">{filtered.length} article{filtered.length !== 1 ? "s" : ""}</span>
      </motion.div>

      {/* ── Category filter pills ── */}
      {categories.length > 2 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08, ease }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-250 border ${
                active === cat
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* ── Grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.length > 0 ? (
            filtered.map((post: any, index: number) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))
          ) : (
            <div className="col-span-3 py-12 text-center text-gray-400 text-sm">
              No articles in this category yet.
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
