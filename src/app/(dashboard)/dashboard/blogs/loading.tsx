"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function BlogListLoading() {
    return (
        <main>
            <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
                {/* Header Skeleton */}
                <div className="rounded-xl border bg-card shadow-sm p-4 flex items-center justify-between">
                    <Skeleton className="h-6 w-40" /> {/* Title */}
                    <Skeleton className="h-9 w-32 rounded-md" /> {/* Button */}
                </div>

                {/* Grid Skeleton */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-black/5  dark:ring-white/10"
                        >
                            {/* Thumbnail */}
                            <Skeleton className="aspect-[16/9] w-full rounded-t-2xl" />

                            {/* Body */}
                            <div className="flex flex-col gap-3 p-4 flex-1">
                                {/* Title */}
                                <Skeleton className="h-5 w-3/4" />

                                {/* Meta Info */}
                                <div className="flex items-center gap-2">
                                    <Skeleton className="h-8 w-8 rounded-full" />
                                    <Skeleton className="h-4 w-24" />
                                </div>

                                {/* Date + Views */}
                                <div className="flex items-center gap-2">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-4 w-12" />
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-1">
                                    <Skeleton className="h-6 w-12 rounded-lg" />
                                    <Skeleton className="h-6 w-16 rounded-lg" />
                                    <Skeleton className="h-6 w-14 rounded-lg" />
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-auto flex justify-end gap-2 pt-2">
                                    <Skeleton className="h-8 w-8 rounded-md" />
                                    <Skeleton className="h-8 w-8 rounded-md" />
                                    <Skeleton className="h-8 w-8 rounded-md" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
