"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";
import { formatBlogDate, getBlogImageUrl } from "@/lib/blog";

export default function BlogDetailClient({ blog, formattedContent, category }: any) {
  const coverImageUrl = getBlogImageUrl(blog.coverMediaId, blog.coverImageUrl);
  const hasCover = blog.coverMediaId || blog.coverImageUrl;

  return (
    <section className="py-8 sm:py-12 md:py-16 relative bg-white">
      <Container maxWidth="4xl" className="relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8 text-xs sm:text-sm text-gray-500 flex gap-2 items-center flex-wrap"
        >
          <Link href="/" className="hover:text-gray-900 transition-colors">PALS</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">Articles</Link>
          <span>›</span>
          <span className="text-gray-700 truncate max-w-[200px]">{blog.title}</span>
        </motion.div>

        {/* Category */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="uppercase text-[10px] sm:text-xs text-gray-500 tracking-widest font-medium mb-3 inline-block px-3 py-1 bg-gray-100 rounded-full"
        >
          {category}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900"
        >
          {blog.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 mb-8 sm:mb-10 flex-wrap"
        >
          <span>{formatBlogDate(blog.publishedAt)}</span>
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {blog.tags.map((tag: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="px-3 py-1 bg-gray-100 rounded-full text-[10px] sm:text-xs text-gray-700"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Cover Image */}
        {hasCover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-10 md:mb-12 shadow-lg border border-gray-100 bg-gray-50"
          >
            <Image
              src={coverImageUrl}
              fill
              alt={blog.title}
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
          </motion.div>
        )}

        {/* Summary */}
        {blog.summary && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-50 border-l-4 border-gray-900 p-4 sm:p-6 mb-8 sm:mb-10 rounded-r-lg shadow-sm"
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
              {blog.summary}
            </p>
          </motion.div>
        )}

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
        >
          <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed space-y-4 sm:space-y-6">
            {formattedContent.map((paragraph: string, index: number) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="whitespace-pre-line"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.article>

        {/* Back to Articles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200"
        >
          <Link href="/blog">
            <motion.div
              className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors group"
              whileHover={{ x: -4 }}
            >
              <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
              <span>Back to Articles</span>
            </motion.div>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

