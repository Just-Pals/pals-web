import BlogCard from "./BlogCard";

export default function BlogList({ posts }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 py-8 sm:py-12 md:py-16">
      {posts.map((post: any) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
