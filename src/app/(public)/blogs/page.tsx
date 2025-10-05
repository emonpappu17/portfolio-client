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
            {/* <div
                aria-hidden
                className=" inset-0 isolate hidden opacity-65 contain-strict lg:block fixed">
                <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div> */}
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


