import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const loading = () => {
    return (
        <main className="max-w-4xl mx-auto px-5 py-26 space-y-10">
            {/* Hero Thumbnail */}
            <Skeleton className="aspect-[16/9] w-full rounded-2xl" />

            {/* Title + Description */}
            <div className="text-center space-y-4">
                <Skeleton className="mx-auto h-8 w-64 rounded-md" /> {/* Title */}
                <Skeleton className="mx-auto h-5 w-96 rounded-md" /> {/* Description */}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
                <Skeleton className="h-10 w-28 rounded-md" />
                <Skeleton className="h-10 w-32 rounded-md" />
                <Skeleton className="h-10 w-36 rounded-md" />
            </div>

            {/* Content Grid */}
            <div className="grid gap-10 md:grid-cols-2">
                {/* Features */}
                <div className="space-y-4">
                    <Skeleton className="h-6 w-32 rounded-md" /> {/* Section Title */}
                    <ul className="space-y-3">
                        <Skeleton className="h-4 w-3/4 rounded-md" />
                        <Skeleton className="h-4 w-2/3 rounded-md" />
                        <Skeleton className="h-4 w-4/5 rounded-md" />
                        <Skeleton className="h-4 w-1/2 rounded-md" />
                    </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                    <Skeleton className="h-6 w-40 rounded-md" /> {/* Section Title */}
                    <div className="flex flex-wrap gap-2">
                        <Skeleton className="h-6 w-16 rounded-md" />
                        <Skeleton className="h-6 w-20 rounded-md" />
                        <Skeleton className="h-6 w-14 rounded-md" />
                        <Skeleton className="h-6 w-18 rounded-md" />
                    </div>
                </div>
            </div>

            {/* Meta Info */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-6">
                <Skeleton className="h-4 w-40 rounded-md" />
                <Skeleton className="h-4 w-40 rounded-md" />
            </div>
        </main>
    );
};

export default loading;