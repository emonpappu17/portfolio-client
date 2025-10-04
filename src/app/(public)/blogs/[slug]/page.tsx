/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetail from '@/components/blog/BlogDetail';
import { baseUrl } from '@/config/baseUrl';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    const res = await fetch(`${baseUrl}/blog`, {
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
    const res = await fetch(`${baseUrl}/blog/${slug}`)

    if (!res.ok) return <p>Not found</p>;
    const data = await res.json();
    const blog = data?.data;

    return (
        <BlogDetail blog={blog}></BlogDetail>
    );
};

export default BlogDetailsPage;