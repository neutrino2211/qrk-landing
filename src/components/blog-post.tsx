import type { PropsWithChildren } from "react";
import type { BlogMetadata } from "@/types/blog";

export default async function BlogPost({
  meta,
  children,
}: PropsWithChildren<{ meta: BlogMetadata }>) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Header Section */}
      <header className="mb-16 space-y-6">
        <h1 className="text-5xl font-light tracking-tight md:text-6xl lg:text-7xl leading-tight">
          {meta.title}
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
        <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:gap-6 pt-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground font-medium">BY</span>
            <span className="text-foreground">{meta.author}</span>
          </div>
          <span className="hidden md:inline text-muted-foreground">•</span>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground font-medium">PUBLISHED</span>
            <span className="text-foreground">{meta.publishedAt}</span>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-light prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-xl prose-p:leading-relaxed prose-p:text-foreground/90 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-strong:font-semibold prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border">
        {children}
      </div>
    </article>
  );
}
