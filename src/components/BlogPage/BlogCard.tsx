import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: any) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="flex gap-3 sm:gap-4 group cursor-pointer w-full mx-auto"
    >
      {/* Image */}
      <Image
        src={post.image}
        width={180}
        height={120}
        alt={post.title}
        className="rounded-lg object-cover shadow-sm group-hover:opacity-90 transition w-[100px] sm:w-[140px] md:w-[180px] h-[70px] sm:h-[100px] md:h-[120px] shrink-0"
      />

      {/* Text */}
      <div className="flex flex-col justify-between py-1 min-w-0">
        <div>
          <p className="uppercase text-[9px] sm:text-[10px] tracking-widest text-gray-500 group-hover:text-black">
            {post.category}
          </p>

          <h3 className="text-sm sm:text-base md:text-lg font-semibold leading-tight mt-1 group-hover:underline line-clamp-2">
            {post.title}
          </h3>
        </div>

        <p className="text-[10px] sm:text-xs text-gray-500 mt-2">{post.date}</p>
      </div>
    </Link>
  );
}
