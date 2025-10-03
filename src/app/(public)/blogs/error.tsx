"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function BlogsError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Blogs route error:", error);
    }, [error]);

    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 ">
            <Card className="flex max-w-md flex-col items-center gap-6 p-8 text-center">
                <Alert className="max-w-md rounded-xl border border-destructive/30 bg-destructive/10 text-destructive dark:border-destructive/40 dark:bg-destructive/20">
                    <Terminal className="h-5 w-5" />
                    <AlertTitle className="text-lg font-semibold">Blog loading failed</AlertTitle>
                    <AlertDescription className="text-sm">
                        We couldn’t load the blog content. It might be a network issue or a broken slug.
                    </AlertDescription>
                </Alert>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button onClick={() => reset()} variant="default">
                        Try Again
                    </Button>
                    <Link href="/blogs">
                        <Button variant="outline">Back to Blogs</Button>
                    </Link>
                </div>

                <pre className="mt-6 max-w-md overflow-x-auto rounded-md bg-muted p-4 text-xs text-red-600 dark:text-red-400">
                    {error.message}
                    {error.digest && `\nDigest: ${error.digest}`}
                </pre>
            </Card>
        </div>
    );
}

