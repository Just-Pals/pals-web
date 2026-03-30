"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Container from "@/components/common/Container";
import { formatBlogDate, getBlogImageUrl } from "@/lib/blog";

const ease = [0.22, 1, 0.36, 1] as const;

function readTime(content: string) {
  return Math.max(1, Math.ceil((content || "").trim().split(/\s+/).length / 200));
}

export default function BlogDetailClient({ blog, formattedContent, category, relatedPosts }: any) {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const coverUrl = getBlogImageUrl(blog.coverMediaId, blog.coverImageUrl);
  const hasCover = blog.coverMediaId || blog.coverImageUrl;
  const mins = readTime(blog.content);

  // Reading progress + scroll-to-top
  useEffect(() => {
    const onScroll = () => {
      const el = bodyRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -top);
      setProgress(Math.min(100, total > 0 ? (scrolled / total) * 100 : 100));
      setShowTop(scrolled > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Client-side fetch so the API call is visible in browser Network tab ──
  useEffect(() => {
    const url = `https://api.pals.money/api/blogs/slug/${blog.slug}`;
    fetch(url, { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        console.groupCollapsed(`[PALS] GET /api/blogs/slug/${blog.slug}`);
        console.log("URL  :", url);
        console.log("Data :", data);
        console.groupEnd();
      })
      .catch((err) => console.warn("[PALS] blog detail fetch error:", err));
  }, [blog.slug]);

  return (
    <>
      {/* ── Reading progress bar ── */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-gray-100">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-400 to-teal-600 origin-left"
          style={{ scaleX: progress / 100 }}
          transition={{ duration: 0.08 }}
        />
      </div>

      <div ref={bodyRef}>
        {/* ── Hero ── */}
        <section className="bg-white pt-8 sm:pt-12 pb-0">
          <Container maxWidth="4xl">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-7 text-xs text-gray-400 flex gap-2 items-center flex-wrap"
            >
              <Link href="/" className="hover:text-gray-700 transition-colors">PALS</Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-gray-700 transition-colors">Articles</Link>
              <span>›</span>
              <span className="text-gray-600 truncate max-w-[220px]">{blog.title}</span>
            </motion.nav>

            {/* Category + read time */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.07, ease }}
              className="flex items-center gap-3 mb-4 flex-wrap"
            >
              <span className="text-[10px] font-black tracking-[0.22em] uppercase text-teal-600 px-3 py-1 bg-teal-50 rounded-full">
                {category}
              </span>
              <span className="text-xs text-gray-400">{mins} min read</span>
            </motion.div>

            {/* Title */}
            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black leading-tight text-gray-900"
              >
                {blog.title}
              </motion.h1>
            </div>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28, ease }}
              className="flex items-center gap-3 text-xs text-gray-400 mb-10 flex-wrap"
            >
              <span>{formatBlogDate(blog.publishedAt)}</span>
              {blog.tags?.map((tag: string, i: number) => (
                <span key={i} className="px-2.5 py-1 bg-gray-100 rounded-full text-[10px] text-gray-500">
                  #{tag}
                </span>
              ))}
            </motion.div>
          </Container>

          {/* Cover image — full bleed within 4xl */}
          {hasCover && (
            <Container maxWidth="4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.32, ease }}
                className="relative w-full h-[260px] sm:h-[360px] md:h-[460px] rounded-2xl overflow-hidden mb-10 shadow-md bg-gray-100"
              >
                <Image
                  src={coverUrl}
                  fill
                  alt={blog.title}
                  className="object-cover"
                  priority
                  sizes="(max-width: 896px) 100vw, 896px"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
              </motion.div>
            </Container>
          )}
        </section>

        {/* ── Article body ── */}
        <section className="bg-white pb-16">
          <Container maxWidth="4xl">
            {/* Pull-quote summary */}
            {blog.summary && (
              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.4, ease }}
                className="border-l-[3px] border-teal-500 pl-5 mb-10"
              >
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed italic font-medium">
                  {blog.summary}
                </p>
              </motion.blockquote>
            )}

            {/* Paragraphs — staggered fade */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48, ease }}
              className="space-y-6"
            >
              {formattedContent.map((para: string, i: number) => (
                <p key={i} className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {para}
                </p>
              ))}
            </motion.article>

            {/* Tags */}
            {blog.tags?.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-2"
              >
                {blog.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-600 transition-colors cursor-default">
                    #{tag}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Back link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="mt-10 pt-8 border-t border-gray-100"
            >
              <Link href="/blog">
                <motion.span
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors font-semibold cursor-pointer"
                >
                  ← Back to Articles
                </motion.span>
              </Link>
            </motion.div>
          </Container>
        </section>

        {/* ── Related posts ── */}
        {relatedPosts?.length > 0 && (
          <section className="bg-gray-50 border-t border-gray-100 py-14 sm:py-16">
            <Container maxWidth="7xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="flex items-center gap-4 mb-8"
              >
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 shrink-0">Keep Reading</h2>
                <div className="flex-1 h-px bg-gray-200" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post: any, i: number) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.09, ease }}
                  >
                    <Link href={`/blog/${post.slug}`} className="block group h-full">
                      <motion.div
                        className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full flex flex-col"
                        whileHover={{ y: -6, boxShadow: "0 16px 40px -8px rgba(0,0,0,0.09)" }}
                        transition={{ duration: 0.3, ease }}
                      >
                        {(post.coverMediaId || post.coverImageUrl) && (
                          <div className="relative h-[160px] overflow-hidden bg-gray-100 shrink-0">
                            <motion.div
                              className="w-full h-full"
                              whileHover={{ scale: 1.06 }}
                              transition={{ duration: 0.6, ease }}
                            >
                              <Image
                                src={getBlogImageUrl(post.coverMediaId, post.coverImageUrl)}
                                fill
                                alt={post.title}
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, 33vw"
                                unoptimized
                              />
                            </motion.div>
                          </div>
                        )}
                        <div className="p-5 flex-1 flex flex-col">
                          <span className="self-start text-[9px] font-black tracking-widest uppercase text-teal-600 mb-2 px-2 py-0.5 bg-teal-50 rounded-full">
                            {post.tags?.[0] || "article"}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2 flex-1">
                            {post.title}
                          </h3>
                          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                            <span className="text-[10px] text-gray-400">{formatBlogDate(post.publishedAt)}</span>
                            <motion.span
                              className="text-gray-300 group-hover:text-teal-500 transition-colors font-black"
                              whileHover={{ x: 3 }}
                            >
                              →
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* ── CTA ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 py-14 sm:py-16 text-center"
        >
          <Container maxWidth="2xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1, ease }}
              className="w-12 h-12 bg-teal-500 rounded-2xl mx-auto mb-5 flex items-center justify-center text-white text-xl font-black"
            >
              P
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="text-2xl sm:text-3xl font-black text-white mb-3"
            >
              Enjoyed this article?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-gray-400 text-sm sm:text-base mb-7 leading-relaxed"
            >
              Join PALS for more insights on finance, rewards &amp; lifestyle.
              <br className="hidden sm:block" /> Faith-powered. 0% interest. Gold-backed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link href="/register">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-3.5 rounded-full transition-colors text-sm cursor-pointer"
                >
                  Join PALS →
                </motion.span>
              </Link>
              <Link href="/blog">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 transition-colors text-sm cursor-pointer"
                >
                  More articles
                </motion.span>
              </Link>
            </motion.div>
          </Container>
        </motion.section>
      </div>

      {/* ── Scroll to top ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 w-11 h-11 bg-gray-900 hover:bg-gray-700 text-white rounded-full shadow-xl flex items-center justify-center z-50 transition-colors text-base font-bold"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
