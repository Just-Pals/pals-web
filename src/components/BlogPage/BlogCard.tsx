"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function readTime(content: string) {
  const words = (content || "").trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function BlogCard({ post, index }: any) {
  const slug = post.slug || post.id;
  const mins = readTime(post.content || post.summary || "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease }}
      className="h-full"
    >
      <Link href={`/blog/${slug}`} className="block group h-full">
        <motion.article
          className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full flex flex-col"
          whileHover={{ y: -7, boxShadow: "0 20px 48px -8px rgba(0,0,0,0.10)" }}
          transition={{ duration: 0.35, ease }}
        >
          {/* Image */}
          <div className="relative w-full h-[200px] sm:h-[210px] overflow-hidden bg-gray-100 shrink-0">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.65, ease }}
            >
              <Image
                src={post.image}
                fill
                alt={post.title}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
              />
            </motion.div>
            {/* Read time badge */}
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[9px] font-semibold px-2 py-1 rounded-full">
              {mins} min read
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5 sm:p-6">
            <span className="self-start text-[9px] font-black tracking-[0.22em] uppercase text-teal-600 mb-3 px-2.5 py-1 bg-teal-50 rounded-full">
              {post.category}
            </span>

            <h3 className="text-base sm:text-[17px] font-bold leading-snug text-black group-hover:text-gray-600 transition-colors duration-300 line-clamp-2 flex-1">
              {post.title}
            </h3>

            {post.summary && (
              <p className="text-xs sm:text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                {post.summary}
              </p>
            )}

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
              <span className="text-[10px] text-gray-400">{post.date}</span>
              <motion.span
                className="text-gray-300 group-hover:text-teal-500 text-base font-black transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
              >
                →
              </motion.span>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
