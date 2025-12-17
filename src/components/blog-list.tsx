import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="space-y-16">
      {posts.map((post) => (
        <article key={post.slug} className="group">
          <Link href={`/blog/${post.slug}`} className="block space-y-4">
            <h2 className="text-4xl font-light tracking-tight transition-colors group-hover:text-primary md:text-5xl">
              {post.title}
            </h2>

            <div className="flex flex-col gap-2 text-sm md:flex-row md:items-center md:gap-6">
              <p className="text-muted-foreground">
                By <span className="text-foreground">{post.author}</span>
              </p>
              <span className="hidden md:inline text-muted-foreground">•</span>
              <p className="text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            <p className="text-lg leading-relaxed text-foreground/80 line-clamp-3 max-w-3xl">
              {post.excerpt}
            </p>

            <div className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all pt-2">
              Read more
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>

          <div className="mt-8 h-px bg-gradient-to-r from-border via-border to-transparent" />
        </article>
      ))}
    </div>
  );
}
