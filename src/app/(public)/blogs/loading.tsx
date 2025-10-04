import BlogCardSkeleton from "@/components/blog/BlogCardSkeleton";

export default function LoadingBlogPage() {
    return (
        <main className="max-w-4xl mx-auto mt-20 mb-20  ">
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
            <BlogCardSkeleton count={6}></BlogCardSkeleton>
        </main>
    );
}
