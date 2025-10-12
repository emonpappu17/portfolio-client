/* eslint-disable @typescript-eslint/no-unused-vars */
import BlogList from "@/components/blog/BlogList";
import { Button } from "@/components/ui/button";
import { FolderClosedIcon, Plus } from "lucide-react";
import Link from "next/link";
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { baseUrl } from "@/config/baseUrl";
import { IBlog } from "@/types";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";

const getAllBlog = async () => {
    try {
        const res = await fetch(`${baseUrl}/blog`, {
            cache: "no-store"
        })

        if (!res.ok) return [];

        const data = await res.json();

        const blogs = data?.data?.data

        // console.log('blogs:==>', blogs);

        return blogs as IBlog[]
    } catch (error) {
        return [];
    }
}

const DashboardBlogsPage = async () => {
    const blogs = await getAllBlog();
    return (
        <main >
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
                <Card >
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-2xl font-bold">Manage Blogs</CardTitle>
                        <Link href="/dashboard/blogs/create">
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                Create Blog
                            </Button>
                        </Link>
                    </CardHeader>
                </Card>

                {/* Blog List */}
                {/* <BlogList /> */}
                {
                    blogs.length === 0
                        ? <Card>
                            <Empty>
                                <EmptyHeader>
                                    <EmptyMedia variant="icon">
                                        <FolderClosedIcon />
                                    </EmptyMedia>
                                    <EmptyTitle>No Blogs Yet</EmptyTitle>
                                    <EmptyDescription>
                                        You haven&apos;t created any blogs yet. Get started by creating
                                        your first blog.
                                    </EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent>
                                    <Link href={'/dashboard/blogs/create'}>
                                        <Button>Create blog</Button>
                                    </Link>
                                </EmptyContent>
                            </Empty>
                        </Card>
                        : <BlogList blogs={blogs} />
                }
            </div>
        </main>
    );
};

export default DashboardBlogsPage;
