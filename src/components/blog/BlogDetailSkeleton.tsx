import React from "react";

const BlogDetailSkeleton = () => {
    return (
        <article className="mx-auto w-[1000px] px-4 py-10 mt-24 mb-20 animate-pulse">
            {/* Thumbnail */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800" />

            {/* Title */}
            <div className="mt-8 h-8 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />

            {/* Meta info */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                    <div className="h-3 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
                </div>
                <div className="h-3 w-20 rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-3 w-12 rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
                <div className="h-6 w-16 rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-6 w-20 rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-6 w-14 rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>

            {/* Content blocks */}
            <div className="mt-8 space-y-4">
                <div className="h-5 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-5 w-11/12 rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-5 w-10/12 rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-5 w-9/12 rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>

            {/* Updated date */}
            <div className="mt-10 h-3 w-40 rounded bg-neutral-200 dark:bg-neutral-800" />
        </article>
    );
};

export default BlogDetailSkeleton;
