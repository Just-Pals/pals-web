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
      <div className="px-12 py-8 text-sm text-gray-500 flex gap-2">
        <span>PALS</span>
        <span>›</span>
        <span>articles</span>
      </div>

      {/* Title */}
      <div className="px-12">
        <h1 className="text-6xl font-semibold">articles</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          the journal of finance, rewards, credit performance and lifestyle
          insights — curated for the trustworthy.
        </p>
      </div>

      {/* Featured */}
<div className="px-12 mt-12 flex justify-center">
  <div className="bg-white rounded-3xl shadow border border-black/10 overflow-hidden 
                  flex flex-col md:flex-row w-[90%] md:w-[75%] mx-auto">

    <Image
      src={featured.image}
      width={400}
      height={260}
      alt="Featured Blog"
      className="object-cover w-full md:w-[40%] h-[260px] rounded-l-3xl"
    />

    <div className="p-10 flex flex-col justify-between w-full md:w-[60%]">
      <div>
        <span className="uppercase text-xs text-gray-500 tracking-wider">
          {featured.category}
        </span>
        <h2 className="text-3xl font-semibold mt-3">{featured.title}</h2>
      </div>

      <p className="text-sm text-gray-500 mt-4">{featured.date}</p>
    </div>
  </div>
</div>


      {/* List */}
      <BlogList posts={blogPosts.slice(1)} />
      <Footer/>
    </div>
  );
}
