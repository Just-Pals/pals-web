import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import { fetchBlogBySlug, fetchBlogById } from "@/lib/blog";
import BlogDetailClient from "@/components/BlogPage/BlogDetailClient";
import Link from "next/link";
import Container from "@/components/common/Container";

// Helper to check if string is UUID format
function isUUID(str: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}

export default async function BlogDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Try to fetch by slug first (more common), then by ID if it looks like a UUID
  let blog = null;
  
  if (isUUID(id)) {
    // If it's a UUID, fetch by ID
    blog = await fetchBlogById(id);
  } else {
    // Otherwise, try fetching by slug
    blog = await fetchBlogBySlug(id);
    
    // If slug fetch fails and it might be an ID, try ID as fallback
    if (!blog && id.length > 0) {
      blog = await fetchBlogById(id);
    }
  }

  if (!blog) {
    return (
      <main className="bg-black min-h-screen text-white">
        <Navbar />
        <div className="pt-24">
          <Container maxWidth="2xl">
            <div className="py-24 text-center">
              <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-white">Blog not found</h1>
              <p className="text-gray-400 mb-8">The article you're looking for doesn't exist or has been removed.</p>
              <Link 
                href="/blog" 
                className="inline-block px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
              >
                Back to Articles
              </Link>
            </div>
          </Container>
        </div>
        <Footer />
      </main>
    );
  }

  // Format content - handle newlines and paragraphs
  const formattedContent = blog.content.split('\n\n').filter(para => para.trim().length > 0);
  const category = blog.tags && blog.tags.length > 0 ? blog.tags[0] : "article";

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="pt-20 sm:pt-24 md:pt-28">
        <BlogDetailClient blog={blog} formattedContent={formattedContent} category={category} />
      </div>
      <Footer />
    </main>
  );
}