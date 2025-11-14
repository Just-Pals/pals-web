import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: any) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="flex gap-4 group cursor-pointer w-[90%] md:w-[80%] mx-auto"
    >
      {/* Image */}
      <Image
        src={post.image}
        width={180}
        height={120}
        alt={post.title}
        className="rounded-lg object-cover shadow-sm group-hover:opacity-90 transition"
      />

      {/* Text */}
      <div className="flex flex-col justify-between py-1">
        <div>
          <p className="uppercase text-[10px] tracking-widest text-gray-500 group-hover:text-black">
            {post.category}
          </p>

          <h3 className="text-lg font-semibold leading-tight mt-1 group-hover:underline">
            {post.title}
          </h3>
        </div>

        <p className="text-xs text-gray-500 mt-2">{post.date}</p>
      </div>
    </Link>
  );
}
