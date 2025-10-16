/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { getProfile } from '@/services/user/profile';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { ModeToggle } from './shared/ModeToggle';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton'; // assuming you have a Skeleton component

export const RightHead = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        retry: false,
    });

    return (
        <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
            <ModeToggle />

            {/* Loading State */}
            {isLoading && (
                <Skeleton className="h-9 w-24 rounded-md" />
            )}

            {/* Error State (fallback to login) */}
            {isError && !isLoading && (
                <Button asChild variant="outline" size="sm">
                    <Link href="/login">Login</Link>
                </Button>
            )}

            {/* Success State */}
            {!isLoading && data?.success && (
                <Button
                    // className={cn(isScrolled && "lg:hidden")}
                    asChild
                    variant="outline"
                    size="sm"
                >
                    <Link href="/dashboard">Dashboard</Link>
                </Button>
            )}

            {/* Fallback if not logged in */}
            {!isLoading && !data?.success && !isError && (
                <Button asChild variant="outline" size="sm">
                    <Link href="/login">Login</Link>
                </Button>
            )}
        </div>
    );
};

