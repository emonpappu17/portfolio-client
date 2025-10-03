const BlogCardSkeleton = ({ count }: { count: number }) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className="animate-pulse overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur-sm dark:bg-neutral-900/60 dark:ring-white/10"
                >
                    {/* Top media (same aspect ratio as BlogCard) */}
                    <div className="aspect-[16/9] w-full rounded-t-2xl bg-neutral-200 dark:bg-neutral-800" />

                    {/* Body */}
                    <div className="flex flex-col gap-3 p-4">
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                            <div className="flex-1">
                                <div className="h-3 w-36 rounded bg-neutral-200 dark:bg-neutral-800" />
                                <div className="mt-2 h-3 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
                            </div>
                        </div>

                        {/* Title placeholder */}
                        <div className="h-5 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />

                        {/* Tags placeholder */}
                        <div className="flex gap-2">
                            <div className="h-6 w-12 rounded bg-neutral-200 dark:bg-neutral-800" />
                            <div className="h-6 w-10 rounded bg-neutral-200 dark:bg-neutral-800" />
                            <div className="h-6 w-16 rounded bg-neutral-200 dark:bg-neutral-800" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogCardSkeleton;
