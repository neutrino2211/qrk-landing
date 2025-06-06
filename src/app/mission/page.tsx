import MissionStatement, { metadata } from "@/content/mission.mdx"
import BlogPost from "@/components/blog-post";
import type { BlogMetadata } from "@/types/blog";

export default function Mission() {
  return (
    <div className="container mx-auto p-8 relative z-10 mt-28">
      <BlogPost meta={metadata as BlogMetadata}>
        <MissionStatement/>
      </BlogPost>
    </div>
  )
}