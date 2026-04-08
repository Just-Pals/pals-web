import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import { fetchBlogBySlug, fetchBlogById, fetchBlogs } from "@/lib/blog";
import BlogDetailClient from "@/components/BlogPage/BlogDetailClient";
import Link from "next/link";
import Container from "@/components/common/Container";

function isUUID(str: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);
}

export default async function BlogDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Start related posts fetch immediately in parallel with the blog fetch
  const relatedPromise = fetchBlogs(1, 10, "published").catch(() => null);

  let blog = null;
  if (isUUID(id)) {
    blog = await fetchBlogById(id);
  } else {
    blog = await fetchBlogBySlug(id);
    if (!blog) blog = await fetchBlogById(id);
  }

  if (!blog) {
    return (
      <main className="bg-white min-h-screen text-gray-900">
        <Navbar />
        <div className="pt-40">
          <Container maxWidth="2xl">
            <div className="py-24 text-center">
              <h1 className="text-3xl font-black mb-4 text-gray-900">Article not found</h1>
              <p className="text-gray-500 mb-8">This article doesn't exist or has been removed.</p>
              <Link
                href="/blog"
                className="inline-block px-7 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
              >
                ← Back to Articles
              </Link>
            </div>
          </Container>
        </div>
      <Footer variant="pay" showMarquee />
      </main>
    );
  }

  // Await the related posts that were already in-flight
  let relatedPosts: any[] = [];
  try {
    const res = await relatedPromise;
    if (res) {
      relatedPosts = res.data.blogs
        .filter((b) => b.id !== blog!.id)
        .slice(0, 3);
    }
  } catch {
    // silent — related posts are non-critical
  }

  const formattedContent = blog.content.split("\n\n").filter((p) => p.trim().length > 0);
  const category = blog.tags?.length > 0 ? blog.tags[0] : "article";

  return (
    <main className="bg-white min-h-screen text-gray-900">
      <Navbar />
      <div className="pt-20 sm:pt-24 md:pt-28">
        <BlogDetailClient
          blog={blog}
          formattedContent={formattedContent}
          category={category}
          relatedPosts={relatedPosts}
        />
      </div>
     <Footer variant="pay" showMarquee />
    </main>
  );
}
