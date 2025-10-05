// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { Button } from "@/components/ui/button";
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { createBlog } from "@/services/blog/blog";
// import { uploadImageToImgBB } from "@/services/uploadImageToImgBB";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import dynamic from "next/dynamic";
// import { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import "react-quill-new/dist/quill.snow.css";
// import { toast } from "sonner";
// import z from "zod";
// import ImageUploader from "../comp-544";
// import { Card, CardHeader } from "../ui/card";
// import { useRouter } from "next/navigation";
// import { FileMetadata } from "@/hooks/use-file-upload";
// import { Loader2, ArrowLeft } from "lucide-react";
// import { revalidateTagFn } from "@/actions/revalidate";

// const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// /** 1️⃣ Define form schema */
// const formSchema = z.object({
//     title: z.string().min(2, { message: "Title must be at least 2 characters." }),
//     content: z.string().min(1, { message: "Content is required." }),
//     tags: z
//         .array(z.string().min(1, "Tag cannot be empty"))
//         .min(1, { message: "Add at least 1 tag." }),
// });

// type FormValues = z.infer<typeof formSchema>;

// const BlogForm = () => {
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [image, setImage] = useState<File | FileMetadata | null>(null);
//     const queryClient = useQueryClient();
//     const router = useRouter();

//     // ⚡ Tanstack Query mutation
//     const mutation = useMutation({
//         mutationFn: (payload: any) => createBlog(payload),
//         onSuccess: async () => {
//             await queryClient.invalidateQueries({ queryKey: ["blogs"] });
//             await revalidateTagFn("blogs");

//             router.push("/dashboard/blogs");
//             setIsSubmitting(false);
//             toast.success("Blog created successfully!");
//         },
//         onError: (error: any) => {
//             setIsSubmitting(false);
//             toast.error(error?.response?.data?.message || "Failed to post blog");
//         },
//     });

//     /** 2️⃣ Initialize form */
//     const form = useForm<FormValues>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             title: "",
//             content: "",
//             tags: [],
//         },
//     });

//     const { control, handleSubmit } = form;

//     /** 3️⃣ Submit handler */
//     const onSubmit = async (values: FormValues) => {
//         setIsSubmitting(true);
//         try {
//             if (!image) {
//                 setIsSubmitting(false);
//                 return toast.error("Please add a thumbnail!");
//             }

//             // Strip HTML for validation (content should be >= 50 chars text)
//             const plainText = values.content.replace(/<[^>]+>/g, "").trim();
//             if (plainText.length < 50) {
//                 setIsSubmitting(false);
//                 return toast.error("Content must be at least 50 characters.");
//             }

//             // Upload image
//             const thumbnailUrl = await uploadImageToImgBB(image as File);

//             // 🚀 AuthorId should come from session, hardcoded for now
//             const data = {
//                 ...values,
//                 content: values.content, // keep HTML
//                 thumbnail: thumbnailUrl,
//                 authorId: "cmg4k5lvq0000u2j4ziohsyds",
//             };

//             mutation.mutate(data);
//         } catch (error) {
//             console.error(error);
//             setIsSubmitting(false);
//             toast.error("Something went wrong while creating blog");
//         }
//     };

//     const modules = {
//         toolbar: [
//             [{ header: [1, 2, 3, false] }],
//             ["bold", "italic", "underline", "strike"],
//             [{ list: "ordered" }, { list: "bullet" }],
//             ["blockquote", "code-block"],
//             ["link", "image"],
//             ["clean"],
//         ],
//     };

//     return (
//         <Card className="max-w-2xl mx-auto p-6 bg-card mt-10 space-y-6">
//             <CardHeader className="text-2xl font-bold text-center">
//                 Create New Blog
//             </CardHeader>

//             {/* Back Button */}
//             <div className="flex justify-start">
//                 <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() => router.back()}
//                     className="flex items-center gap-2"
//                 >
//                     <ArrowLeft className="h-4 w-4" />
//                     Back
//                 </Button>
//             </div>

//             <Form {...form}>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//                     {/* Title */}
//                     <FormField
//                         control={control}
//                         name="title"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Title</FormLabel>
//                                 <FormControl>
//                                     <Input required placeholder="Enter blog title" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />

//                     {/* Thumbnail */}
//                     <div>
//                         <p className="mb-1 font-medium">Thumbnail</p>
//                         <ImageUploader setImage={setImage} />
//                     </div>

//                     {/* Content */}
//                     <Controller
//                         control={control}
//                         name="content"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Content</FormLabel>
//                                 <FormControl>
//                                     <ReactQuill
//                                         theme="snow"
//                                         value={field.value}
//                                         onChange={field.onChange}
//                                         className="mb-12"
//                                         modules={modules}
//                                     />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />

//                     {/* Tags */}
//                     <FormField
//                         control={control}
//                         name="tags"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Tags (comma separated)</FormLabel>
//                                 <FormControl>
//                                     <Input
//                                         required
//                                         placeholder="e.g. react,nextjs,typescript"
//                                         onChange={(e) =>
//                                             field.onChange(
//                                                 e.target.value
//                                                     .split(",")
//                                                     .map((tag) => tag.trim())
//                                                     .filter((tag) => tag.length > 0)
//                                             )
//                                         }
//                                     />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />

//                     <Button type="submit" className="w-full" disabled={isSubmitting}>
//                         {isSubmitting ? (
//                             <Loader2 className="h-5 w-5 animate-spin" />
//                         ) : (
//                             "Create"
//                         )}
//                     </Button>
//                 </form>
//             </Form>
//         </Card>
//     );
// };

// export default BlogForm;




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
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "react-quill-new/dist/quill.snow.css";
import { toast } from "sonner";
import z from "zod";
import ImageUploader from "../comp-544";
import { Card, CardHeader } from "../ui/card";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

/** Schema */
const formSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 2 characters." }),
    content: z.string().min(1, { message: "Content is required." }),
    tags: z
        .array(z.string().min(1, "Tag cannot be empty"))
        .min(1, { message: "Add at least 1 tag." }),
});

export type BlogFormValues = z.infer<typeof formSchema>;

interface BlogFormProps {
    initialValues?: Partial<BlogFormValues> & { thumbnail?: string };
    onSubmit: (values: BlogFormValues & { thumbnail: string }) => Promise<void>;
    title?: string;
    submitLabel?: string;
}

const BlogForm = ({
    initialValues,
    onSubmit,
    title = "Create New Blog",
    submitLabel = "Create",
}: BlogFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [image, setImage] = useState<File | FileMetadata | null>(null);
    const router = useRouter();

    const form = useForm<BlogFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: initialValues?.title || "",
            content: initialValues?.content || "",
            tags: initialValues?.tags || [],
        },
    });

    const { control, handleSubmit } = form;

    const handleFormSubmit = async (values: BlogFormValues) => {
        setIsSubmitting(true);
        try {
            // Validate content length
            const plainText = values.content.replace(/<[^>]+>/g, "").trim();
            // console.log('plainText==>', plainText);
            if (plainText.length < 50) {
                setIsSubmitting(false);
                return toast.error("Content must be at least 50 characters.");
            }

            let thumbnailUrl = initialValues?.thumbnail || "";

            if (image) {
                const { uploadImageToImgBB } = await import(
                    "@/services/uploadImageToImgBB"
                );
                thumbnailUrl = await uploadImageToImgBB(image as File);
            }

            if (!thumbnailUrl) {
                setIsSubmitting(false);
                return toast.error("Please add a thumbnail!");
            }

            await onSubmit({ ...values, thumbnail: thumbnailUrl });
            toast.success(`${submitLabel} successful!`);
            router.push("/dashboard/blogs");
        } catch (err) {
            console.error(err);
            toast.error(`Failed to ${submitLabel.toLowerCase()} blog`);
        } finally {
            setIsSubmitting(false);
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


    // console.log(' initialValues?.thumbnail==>', initialValues?.thumbnail);

    return (
        <Card className="max-w-2xl mx-auto p-6 bg-card mt-10 space-y-6">
            <CardHeader className="text-2xl font-bold text-center">{title}</CardHeader>

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
                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
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
                        <ImageUploader setImage={setImage} defaultImage={initialValues?.thumbnail} />
                        {/* {initialValues?.thumbnail && !image && (
                            // <Image
                            //     src={initialValues.thumbnail}
                            //     alt="Current thumbnail"
                            //     className="mt-2 h-24 rounded border object-cover"
                            //     fill
                            // />
                            // <img
                            //     src={initialValues.thumbnail}
                            //     alt="Current thumbnail"
                            //     className="mt-2 h-24 rounded border object-cover"
                            // />
                        )} */}
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
                                        defaultValue={field.value?.join(",")}
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
                            submitLabel
                        )}
                    </Button>
                </form>
            </Form>
        </Card>
    );
};

export default BlogForm;




