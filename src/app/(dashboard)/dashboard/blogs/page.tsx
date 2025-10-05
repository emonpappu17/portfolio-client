import BlogList from "@/components/blog/BlogList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const DashboardBlogsPage = async () => {
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
                <BlogList />
            </div>
        </main>
    );
};

export default DashboardBlogsPage;
