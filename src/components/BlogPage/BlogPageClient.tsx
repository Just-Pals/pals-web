"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlogPageClient({ featured, otherPosts }: any) {
  return (
    <>
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-12"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Articles
        </motion.h1>
        <motion.p
          className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The journal of finance, rewards, credit performance and lifestyle
          insights — curated for the trustworthy.
        </motion.p>
      </motion.div>

      {/* Featured Blog */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href={`/blog/${featured.slug}`} className="block group">
            <motion.div
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col md:flex-row w-full">
                <div className="relative w-full md:w-[40%] h-[200px] sm:h-[240px] md:h-[300px] lg:h-[360px] overflow-hidden bg-gray-100">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={featured.image}
                      fill
                      alt={featured.title}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between w-full md:w-[60%] bg-white">
                  <div>
                    <motion.span
                      className="inline-block uppercase text-[10px] sm:text-xs text-gray-500 tracking-wider font-medium mb-3 px-3 py-1 bg-gray-100 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {featured.category}
                    </motion.span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-3 sm:mt-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                      {featured.title}
                    </h2>
                    {featured.summary && (
                      <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 line-clamp-3">
                        {featured.summary}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <p className="text-xs sm:text-sm text-gray-500">{featured.date}</p>
                    <motion.span
                      className="text-gray-400 group-hover:text-gray-900 transition-colors text-xl"
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
      )}
    </>
  );
}

