import { getAllBlogPosts } from "@/lib/blog";
import BlogList from "@/components/blog-list";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="relative z-10 container mx-auto mt-28 p-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-light md:text-6xl">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Thoughts, insights, and experiences from the QRK team on technology,
          security, and building a better digital future.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            No blog posts yet. Check back soon!
          </p>
        </div>
      ) : (
        <BlogList posts={posts} />
      )}
    </div>
  );
}
