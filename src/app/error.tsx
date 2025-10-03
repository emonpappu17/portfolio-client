"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Global error caught:", error);
    }, [error]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 px-4">
            <Card className="flex max-w-md flex-col items-center gap-6 p-8 text-center">
                {/* Alert */}
                <Alert className="mb-6 border border-destructive/30 bg-destructive/10 text-destructive dark:border-destructive/40 dark:bg-destructive/20">
                    <CircleAlert className="h-5 w-5" />
                    <AlertTitle className="text-lg font-semibold">Something went wrong</AlertTitle>
                    <AlertDescription className="text-sm">
                        We encountered an unexpected error. Please try again or return home.
                    </AlertDescription>
                </Alert>

                {/* Actions */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button onClick={() => reset()} variant="default">
                        Try Again
                    </Button>
                    <Link href="/">
                        <Button variant="outline">Go Home</Button>
                    </Link>
                </div>

                {/* Debug info (dev only) */}
                {/* {process.env.NODE_ENV === "development" && (
                   
                )} */}

                <pre className="mt-6 overflow-x-auto rounded-md bg-muted p-4 text-left text-xs text-red-600 dark:text-red-400">
                    {error.message}
                    {error.digest && `\nDigest: ${error.digest}`}
                </pre>
            </Card>
        </div>
    );
}
