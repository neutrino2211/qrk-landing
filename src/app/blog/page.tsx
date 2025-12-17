import { getAllBlogPosts } from "@/lib/blog";
import BlogList from "@/components/blog-list";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="relative z-10 container mx-auto mt-28 px-4 md:px-8 pb-16">
      <div className="mb-16 space-y-6">
        <div className="space-y-4">
          <h1 className="text-5xl font-light tracking-tight md:text-7xl lg:text-8xl">
            Blog
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Thoughts, insights, and experiences from the QRK team on technology,
          security, and building a better digital future.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-2xl font-light text-muted-foreground">
            No blog posts yet. Check back soon!
          </p>
        </div>
      ) : (
        <BlogList posts={posts} />
      )}
    </div>
  );
}
