"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service if needed
        console.error("Global error caught:", error);
    }, [error]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
            <div className="mx-auto max-w-md rounded-2xl bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm ring-1 ring-black/5 dark:bg-neutral-900/80 dark:ring-white/10">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                {/* Title */}
                <h1 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    Something went wrong
                </h1>

                {/* Message */}
                <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-400">
                    We encountered an unexpected error. Please try again or return home.
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    {/* <button
                        onClick={() => reset()}
                        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                    >
                        Try Again
                    </button> */}
                    <Button onClick={() => reset()}>Try Again</Button>
                    <Link
                        href="/"
                        className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                    >
                        Go Home
                    </Link>
                </div>

                {/* Optional debug info */}
                {process.env.NODE_ENV === "development" && (
                    <pre className="mt-6 overflow-x-auto rounded-lg bg-neutral-100 p-4 text-left text-xs text-red-600 dark:bg-neutral-800 dark:text-red-400">
                        {error.message}
                        {error.digest && `\nDigest: ${error.digest}`}
                    </pre>
                )}
            </div>
        </div>
    );
}
