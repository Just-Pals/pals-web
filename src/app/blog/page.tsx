import Navbar from "@/components/Navbar";
import BlogList from "@/components/BlogPage/BlogList";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import { fetchBlogs, formatBlogDate, getBlogImageUrl } from "@/lib/blog";
import BlogPageClient from "@/components/BlogPage/BlogPageClient";
import BlogCTA from "@/components/BlogPage/BlogCTA";

export default async function BlogPage() {
  let featured = null;
  let otherPosts: any[] = [];

  try {
    const response = await fetchBlogs(1, 12, "published");
    const blogs = response.data.blogs;

    if (blogs.length > 0) {
      const mappedBlogs = blogs.map((blog) => ({
        id: blog.id,
        slug: blog.slug,
        title: blog.title,
        category: blog.tags && blog.tags.length > 0 ? blog.tags[0] : "article",
        date: formatBlogDate(blog.publishedAt),
        image: getBlogImageUrl(blog.coverMediaId, blog.coverImageUrl),
        summary: blog.summary,
        content: blog.content,
      }));

      featured = mappedBlogs[0];
      otherPosts = mappedBlogs.slice(1);
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <main className="bg-white min-h-screen text-gray-900">
      <Navbar />

      <Container maxWidth="7xl">
        <BlogPageClient featured={featured} otherPosts={otherPosts} />

        {otherPosts.length > 0 ? (
          <div className="pb-16 sm:pb-20">
            <BlogList posts={otherPosts} />
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-base text-gray-400">No more articles yet — check back soon.</p>
          </div>
        )}
      </Container>

      <BlogCTA />
      <Footer />
    </main>
  );
}
