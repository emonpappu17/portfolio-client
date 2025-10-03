import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

interface Author {
    name: string;
}

export interface Blog {
    id: string;
    title: string;
    content: string;
    thumbnail: string;
    slug: string;
    authorId: string;
    tags: string[];
    views: number;
    createdAt: string;
    updatedAt: string;
    author: Author;
}

interface BlogDetailProps {
    blog: Blog;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
    const cleanContent = DOMPurify.sanitize(blog.content);

    const initials = blog.author.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <article className="mx-auto max-w-4xl px-4 my-24 sm:px-6 lg:px-8">
            {/* Thumbnail */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-md">
                <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 800px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Title */}
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                {blog.title}
            </h1>

            {/* Meta info */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-semibold text-white shadow-sm">
                        {initials}
                    </div>
                    <span className="font-medium">{blog.author.name}</span>
                </div>
                <span>•</span>
                <time dateTime={blog.createdAt}>
                    {format(new Date(blog.createdAt), "MMM dd, yyyy")}
                </time>
                <span>•</span>
                <span>
                    {blog.views} view{blog.views !== 1 && "s"}
                </span>
            </div>

            {/* Tags */}
            {blog.tags?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                    {blog.tags.map((tag,i) => (
                        <span
                            key={i}
                            className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Content */}
            <div
                className="prose prose-neutral mt-8 max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-indigo-600 dark:prose-a:text-indigo-400"
                dangerouslySetInnerHTML={{ __html: cleanContent }}
            />

            {/* Updated date */}
            <p className="mt-10 text-xs text-neutral-500 dark:text-neutral-400">
                Last updated on {format(new Date(blog.updatedAt), "MMM dd, yyyy")}
            </p>
        </article>
    );
};

export default BlogDetail;
