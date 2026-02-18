"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCard({ post, index }: any) {
  const blogSlug = post.slug || post.id;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${blogSlug}`}
        className="block group"
      >
        <motion.div
          className="bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-800 transition-all duration-300"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6">
            {/* Image */}
            <div className="relative w-full sm:w-[140px] md:w-[180px] h-[180px] sm:h-[120px] md:h-[140px] shrink-0 rounded-lg overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={post.image}
                  fill
                  alt={post.title}
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between flex-1 min-w-0">
              <div>
                <motion.p
                  className="uppercase text-[9px] sm:text-[10px] tracking-widest text-gray-400 font-medium mb-2"
                  whileHover={{ color: "#fff" }}
                >
                  {post.category}
                </motion.p>

                <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight mb-2 text-white group-hover:text-gray-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {post.summary && (
                  <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                    {post.summary}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[10px] sm:text-xs text-gray-400">{post.date}</p>
                <motion.span
                  className="text-gray-500 group-hover:text-white transition-colors"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
