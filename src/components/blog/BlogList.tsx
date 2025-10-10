"use client";

import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Edit, Eye, Trash2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { deleteBlogAction } from "@/actions/blogActions";


const BlogList = ({ blogs }: { blogs: IBlog[] }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => {
                const initials =
                    blog.author?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase() || "U";

                return (
                    <div
                        key={blog.id}
                        className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10 dark:bg-neutral-900/60 dark:ring-white/10"
                    >
                        {/* Thumbnail */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                            <Image
                                src={blog.thumbnail}
                                alt={blog.title}
                                fill
                                sizes="(min-width: 1024px) 480px, 100vw"
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                            />
                            <div className="pointer-events-none absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/10 via-transparent to-transparent dark:from-black/30" />
                        </div>

                        {/* Body */}
                        <div className="flex flex-col gap-3 p-4 flex-1">
                            {/* Title */}
                            <h3 className="line-clamp-2 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                                {blog.title}
                            </h3>

                            {/* Meta Info */}
                            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                <div className="flex items-center gap-2">
                                    <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-semibold text-white shadow-sm">
                                        {initials || <User className="h-4 w-4" />}
                                    </div>
                                    <span>{blog.author?.name || "Unknown"}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                                <time dateTime={blog.createdAt}>
                                    {format(new Date(blog.createdAt), "MMM dd, yyyy")}
                                </time>
                                <span>•</span>
                                <span>{blog.views} views</span>
                            </div>

                            {/* Tags */}
                            {blog.tags?.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {blog.tags.slice(0, 3).map((tag, i) => (
                                        <Badge
                                            key={i}
                                            variant="outline"
                                            className="text-xs font-medium"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="mt-auto flex justify-end gap-2 pt-2">
                                <Link href={`/blogs/${blog.slug}`} target="_blank">
                                    <Button variant="outline" size="sm">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href={`/dashboard/blogs/${blog.slug}`}>
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
                                            <AlertDialogAction onClick={() => deleteBlogAction(blog.id)}>
                                                Continue
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>

                        {/* Subtle bottom accent */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-500/60 via-violet-500/60 to-fuchsia-500/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                );
            })}
        </div>
    );
};

export default BlogList;

