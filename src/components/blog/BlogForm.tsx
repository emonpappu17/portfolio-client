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
import { FileMetadata } from "@/hooks/use-file-upload";
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

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

/** 1️⃣ Define form schema */
const formSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 2 characters." }),
    content: z.string().min(10, { message: "Content must be at least 50 characters." }),
    // thumbnail: z.string().url({ message: "Thumbnail must be a valid URL." }),
    tags: z.array(z.string()).min(1, { message: "Add at least 1 tag." }),
});

type FormValues = z.infer<typeof formSchema>;

const BlogForm = () => {
    const [image, setImage] = useState<File | FileMetadata | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const queryClient = useQueryClient();

    // API Call
    const mutation = useMutation({
        mutationFn: (payload: any) => createBlog(payload),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["blogs"] });
            // optionally navigate to dashboard list
            console.log('success!!');
            toast.success("Blog created successfully!!")
        },
        onError: (error: any) => {
            // console.log('onMutateResult==>', context);
            console.log("mutation error", error?.response?.data?.message);
            toast.error(error?.response?.data?.message || "Failed to post a blog")
        }
    })

    /** 2️⃣ Initialize form */
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
            tags: [],
        },
    });

    const { control, handleSubmit, } = form;

    /** 3️⃣ Submit handler */
    const onSubmit = async (values: FormValues) => {
        // console.log("Blog Data:", values);
        setIsSubmitting(true)

        try {
            if (!image) return toast.error("Please add thumbnail!");

            const uploadResult = await uploadImageToImgBB(image as File);

            const data = {
                ...values,
                thumbnail: uploadResult,
                authorId: "cmg4k5lvq0000u2j4ziohsyds"
            }

            mutation.mutate(data);
            // console.log("final dat==>", data);
            setIsSubmitting(false)
            // TODO: Call your backend API or server action here
            // Example: await createBlog(values);
        } catch (error) {
            console.log(error);
            setIsSubmitting(false)
        }
    };

    return (
        <Card className="max-w-2xl mx-auto p-6 bg-card mt-10">
            <CardHeader className="text-2xl font-bold text-center">
                Create New Blog
            </CardHeader>

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
                                    <Input placeholder="Enter blog title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Thumbnail */}
                    <div>
                        <p className="mb-1">Thumbnail</p>
                        <ImageUploader setImage={setImage}></ImageUploader>
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
                                        className=" mb-12"
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
                                        placeholder="e.g. react,nextjs,typescript"
                                        {...field}
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value
                                                    .toString()
                                                    .split(",")
                                                    .map((tag) => tag.trim())
                                            )
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Creating..." : "Create"}
                    </Button>
                </form>
            </Form>
        </Card>
    );
};

export default BlogForm;

