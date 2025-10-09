import { Skeleton } from '@/components/ui/skeleton';

const loading = () => {
    return (
        <article className="max-w-4xl mx-auto px-5 py-26 space-y-10">
            {/* Hero Image */}
            <Skeleton className="aspect-[16/9] w-full rounded-2xl" />

            {/* Title */}
            <div className="text-center space-y-4">
                <Skeleton className="mx-auto h-8 w-3/4 rounded-md" />
                <Skeleton className="mx-auto h-5 w-1/2 rounded-md" />
            </div>

            {/* Meta Info */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b pb-6">
                {/* Author */}
                <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-4 w-24 rounded-md" />
                        <Skeleton className="h-3 w-16 rounded-md" />
                    </div>
                </div>

                {/* Views + Tags */}
                <div className="flex flex-wrap items-center gap-3">
                    <Skeleton className="h-4 w-20 rounded-md" />
                    <Skeleton className="h-5 w-12 rounded-md" />
                    <Skeleton className="h-5 w-14 rounded-md" />
                    <Skeleton className="h-5 w-10 rounded-md" />
                </div>
            </div>

            {/* Content Blocks */}
            <div className="space-y-4">
                <Skeleton className="h-5 w-full rounded-md" />
                <Skeleton className="h-5 w-5/6 rounded-md" />
                <Skeleton className="h-5 w-4/6 rounded-md" />
                <Skeleton className="h-5 w-3/4 rounded-md" />
                <Skeleton className="h-5 w-2/3 rounded-md" />
                <Skeleton className="h-5 w-1/2 rounded-md" />
            </div>

            {/* Updated Date */}
            <div className="text-center mt-12">
                <Skeleton className="mx-auto h-4 w-40 rounded-md" />
            </div>
        </article>
    );
};

export default loading;