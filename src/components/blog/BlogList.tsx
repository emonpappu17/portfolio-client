/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { deleteBlog, fetchBlogs } from "@/services/blog/blog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { revalidateTagFn } from "@/actions/revalidate";
import { Eye, Edit, Trash2, User } from "lucide-react";
import { format } from "date-fns";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


// Skeleton loader
const BlogCardSkeleton = () => (
    <Card className="flex flex-col overflow-hidden">
        <CardHeader>
            <Skeleton className="h-6 w-3/4" /> {/* Title */}
        </CardHeader>

        <CardContent className="flex flex-col gap-3 text-sm">
            {/* Author + Meta */}
            <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-8 rounded-full" /> {/* Avatar */}
                <Skeleton className="h-4 w-24" /> {/* Author name */}
            </div>
            <div className="flex items-center gap-2 text-xs">
                <Skeleton className="h-3 w-20" /> {/* Date */}
                <Skeleton className="h-3 w-12" /> {/* Views */}
            </div>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
                <Skeleton className="h-5 w-12 rounded" />
                <Skeleton className="h-5 w-16 rounded" />
                <Skeleton className="h-5 w-10 rounded" />
            </div>
        </CardContent>

        <CardFooter className="flex gap-2 mt-auto">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
        </CardFooter>
    </Card>
);


const BlogList = () => {
    const queryClient = useQueryClient();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["blogs"],
        queryFn: fetchBlogs,
    });

    const { mutate, isPending: isDeleting } = useMutation({
        mutationFn: (id: string) => deleteBlog(id),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["blogs"] });
            await revalidateTagFn("blogs");
        },
    });

    const blogs = data?.data?.data;

    if (isLoading) {
        return (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                    <BlogCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    if (isError) {
        return (
            <Alert variant="destructive" className="w-full flex items-center justify-center sm:w-[400px] md:w-[600px] text-center" >
                <div>
                    <AlertTitle>Failed to load blogs</AlertTitle>
                    <AlertDescription>
                        {(error as Error)?.message || "Something went wrong."}
                    </AlertDescription>
                </div>
            </Alert>
        );
    }

    if (!blogs || blogs.length === 0) {
        return (
            <Alert className="w-full flex items-center justify-center sm:w-[400px] md:w-[600px] text-center">
                <div>
                    <AlertTitle>No blogs found</AlertTitle>
                    <AlertDescription>
                        Create your first blog to get started!
                    </AlertDescription>
                </div>
            </Alert>
        );
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog: any) => {
                const initials = blog.author?.name
                    ?.split(" ")
                    .map((n: string) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();

                return (
                    <Card key={blog.id} className="flex flex-col overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-lg line-clamp-2">
                                {blog.title}
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="flex flex-col gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                            {/* Author + Meta */}
                            <div className="flex items-center gap-2">
                                <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-semibold text-white shadow-sm">
                                    {initials || <User className="h-4 w-4" />}
                                </div>
                                <span className="font-medium">{blog.author?.name}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <time dateTime={blog.createdAt}>
                                    {format(new Date(blog.createdAt), "MMM dd, yyyy")}
                                </time>
                                <span>•</span>
                                <span>{blog.views} views</span>
                            </div>

                            {/* Tags */}
                            <div className="flex gap-2 flex-wrap">
                                {blog.tags?.slice(0, 3).map((tag: string, i: number) => (
                                    <Badge key={i} variant="outline" className="text-xs">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter className="flex gap-2 mt-auto">
                            <Link href={`/blogs/${blog.slug}`} target="_blank">
                                <Button variant="outline" size="sm">
                                    <Eye className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href={`/dashboard/blogs/${blog.id}/edit`}>
                                <Button variant="outline" size="sm">
                                    <Edit className="h-4 w-4" />
                                </Button>
                            </Link>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-red-600 hover:text-red-700"
                                        disabled={isDeleting}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete
                                            your blog.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => mutate(blog.id)}>
                                            Continue
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    );
};

export default BlogList;
