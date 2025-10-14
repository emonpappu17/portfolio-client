"use client";

import { Badge } from "@/components/ui/badge";
import { IBlog } from "@/types";
import { format } from "date-fns";
import { Eye } from "lucide-react";
import Image from "next/image";

const BlogDetail = ({ blog }: { blog: IBlog }) => {
    const initials = blog.author?.name
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const safeDate = (dateString?: string) => {
        try {
            return dateString ? format(new Date(dateString), "MMM dd, yyyy") : "";
        } catch {
            return "";
        }
    };

    return (
        <article className="max-w-4xl mx-auto px-5 py-26">
            {/* Hero Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-md">
                <Image
                    src={blog.thumbnail}
                    alt={blog.title || "Blog thumbnail"}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 80vw,
                 1200px"
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
            </div>

            {/* Title */}
            <h1 className="mt-8 text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
                {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground border-b pb-6">
                <div className="flex items-center gap-3">
                    {/* Author Avatar */}
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-semibold text-white shadow-sm">
                        {initials}
                    </div>
                    <div>
                        <p className="font-medium text-foreground">{blog.author?.name}</p>
                        <p>{safeDate(blog.createdAt)}</p>
                    </div>
                </div>

                {/* Views + Tags */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1 text-xs">
                        <Eye className="h-4 w-4" /> {blog.views} views
                    </span>
                    {blog.tags?.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                            #{tag}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div
                className="prose prose-neutral dark:prose-invert max-w-none mt-8"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Updated Date */}
            <div className="mt-12 text-xs text-muted-foreground text-center">
                Last updated: {safeDate(blog.updatedAt)}
            </div>
        </article>
    );
};

export default BlogDetail;


