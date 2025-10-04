
import BlogEditor from '@/components/blog/BlogEditor';

const EditBlogPage = async ({
    params,
}: {
    params: Promise<{ editBlogSlug: string }>
}) => {
    const { editBlogSlug } = await params;
    console.log('editBlogSlug==>', editBlogSlug);
    return (
        <div>
            {/* <BlogForm></BlogForm> */}
            <BlogEditor slug={editBlogSlug}></BlogEditor>
        </div>
    );
};

export default EditBlogPage;