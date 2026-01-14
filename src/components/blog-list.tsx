"use client";

import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { RevealOnScroll } from "@/components/landing";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="space-y-8 md:space-y-12">
      {posts.map((post, index) => (
        <RevealOnScroll
          key={post.slug}
          animation={index % 2 === 0 ? "fade-left" : "fade-right"}
          delay={index * 100}
        >
          <article className="group">
            <Link
              href={`/blog/${post.slug}`}
              className="block p-6 md:p-8 lg:p-10 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="grid grid-cols-12 gap-6 md:gap-8">
                {/* Number indicator */}
                <div className="col-span-12 md:col-span-1">
                  <span className="text-6xl md:text-7xl font-extralight text-foreground/10 group-hover:text-primary/20 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="col-span-12 md:col-span-11 space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" strokeWidth={1.5} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" strokeWidth={1.5} />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground line-clamp-2 max-w-3xl">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-light pt-2 group-hover:gap-4 transition-all">
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </article>
        </RevealOnScroll>
      ))}
    </div>
  );
}
