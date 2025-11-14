import { blogPosts } from "@/component/BlogPage/BlogData";
import BlogNavbar from "@/component/BlogPage/BlogNavbar";
import Image from "next/image";

export default async function BlogDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="bg-white text-black min-h-screen p-12">
        <h1 className="text-3xl font-semibold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen">
      <BlogNavbar />

      <div className="px-12 py-12 max-w-4xl mx-auto">
        <p className="uppercase text-xs text-gray-500 tracking-widest">
          {post.category}
        </p>

        <h1 className="text-5xl font-semibold mt-3">{post.title}</h1>
        <p className="text-sm text-gray-500 mt-2">{post.date}</p>

        <Image
          src={post.image}
          width={1200}
          height={600}
          alt={post.title}
          className="rounded-2xl mt-8"
        />

        <div className="mt-10 text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            sollicitudin elit. Aenean vitae pharetra augue.
          </p>

          <p>
            Suspendisse potenti. Ut placerat velit sit amet dolor eleifend,
            vitae feugiat mi posuere. Donec non ullamcorper lorem.
          </p>

          <p>
            Mauris commodo justo nec arcu consectetur, ac faucibus nisl
            dignissim. Phasellus finibus lorem sit amet sem commodo mattis.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Related Links</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Financial planning insights</li>
            <li>How to manage your credit performance</li>
            <li>Understanding risk-free financial options</li>
            <li>Maximizing rewards with trust-based systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}