
import BlogForm from '@/components/blog/BlogForm';
// import BlogForm from '@/components/blog/BlogForm';

const EditBlogPage = async ({
    params,
}: {
    params: Promise<{ editBlogSlug: string }>
}) => {
    const { editBlogSlug } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${editBlogSlug}`)
    const data = await res.json();
    const blog = data?.data;
    return (
        <main>
            <BlogForm blog={blog}></BlogForm>
        </main>
    );
};

export default EditBlogPage;