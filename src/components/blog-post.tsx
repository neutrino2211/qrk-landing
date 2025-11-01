import type { PropsWithChildren } from "react";
import type { BlogMetadata } from "@/types/blog";
import { getHijriDate } from "@/lib/utils";

export default async function BlogPost({
  meta,
  children,
}: PropsWithChildren<{ meta: BlogMetadata }>) {
  return (
    <div>
      <h1 className="pb-8 text-4xl font-light md:text-6xl">{meta.title}</h1>
      <div className="my-4 flex items-center justify-between text-[#aaa] dark:text-[#444]">
        <p className="font-bold">
          FROM <span className="text-foreground font-light">{meta.author}</span>
        </p>
        <p className="font-bold">
          DATE{" "}
          <span className="text-foreground font-light">{meta.publishedAt}</span>
        </p>
      </div>
      <hr />
      <div className="pt-4 text-xl">{children}</div>
    </div>
  );
}
