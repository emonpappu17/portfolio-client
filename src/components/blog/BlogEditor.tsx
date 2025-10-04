/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { revalidateTagFn } from "@/actions/revalidate";
import { getBlogBySlug, updateBlog } from "@/services/blog/blog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import BlogForm, { BlogFormValues } from "./BlogForm";

const BlogEditor = ({ slug }: { slug: string }) => {
    const queryClient = useQueryClient();

    // Fetch blog data
    const { data } = useQuery({
        queryKey: ["blog", slug],
        queryFn: () => getBlogBySlug(slug),
    });

    console.log(data);

    const mutation = useMutation({
        mutationFn: (payload: any) => updateBlog(slug, payload),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["blogs"] });
            await revalidateTagFn("blogs");
        }
    })

    const handleUpdate = async (values: BlogFormValues & { thumbnail: string }) => {
        await mutation.mutateAsync(values);
    }

    if (!data) return <div className="flex min-h-screen items-center justify-center ">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
    </div>;

    return (
        <div>
            <BlogForm
                initialValues={data.data}
                onSubmit={handleUpdate}
                title="Update Blog"
                submitLabel="Update"
            ></BlogForm>
        </div>
    );
};

export default BlogEditor;