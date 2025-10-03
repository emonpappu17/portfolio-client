import BlogCardSkeleton from "@/components/blog/BlogCardSkeleton";

// components/BlogCardSkeleton.ts x
export default function LoadingBlogPage() {
    return (
        <main className="max-w-4xl mx-auto mt-28 mb-20  ">
            <h1 className="text-center mb-10 text-3xl font-bold">All Blogs</h1>
            {/* <div className="grid  md:grid-cols-3  grid-cols-1 gap-5">
            </div> */}
            <BlogCardSkeleton count={6}></BlogCardSkeleton>
        </main>
    );
}
