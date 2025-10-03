/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetail from '@/components/blog/BlogDetail';
import { baseUrl } from '@/config/baseUrl';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    const res = await fetch(`${baseUrl}/blog/all`, {
        next: {
            revalidate: 60
        }
    })
    if (!res.ok) throw new Error("Failed to fetch blogs");
    const data = await res.json();

    return data?.data?.data?.map((blog: any) => (
        { slug: blog.slug }
    ))
}

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> => {
    const { slug } = await params;

    const res = await fetch(`${baseUrl}/blog/${slug}`, {
        next: { revalidate: 60 },
    });

    const data = await res.json();
    const blog = data?.data;

    // Fallback description if content is missing
    const plainText = blog?.content
        ?.replace(/<[^>]+>/g, "") // strip HTML tags
        .slice(0, 150); // limit length

    const description =
        plainText && plainText.length > 0
            ? plainText + "..."
            : `Read ${blog?.title} by ${blog?.author?.name}, covering ${blog?.tags?.join(
                ", "
            )}.`;

    return {
        title: blog?.title,
        description,
        openGraph: {
            title: blog?.title,
            description,
            images: [
                {
                    url: blog?.thumbnail,
                    alt: blog?.title,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: blog?.title,
            description,
            images: [blog?.thumbnail],
        },
    };
};

const BlogDetailsPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params;
    // console.log(slug);

    const res = await fetch(`${baseUrl}/blog/${slug}`, { next: { revalidate: 60 } })

    if (!res.ok) return <p>Not found</p>;
    const data = await res.json();
    const blog = data?.data;
    // console.log("blog single=>", blog);
    // const cleanContent = DOMPurify.sanitize(blog.content);

    // console.log(cleanContent);
    return (
        // <article className="mx-auto w-[1000px] px-4 py-10  mt-24 mb-20">
        //     {/* Thumbnail */}
        //     <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-md">
        //         <Image
        //             src={blog.thumbnail}
        //             alt={blog.title}
        //             fill
        //             priority
        //             sizes="(min-width: 1024px) 800px, 100vw"
        //             className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
        //         />
        //         <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        //     </div>

        //     {/* Title */}
        //     <h1 className="mt-8 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
        //         {blog.title}
        //     </h1>

        //     {/* Meta info */}
        //     <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
        //         <div className="flex items-center gap-2">
        //             <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-semibold text-white shadow-sm">
        //                 {blog.author.name
        //                     .split(" ")
        //                     .map((n: any[]) => n[0])
        //                     .join("")
        //                     .slice(0, 2)
        //                     .toUpperCase()}
        //             </div>
        //             <span className="font-medium">{blog.author.name}</span>
        //         </div>
        //         <span>•</span>
        //         <time dateTime={String(blog.createdAt)}>
        //             {format(new Date(blog.createdAt), "MMM dd, yyyy")}
        //         </time>
        //         <span>•</span>
        //         <span>{blog.views} view{blog.views !== 1 && "s"}</span>
        //     </div>

        //     {/* Tags */}
        //     {blog.tags?.length > 0 && (
        //         <div className="mt-6 flex flex-wrap gap-2">
        //             {blog.tags.map((tag: any) => (
        //                 <span
        //                     key={tag}
        //                     className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
        //                 >
        //                     #{tag}
        //                 </span>
        //             ))}
        //         </div>
        //     )}

        //     {/* Content */}
        //     <div
        //         className="prose prose-neutral mt-8 max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-indigo-600 dark:prose-a:text-indigo-400"
        //         dangerouslySetInnerHTML={{ __html: cleanContent }}
        //     />
        //     {/* <div>
        //         {cleanContent}
        //     </div> */}

        //     {/* Updated date */}
        //     <p className="mt-10 text-xs text-neutral-500 dark:text-neutral-400">
        //         Last updated on {format(new Date(blog.updatedAt), "MMM dd, yyyy")}
        //     </p>
        // </article>
        <BlogDetail blog={blog}></BlogDetail>
    );
};

export default BlogDetailsPage;