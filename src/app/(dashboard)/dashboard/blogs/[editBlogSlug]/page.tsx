
import BlogForm from '@/components/blog/BlogForm';
// import BlogForm from '@/components/blog/BlogForm';
import { baseUrl } from '@/config/baseUrl';

const EditBlogPage = async ({
    params,
}: {
    params: Promise<{ editBlogSlug: string }>
}) => {
    const { editBlogSlug } = await params;
    // console.log('editBlogSlug==>', editBlogSlug);
    const res = await fetch(`${baseUrl}/blog/${editBlogSlug}`)
    const data = await res.json();
    const blog = data?.data;
    return (
        <main>
            <BlogForm blog={blog}></BlogForm>
            {/* <BlogEditor slug={editBlogSlug}></BlogEditor> */}
        </main>
    );
};

export default EditBlogPage;