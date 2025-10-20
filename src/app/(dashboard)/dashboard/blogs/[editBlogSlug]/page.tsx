
import BlogForm from '@/components/blog/BlogForm';
// import BlogForm from '@/components/blog/BlogForm';
import { baseUrl } from '@/config/baseUrl';

const EditBlogPage = async ({
    params,
}: {
    params: Promise<{ editBlogSlug: string }>
}) => {
    const { editBlogSlug } = await params;
    const res = await fetch(`https://portfolio-server-fawn-tau.vercel.app/api/blog/${editBlogSlug}`)
    const data = await res.json();
    const blog = data?.data;
    return (
        <main>
            <BlogForm blog={blog}></BlogForm>
        </main>
    );
};

export default EditBlogPage;