import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="space-y-12">
      {posts.map((post) => (
        <article key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8">
          <Link href={`/blog/${post.slug}`} className="block group">
            <h2 className="text-3xl font-light mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h2>
            <div className="flex items-center justify-between text-[#aaa] dark:text-[#444] mb-4">
              <p className="font-bold">
                BY <span className="text-foreground font-light">{post.author}</span>
              </p>
              <p className="font-bold">
                <span className="text-foreground font-light">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </p>
            </div>
            <div className="text-lg text-gray-600 dark:text-gray-300 line-clamp-3">
              {post.excerpt}
            </div>
            <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
              Read more →
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
