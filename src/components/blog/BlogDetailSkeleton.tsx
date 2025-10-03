import React from "react";
import { Skeleton } from "../ui/skeleton";

const BlogDetailSkeleton = () => {
    return (
        <article className="mx-auto max-w-4xl md:w-[1000px] sm:w-[500px] px-4 my-24 sm:px-6 lg:px-8">
            {/* Thumbnail */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <Skeleton className="h-full w-full" />
            </div>

            {/* Title */}
            <Skeleton className="mt-8 h-10 w-3/4" />

            {/* Meta info */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-9 w-9 rounded-full" />
                    <Skeleton className="h-5 w-32" />
                </div>
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
                <Skeleton className="h-6 w-16 rounded-lg" />
                <Skeleton className="h-6 w-20 rounded-lg" />
                <Skeleton className="h-6 w-12 rounded-lg" />
            </div>

            {/* Content */}
            <div className="mt-8 space-y-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-11/12" />
                <Skeleton className="h-5 w-10/12" />
                <Skeleton className="h-5 w-9/12" />
                <Skeleton className="h-5 w-full" />
            </div>

            {/* Updated date */}
            <Skeleton className="mt-10 h-4 w-40" />
        </article>
    );
};

export default BlogDetailSkeleton;

