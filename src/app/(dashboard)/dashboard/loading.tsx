"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardHomeLoading() {
    return (
        <main>
            <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
                {/* === Stats Skeleton === */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 gap-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex flex-col rounded-xl bg-card shadow-sm p-4 border"
                        >
                            <div className="space-y-3">
                                {/* Description */}
                                <Skeleton className="h-4 w-24" />
                                {/* Title Number */}
                                <Skeleton className="h-8 w-20" />
                                {/* Badge */}
                                <Skeleton className="h-6 w-16 rounded-md" />
                            </div>
                            <div className="mt-4 space-y-2 text-sm">
                                <Skeleton className="h-4 w-2/3" />
                                <Skeleton className="h-3 w-1/2" />
                            </div>
                        </div>
                    ))}
                </div>

                <Skeleton className="h-px w-full" /> {/* Separator */}

                {/* === Recent Activity === */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Recent Blogs Skeleton */}
                    <div className="rounded-xl border bg-card shadow-sm p-4 space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-5 w-5 rounded-full" />
                                <Skeleton className="h-5 w-24" />
                            </div>
                            <Skeleton className="h-5 w-12 rounded-md" />
                        </div>

                        {/* Blog Items */}
                        <div className="space-y-4">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 rounded-md p-2 border border-transparent hover:bg-muted/20 transition"
                                >
                                    {/* Thumbnail */}
                                    <Skeleton className="w-[60px] h-[40px] rounded-md flex-shrink-0" />
                                    {/* Texts */}
                                    <div className="flex-1 space-y-1">
                                        <Skeleton className="h-4 w-40" />
                                        <Skeleton className="h-3 w-28" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Projects Skeleton */}
                    <div className="rounded-xl border bg-card shadow-sm p-4 space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-5 w-5 rounded-full" />
                                <Skeleton className="h-5 w-28" />
                            </div>
                            <Skeleton className="h-5 w-12 rounded-md" />
                        </div>

                        {/* Project Items */}
                        <div className="space-y-4">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 rounded-md p-2 border border-transparent hover:bg-muted/20 transition"
                                >
                                    {/* Thumbnail */}
                                    <Skeleton className="w-[60px] h-[40px] rounded-md flex-shrink-0" />
                                    {/* Texts */}
                                    <div className="flex-1 space-y-1">
                                        <Skeleton className="h-4 w-40" />
                                        <Skeleton className="h-3 w-28" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
