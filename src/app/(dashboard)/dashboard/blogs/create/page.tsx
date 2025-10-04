/* eslint-disable @typescript-eslint/no-explicit-any */
// import BlogForm from "@/components/blog/BlogForm";
"use client"
import { revalidateTagFn } from "@/actions/revalidate";
import BlogForm, { BlogFormValues } from "@/components/blog/BlogForm";
import { createBlog } from "@/services/blog/blog";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreateBlog = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (payload: any) => createBlog(payload),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["blogs"] });
            await revalidateTagFn("blogs");
        },
    });

    const handleCreate = async (values: BlogFormValues & { thumbnail: string }) => {
        await mutation.mutateAsync({
            ...values,
            authorId: "cmg4k5lvq0000u2j4ziohsyds",
        });
    };
    return (
        <BlogForm onSubmit={handleCreate} />
    );
};

export default CreateBlog;