/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useState } from 'react';
import { ModeToggle } from './shared/ModeToggle';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { getProfile } from '@/services/user/profile';

export const RightHead = ({ isScrolled }: { isScrolled: boolean }) => {
    // const profile = await getProfile();

    const [profile, setProfile] = useState<any>(null)
    console.log(profile);

    useEffect(() => {
        getProfile().then(setProfile).catch(console.error)
    }, [])

    return (
        <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
            <ModeToggle />
            {/* <Button
                asChild
                variant="outline"
                size="sm"
                className={cn(isScrolled && "lg:hidden")}
            >
                <Link href="/login">Login</Link>
            </Button> */}

            {profile ? (
                <Button asChild variant="outline" size="sm">
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

// export default RightHead;