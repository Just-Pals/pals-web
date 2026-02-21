import Navbar from "@/components/Navbar";
import BlogList from "@/components/BlogPage/BlogList";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import { fetchBlogs, formatBlogDate, getBlogImageUrl } from "@/lib/blog";
import BlogPageClient from "@/components/BlogPage/BlogPageClient";

export default async function BlogPage() {
  let featured = null;
  let otherPosts: any[] = [];

  try {
    const response = await fetchBlogs(1, 10, "published");
    const blogs = response.data.blogs;

    if (blogs.length > 0) {
      // Map API blog to component format
      const mappedBlogs = blogs.map((blog) => ({
        id: blog.id,
        slug: blog.slug,
        title: blog.title,
        category: blog.tags && blog.tags.length > 0 ? blog.tags[0] : "article",
        date: formatBlogDate(blog.publishedAt),
        image: getBlogImageUrl(blog.coverMediaId),
        summary: blog.summary,
        content: blog.content,
      }));

      featured = mappedBlogs[0];
      otherPosts = mappedBlogs.slice(1);
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    // Fallback to empty state
  }

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <Container maxWidth="7xl" className="relative z-10">
          <BlogPageClient featured={featured} otherPosts={otherPosts} />
        </Container>
      </section>

      {/* Blog List Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-black">
        <Container maxWidth="7xl">
          {otherPosts.length > 0 ? (
            <BlogList posts={otherPosts} />
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-gray-400">No articles available at the moment.</p>
            </div>
          )}
        </Container>
      </section>

      <Footer />
    </main>
  );
}
