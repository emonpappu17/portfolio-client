// import { BlogCard } from '@/components/blog/BlogCard';
// import React from 'react';

import { BlogCard } from "@/components/blog/BlogCard"

// import { BlogCard } from "@/components/blog/BlogCard"

// const BlogsPage = () => {
//     return (
//         <div>
//             <BlogCard></BlogCard>
//         </div>
//     );
// };

// export default BlogsPage;


// import { BlogCard } from "@/components/BlogCard"

// export default function BlogPage() {
//     const fakeBlog = {
//         title: "10 Tips to Write Clean Next.js Code",
//         content:
//             "Writing clean and maintainable Next.js code is essential for scaling projects. In this blog, we'll explore the best practices, coding styles, and powerful tools you can use...",
//         slug: "clean-nextjs-code",
//         thumbnail:
//             "https://images.unsplash.com/photo-1581092918367-3d0a89c7c55b?auto=format&fit=crop&w=800&q=80",
//         tags: ["nextjs", "react", "best-practices", "typescript"],
//     }

//     return (
//         <div className="max-w-4xl mx-auto mt-10">
//             <BlogCard {...fakeBlog} />
//         </div>
//     )
// }


// import { BlogCard } from "@/components/BlogCard"

// import { BlogCard } from "@/components/BlogCard"

export default function BlogPage() {
    // const fakeBlog = {
    //     title: "10 Tips to Write Clean Next.js Code",
    //     content:
    //         "Writing clean and maintainable Next.js code is essential for scaling projects. In this blog, we'll explore the best practices, coding styles, and powerful tools you can use...",
    //     slug: "clean-nextjs-code",
    //     thumbnail:
    //         "https://plus.unsplash.com/premium_photo-1757322537620-4f4a3226c6ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     tags: ["nextjs", "react", "best-practices", "typescript"],
    //     author: "John Doe",
    //     date: "2025-09-20",
    // }

    const fakeBlog = {
        title: "Mastering ISR in Next.js: A Practical Guide",
        content:
            "<p>Incremental Static Regeneration (ISR) allows developers to combine the speed of static generation with the flexibility of server-side rendering. In this guide, we’ll cover when to use ISR, how <strong>revalidate</strong> works, and best practices for production apps...</p>",
        slug: "mastering-isr-nextjs",
        thumbnail:
            "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        tags: ["nextjs", "isr", "performance", "static-generation"],
        author: "Jane Smith",
        date: "2025-09-25",
    }


    return (
        <div className="max-w-4xl mx-auto mt-32 mb-20 grid grid-cols-3 gap-5 ">
            <BlogCard {...fakeBlog} />
            <BlogCard {...fakeBlog} />
            <BlogCard {...fakeBlog} />
        </div>
    )
}


