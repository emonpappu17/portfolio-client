"use client"

import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface Blog {
    title: string
    slug: string
    thumbnail: string
    tags: string[]
    author: {
        name: string
    }
    createdAt: string | Date
}

interface BlogCardProps {
    blog: Blog
}

export const BlogCard: FC<BlogCardProps> = ({ blog }) => {
    const initials = blog.author.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
    return (
        <Link
            href={`/blogs/${blog.slug}`}
            aria-label={`Open blog: ${blog.title}`}
            className="group relative block overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10 dark:bg-neutral-900/60 dark:ring-white/10"
        >
            {/* Top media */}
            <div className="relative">
                <div className="relative  aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                    <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        sizes="(min-width: 1024px) 480px, 100vw"
                        priority
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                </div>
                {/* Soft gradient overlay for polish */}
                <div className="pointer-events-none absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/10 via-transparent to-transparent dark:from-black/30" />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-3 p-4">
                <div className="flex items-center gap-3">
                    {/* Author avatar (initials) */}
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-semibold text-white shadow-sm ring-1 ring-black/10 dark:ring-white/10">
                        {/* {blog.} */}
                        {initials}
                        {/* E */}
                    </div>

                    <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">
                            {blog.author.name}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            {/* {formatted} */}
                            {format(new Date(blog.createdAt), "MMM dd, yyyy")}
                        </p>
                    </div>
                </div>

                {/* Title */}
                <h3 className="line-clamp-2 text-base font-semibold tracking-tight text-neutral-900 transition-colors duration-300 dark:text-neutral-100">
                    {blog.title}
                </h3>

                {/* Tags */}
                {blog.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.slice(0, 4).map((tag, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700 transition-colors duration-200 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Subtle bottom accent */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-500/60 via-violet-500/60 to-fuchsia-500/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
    )
}


