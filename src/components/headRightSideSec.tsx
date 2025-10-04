/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { getProfile } from '@/services/user/profile';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { ModeToggle } from './shared/ModeToggle';
import { Button } from './ui/button';

export const RightHead = ({ isScrolled }: { isScrolled: boolean }) => {

    const { data, isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        retry: false
    })

    return (
        <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
            <ModeToggle />
            {data?.success && !isLoading ? (
                <Button
                    // className={cn(isScrolled && "lg:hidden")}
                    asChild variant="outline" size="sm">
                    <Link href="/dashboard">Dashboard</Link>
                </Button>
            ) : (
                <Button asChild variant="outline" size="sm">
                    <Link href="/login">Login</Link>
                </Button>
            )}
        </div>
    );
};

