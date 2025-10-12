/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { uploadImageToImgBB } from "@/services/uploadImageToImgBB";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import ImageUploader from "../comp-544";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Spinner } from "../ui/spinner";
// import { createBlogAction } from "@/actions/blogActions";
import { createBlogAction, updateBlogAction } from "@/actions/blogActions";
import { FileMetadata } from "@/hooks/use-file-upload";
import { IBlog } from "@/types";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// Schema 
const blogSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    content: z.string().refine((val) => {
        const plainText = val.replace(/<[^>]+>/g, "").trim();
        return plainText.length >= 50;
    }, { message: "Content must be at least 50 characters" }),
    // content: z.string().min(20, "Content must be at least 50 characters"),
    tags: z.string().min(1, "Provide at least one tag"),
});

export type BlogInput = z.infer<typeof blogSchema>;

type BlogFormProps = {
    blog?: IBlog;
};

const BlogForm = ({ blog }: BlogFormProps) => {
    const router = useRouter();
    const [image, setImage] = useState<File | FileMetadata | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isPending, startTransition] = useTransition();
    const isEditMode = Boolean(blog);

    const form = useForm<BlogInput>({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: blog?.title || "",
            content: blog?.content || "",
            tags: blog?.tags?.join(", ") || "",
        },
    });

    // console.log(form.formState.errors.content);

    const handleFormSubmit = async (values: BlogInput) => {
        setIsSubmitting(true);
        try {
            let thumbnail = blog?.thumbnail || "";

            //  Upload new image if selected
            if (image) {
                thumbnail = await uploadImageToImgBB(image as File);
            }

            if (!thumbnail) {
                setIsSubmitting(false);
                return toast.error("Thumbnail missing");
            }

            const finalData = {
                ...values,
                thumbnail,
                authorId: "cmg4k5lvq0000u2j4ziohsyds",
                tags: values.tags.split(",").map((t) => t.trim()),
            };
            // console.log("finalData==>", finalData);
            //  Call server action
            startTransition(async () => {
                const res = isEditMode ? await updateBlogAction(blog?.slug as string, finalData) : await createBlogAction(finalData as any);
                if (res?.success) {
                    form.reset();
                    setIsSubmitting(false);
                    router.push("/dashboard/blogs");
                    toast.success(
                        isEditMode ? "Blog updated successfully!" : "Blog created successfully!"
                    );
                } else {
                    setIsSubmitting(false);
                    toast.error(res?.message || "Failed to save blog");
                }
            });
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
            toast.error("Something went wrong while saving the blog");
        }
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "code-block"],
            ["link"],
            ["clean"],
        ],
    };

    return (
        <Card className="max-w-3xl mx-auto p-6 mt-10 space-y-6 bg-card shadow-lg rounded-xl">
            <CardHeader className="text-2xl font-bold text-center">
                {isEditMode ? "Edit Blog" : "Create Blog"}
            </CardHeader>

            {/* Back Button */}
            <div className="flex justify-start">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Button>
            </div>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleFormSubmit)}
                    className="space-y-6"
                    noValidate
                >
                    {/* Title */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter blog title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Thumbnail */}
                    <div>
                        <p className="mb-1 font-medium">Thumbnail</p>
                        <ImageUploader setImage={setImage} defaultImage={blog?.thumbnail} />
                    </div>

                    {/* Tags */}
                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tags (comma separated)</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g. React, Next.js, TypeScript"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    {/* Content */}
                    <Controller
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <ReactQuill
                                        theme="snow"
                                        value={field.value}
                                        onChange={field.onChange}
                                        className="mb-12"
                                        modules={modules}
                                    />
                                </FormControl>
                                {form.formState.errors.content && (
                                    <p className="text-sm text-red-400 mt-1">
                                        {form.formState.errors.content.message}
                                    </p>
                                )}
                            </FormItem>
                        )}
                    />

                    {/* Submit */}
                    <Button type="submit" className="w-full" disabled={isPending || isSubmitting}>
                        {isPending || isSubmitting ? (
                            <Spinner />
                        ) : isEditMode ? (
                            "Update Blog"
                        ) : (
                            "Create Blog"
                        )}
                    </Button>
                </form>
            </Form>
        </Card>
    );
};

export default BlogForm;

