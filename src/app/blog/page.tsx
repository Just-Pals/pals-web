import BlogNavbar from "@/component/BlogPage/BlogNavbar";
import BlogList from "@/component/BlogPage/BlogList";
import { blogPosts } from "@/component/BlogPage/BlogData";
import Image from "next/image";
import Footer from "@/component/Footer";

export default function BlogPage() {
  const featured = blogPosts[0];

  return (
    <div className="bg-white min-h-screen text-black">
      <BlogNavbar />

      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 text-xs sm:text-sm text-gray-500 flex gap-2">
        <span>PALS</span>
        <span>›</span>
        <span>articles</span>
      </div>

      {/* Title */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">articles</h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
          the journal of finance, rewards, credit performance and lifestyle
          insights — curated for the trustworthy.
        </p>
      </div>

      {/* Featured */}
<div className="px-4 sm:px-6 md:px-8 lg:px-12 mt-8 sm:mt-10 md:mt-12 flex justify-center">
  <div className="bg-white rounded-2xl sm:rounded-3xl shadow border border-black/10 overflow-hidden 
                  flex flex-col md:flex-row w-full sm:w-[95%] md:w-[90%] lg:w-[75%] mx-auto">

    <Image
      src={featured.image}
      width={400}
      height={260}
      alt="Featured Blog"
      className="object-cover w-full md:w-[40%] h-[200px] sm:h-[240px] md:h-[260px] rounded-t-2xl sm:rounded-t-3xl md:rounded-l-3xl md:rounded-t-none"
    />

    <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between w-full md:w-[60%]">
      <div>
        <span className="uppercase text-[10px] sm:text-xs text-gray-500 tracking-wider">
          {featured.category}
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 sm:mt-3">{featured.title}</h2>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">{featured.date}</p>
    </div>
  </div>
</div>


      {/* List */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <BlogList posts={blogPosts.slice(1)} />
      </div>
      <Footer/>
    </div>
  );
}
