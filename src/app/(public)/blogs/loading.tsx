import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingBlogPage() {
    return (
        <main>
            <div className="max-w-6xl mx-auto mt-20 mb-20 px-5">
                {/* Header Skeleton */}
                <div className="text-center mb-12">
                    <Skeleton className="mx-auto h-10 w-48 rounded-md" /> {/* Title */}
                    <Skeleton className="mx-auto mt-4 h-5 w-72 rounded-md" /> {/* Subtitle */}
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex flex-col overflow-hidden rounded-2xl bg-card/40 shadow-sm ring-1 ring-border/30 backdrop-blur-sm"
                        >
                            {/* Thumbnail */}
                            <Skeleton className="aspect-[16/9] w-full rounded-t-2xl" />

                            {/* Body */}
                            <div className="flex flex-col gap-3 p-4">
                                {/* Author Row */}
                                <div className="flex items-center gap-3">
                                    <Skeleton className="h-9 w-9 rounded-full" /> {/* Avatar */}
                                    <div className="flex flex-col gap-2">
                                        <Skeleton className="h-4 w-24 rounded-md" /> {/* Author name */}
                                        <Skeleton className="h-3 w-16 rounded-md" /> {/* Date */}
                                    </div>
                                </div>

                                {/* Title */}
                                <Skeleton className="h-5 w-3/4 rounded-md" />

                                {/* Tags */}
                                <div className="flex gap-2 mt-2">
                                    <Skeleton className="h-5 w-12 rounded-md" />
                                    <Skeleton className="h-5 w-14 rounded-md" />
                                    <Skeleton className="h-5 w-10 rounded-md" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
