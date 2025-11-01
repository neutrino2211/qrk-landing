import { notFound } from "next/navigation";
import { getBlogPostSlugs, getBlogPostMetadata } from "@/lib/blog";
import BlogPost from "@/components/blog-post";
import type { BlogModule } from "@/types/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const metadata = await getBlogPostMetadata(slug);

  if (!metadata) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: metadata.title,
    description: `By ${metadata.author} on ${new Date(
      metadata.publishedAt,
    ).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const metadata = await getBlogPostMetadata(slug);

  if (!metadata) {
    notFound();
  }

  try {
    // Dynamic import of the MDX file with proper typing
    const postModule = (await import(
      `@/content/blog/${slug}.mdx`
    )) as BlogModule;
    const Content = postModule.default;

    if (!Content) {
      notFound();
    }

    return (
      <div className="relative z-10 container mx-auto mt-28 p-8">
        <BlogPost meta={metadata}>
          <Content />
        </BlogPost>
      </div>
    );
  } catch {
    notFound();
  }
}
