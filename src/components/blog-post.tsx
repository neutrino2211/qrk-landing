import type { PropsWithChildren } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import type { BlogMetadata } from "@/types/blog";
import { RevealOnScroll, FloatingShapes } from "@/components/landing";

export default async function BlogPost({
  meta,
  children,
}: PropsWithChildren<{ meta: BlogMetadata }>) {
  return (
    <article>
      {/* Hero Header */}
      <header className="relative min-h-[50vh] flex items-end overflow-hidden pt-20 pb-16 md:pb-24">
        <FloatingShapes />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <RevealOnScroll animation="fade-up">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[1.1] max-w-4xl">
              {meta.title}
            </h1>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={200}>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="w-4 h-4" strokeWidth={1.5} />
                <span>{meta.author}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" strokeWidth={1.5} />
                <span>
                  {new Date(meta.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={300}>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/20 rounded-full mt-8" />
          </RevealOnScroll>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 pb-24">
        <RevealOnScroll animation="fade-up" delay={400}>
          <div className="max-w-3xl mx-auto">
            <div className="blog-content prose prose-lg dark:prose-invert max-w-none prose-headings:font-light prose-headings:tracking-tight prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mb-6 prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-lg prose-p:leading-[1.8] prose-p:text-foreground/80 prose-p:mb-6 prose-pre:bg-muted prose-pre:border prose-pre:border-border/40">
              {children}
            </div>
          </div>
        </RevealOnScroll>

        {/* Footer */}
        <RevealOnScroll animation="fade-up" className="mt-16 md:mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </article>
  );
}
