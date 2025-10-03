/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlogCard } from "@/components/blog/BlogCard";
import { baseUrl } from "@/config/baseUrl";

export default async function BlogPage() {
    // const fakeBlog = {
    //     title: "Mastering ISR in Next.js: A Practical Guide",
    //     content:
    //         "<p>Incremental Static Regeneration (ISR) allows developers to combine the speed of static generation with the flexibility of server-side rendering. In this guide, we’ll cover when to use ISR, how <strong>revalidate</strong> works, and best practices for production apps...</p>",
    //     slug: "mastering-isr-nextjs",
    //     thumbnail:
    //         "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
    //     tags: ["nextjs", "isr", "performance", "static-generation"],
    //     author: "Jane Smith",
    //     date: "2025-09-25",
    // }

    const res = await fetch(`${baseUrl}/blog/all`, {
        next: {
            revalidate: 60
        }
    })
    if (!res.ok) throw new Error("Failed to fetch blogs");
    const data = await res.json();

    // throw new Error("Test error for error.tsx");
    // console.log(data?.data?.data);

    return (
        <main className="max-w-4xl mx-auto mt-28 mb-20  ">
            <h1 className="text-center mb-10 text-3xl font-bold">All Blogs</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data?.data?.data?.map((blog: any) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </main>
    )
}


