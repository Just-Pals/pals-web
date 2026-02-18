"use client";

import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

export default function BlogList({ posts }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 py-8 sm:py-12 md:py-16">
      {posts.map((post: any, index: number) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}
