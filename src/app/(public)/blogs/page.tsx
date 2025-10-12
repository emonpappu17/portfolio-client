/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlogCard } from "@/components/blog/BlogCard";
import { baseUrl } from "@/config/baseUrl";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Blogs | EmonDev",
    description: "A collection of my recent blogs.",
};

export default async function BlogPage() {
    const res = await fetch(`${baseUrl}/blog`, {
        next: {
            tags: ["blogs"]
        }
    })
    if (!res.ok) return <p className='py-20 text-center text-3xl font-bold '>Blogs not found</p>;;

    const data = await res.json();

    return (
        <main>
            <div className="max-w-6xl mx-auto mt-20 mb-20 px-5">
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
            </div>
        </main>
    )
}


