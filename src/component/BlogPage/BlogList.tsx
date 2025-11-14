import BlogCard from "./BlogCard";

export default function BlogList({ posts }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-12 py-16">
      {posts.map((post: any) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
