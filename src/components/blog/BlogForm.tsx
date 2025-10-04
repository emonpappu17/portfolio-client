/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createBlog } from "@/services/blog/blog";
import { uploadImageToImgBB } from "@/services/uploadImageToImgBB";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "react-quill-new/dist/quill.snow.css";
import { toast } from "sonner";
import z from "zod";
import ImageUploader from "../comp-544";
import { Card, CardHeader } from "../ui/card";
import { useRouter } from "next/navigation";
import { FileMetadata } from "@/hooks/use-file-upload";
import { Loader2, ArrowLeft } from "lucide-react";
import { revalidateTagFn } from "@/actions/revalidate";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

/** 1️⃣ Define form schema */
const formSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 2 characters." }),
    content: z.string().min(1, { message: "Content is required." }),
    tags: z
        .array(z.string().min(1, "Tag cannot be empty"))
        .min(1, { message: "Add at least 1 tag." }),
});

type FormValues = z.infer<typeof formSchema>;

const BlogForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [image, setImage] = useState<File | FileMetadata | null>(null);
    const queryClient = useQueryClient();
    const router = useRouter();

    // ⚡ Tanstack Query mutation
    const mutation = useMutation({
        mutationFn: (payload: any) => createBlog(payload),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["blogs"] });
            await revalidateTagFn("blogs");

            router.push("/dashboard/blogs");
            setIsSubmitting(false);
            toast.success("Blog created successfully!");
        },
        onError: (error: any) => {
            setIsSubmitting(false);
            toast.error(error?.response?.data?.message || "Failed to post blog");
        },
    });

    /** 2️⃣ Initialize form */
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
            tags: [],
        },
    });

    const { control, handleSubmit } = form;

    /** 3️⃣ Submit handler */
    const onSubmit = async (values: FormValues) => {
        setIsSubmitting(true);
        try {
            if (!image) {
                setIsSubmitting(false);
                return toast.error("Please add a thumbnail!");
            }

            // Strip HTML for validation (content should be >= 50 chars text)
            const plainText = values.content.replace(/<[^>]+>/g, "").trim();
            if (plainText.length < 50) {
                setIsSubmitting(false);
                return toast.error("Content must be at least 50 characters.");
            }

            // Upload image
            const thumbnailUrl = await uploadImageToImgBB(image as File);

            // 🚀 AuthorId should come from session, hardcoded for now
            const data = {
                ...values,
                content: values.content, // keep HTML
                thumbnail: thumbnailUrl,
                authorId: "cmg4k5lvq0000u2j4ziohsyds",
            };

            mutation.mutate(data);
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
            toast.error("Something went wrong while creating blog");
        }
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "code-block"],
            ["link", "image"],
            ["clean"],
        ],
    };

    return (
        <Card className="max-w-2xl mx-auto p-6 bg-card mt-10 space-y-6">
            <CardHeader className="text-2xl font-bold text-center">
                Create New Blog
            </CardHeader>

            {/* Back Button */}
            <div className="flex justify-start">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                    className="flex items-center gap-2"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Button>
            </div>

            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Title */}
                    <FormField
                        control={control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input required placeholder="Enter blog title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Thumbnail */}
                    <div>
                        <p className="mb-1 font-medium">Thumbnail</p>
                        <ImageUploader setImage={setImage} />
                    </div>

                    {/* Content */}
                    <Controller
                        control={control}
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Tags */}
                    <FormField
                        control={control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tags (comma separated)</FormLabel>
                                <FormControl>
                                    <Input
                                        required
                                        placeholder="e.g. react,nextjs,typescript"
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value
                                                    .split(",")
                                                    .map((tag) => tag.trim())
                                                    .filter((tag) => tag.length > 0)
                                            )
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            "Create"
                        )}
                    </Button>
                </form>
            </Form>
        </Card>
    );
};

export default BlogForm;



