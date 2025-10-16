import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Eye, FileText, FolderKanban } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { format } from "date-fns";
import { Badge } from "../ui/badge";
interface DashboardHomeProps {
    data: {
        totalBlogs: number;
        totalProjects: number;
        totalViews: number;
        recentBlogs: {
            id: string;
            title: string;
            thumbnail: string;
            createdAt: string;
            slug: string;
        }[];
        recentProjects: {
            id: string;
            title: string;
            thumbnail: string;
            live_link: string;
            createdAt: string;
        }[];
        about: {
            fullName: string;
            title: string;
            image: string;
            bio: string;
        };
    };
}
const DashboardHome = ({ data }: DashboardHomeProps) => {
    return (
        <div className="space-y-8">
            {/* Stats */}
            <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 sm:grid-cols-2 xl:grid-cols-3">
                <Card className="@container/card">
                    <CardHeader>
                        <CardDescription>Total Blogs</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            {data.totalBlogs}
                        </CardTitle>
                        <CardAction>
                            <Badge variant="outline">
                                <FileText className="size-4 mr-1" />
                                Blogs
                            </Badge>
                        </CardAction>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <div className="line-clamp-1 flex items-center gap-2 font-medium">
                            More posts this month <FileText className="size-4" />
                        </div>
                        <div className="text-muted-foreground">You’re publishing consistently!</div>
                    </CardFooter>
                </Card>

                <Card className="@container/card">
                    <CardHeader>
                        <CardDescription>Total Projects</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            {data.totalProjects}
                        </CardTitle>
                        <CardAction>
                            <Badge variant="outline">
                                <FolderKanban className="size-4 mr-1" />
                                Projects
                            </Badge>
                        </CardAction>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <div className="line-clamp-1 flex gap-2 font-medium items-center">
                            Great project momentum <FolderKanban className="size-4" />
                        </div>
                        <div className="text-muted-foreground">Keep showcasing new work!</div>
                    </CardFooter>
                </Card>

                <Card className="@container/card">
                    <CardHeader>
                        <CardDescription>Total Blog Views</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            {data.totalViews}
                        </CardTitle>
                        <CardAction>
                            <Badge variant="outline">
                                <Eye className="size-4 mr-1" />
                                Views
                            </Badge>
                        </CardAction>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <div className="line-clamp-1 flex gap-2 font-medium items-center" >
                            Visitors are growing <Eye className="size-4" />
                        </div>
                        <div className="text-muted-foreground">Your content is attracting traffic.</div>
                    </CardFooter>
                </Card>
            </div>

            <Separator />

            {/* Recent Activity */}
            <div className="grid gap-6 md:grid-cols-2">
                {/* Recent Blogs */}
                <Card>
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="size-5 text-primary" />
                            Recent Blogs
                        </CardTitle>
                        <Badge variant="outline">Blogs</Badge>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {data.recentBlogs.map((blog) => (
                                <Link
                                    key={blog.id}
                                    href={`/dashboard/blogs`}
                                    className="flex items-center gap-3 rounded-md hover:bg-muted p-2 transition"
                                >
                                    <div className="relative w-[60px] h-[40px] flex-shrink-0">
                                        <Image
                                            src={blog.thumbnail}
                                            alt={blog.title}
                                            fill
                                            className="rounded-md object-cover"
                                            sizes="60px"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium">{blog.title}</p>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Calendar className="size-3" />
                                            {format(new Date(blog.createdAt), "MMM dd, yyyy · h:mm a")}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Projects */}
                <Card>
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <FolderKanban className="size-5 text-primary" />
                            Recent Projects
                        </CardTitle>
                        <Badge variant="outline">Projects</Badge>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {data.recentProjects.map((project) => (
                                <Link
                                    key={project.id}
                                    href={'/dashboard/projects'}
                                    // target="_blank"
                                    className="flex items-center gap-3 rounded-md hover:bg-muted p-2 transition"
                                >
                                    <div className="relative w-[60px] h-[40px] flex-shrink-0">
                                        <Image
                                            src={project.thumbnail}
                                            alt={project.title}
                                            fill
                                            className="rounded-md object-cover"
                                            sizes="60px"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium">{project.title}</p>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Calendar className="size-3" />
                                            {format(new Date(project.createdAt), "MMM dd, yyyy · h:mm a")}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DashboardHome;