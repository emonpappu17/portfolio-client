const BlogCardSkeleton = ({ count }: { count: number }) => {
    return (
        <div className="grid  md:grid-cols-3  grid-cols-1 gap-5">
            {
                Array.from({ length: count }).map((_, i) => (
                    <div key={i} className="animate-pulse overflow-hidden rounded-2xl bg-white/70 p-4 ring-1 ring-black/5 dark:bg-neutral-900/60 dark:ring-white/10">
                        <div className="aspect-[16/9] w-full rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
                        <div className="mt-4 flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                            <div className="flex-1">
                                <div className="h-3 w-36 rounded bg-neutral-200 dark:bg-neutral-800" />
                                <div className="mt-2 h-3 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
                            </div>
                        </div>
                        <div className="mt-3 h-5 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
                        <div className="mt-3 flex gap-2">
                            <div className="h-6 w-12 rounded bg-neutral-200 dark:bg-neutral-800" />
                            <div className="h-6 w-10 rounded bg-neutral-200 dark:bg-neutral-800" />
                            <div className="h-6 w-16 rounded bg-neutral-200 dark:bg-neutral-800" />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogCardSkeleton;