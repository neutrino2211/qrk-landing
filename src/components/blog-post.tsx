import type { PropsWithChildren } from "react";
import type { BlogMetadata } from "@/types/blog";
import { getHijriDate } from "@/lib/utils";

export default async function BlogPost({meta, children}: PropsWithChildren<{meta: BlogMetadata}>) {
    const date = await getHijriDate(new Date(meta.publishedAt))
    return (
        <div>
            <h1 className="text-6xl font-light pb-8">{meta.title}</h1>
            <div className="flex justify-between items-center my-4 dark:text-[#444] text-[#aaa]">
                <p className="font-bold">FROM {" "}<span className="text-foreground font-light">{meta.author}</span></p>
                <p className="font-bold">DATE {" "} <span className="text-foreground font-light">{date.date}</span></p>
            </div>
            <hr />
            <div className="pt-4 text-xl">
                {children}
            </div>
        </div>
    )
}