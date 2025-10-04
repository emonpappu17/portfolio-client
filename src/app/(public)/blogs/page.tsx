/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlogCard } from "@/components/blog/BlogCard";
import { baseUrl } from "@/config/baseUrl";

export default async function BlogPage() {
    const res = await fetch(`${baseUrl}/blog`, {
        next: {
            tags: ["blogs"]
        }
    })
    if (!res.ok) throw new Error("Failed to fetch blogs");
    const data = await res.json();

    // throw new Error("Test error for error.tsx");
    // console.log(data?.data?.data);

    return (
        <main className="max-w-4xl mx-auto mt-20 mb-20 px-5">
            <div className="text-center mb-12">
                <h1
                    className="text-4xl md:text-5xl font-bold mb-4 
    bg-gradient-to-r from-primary to-primary/70 
    bg-clip-text text-transparent"
                >
                    My Blogs
                </h1>
                <p className="text-xl text-muted-foreground">
                    A collection of my recent blogs
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data?.data?.data?.map((blog: any) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </main>
    )
}


