// "use client";

// import { useState } from "react";
// import dynamic from "next/dynamic";
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
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm, Controller } from "react-hook-form";
// import z from "zod";
// import { Card, CardHeader } from "../ui/card";
// import 'react-quill-new/dist/quill.snow.css';
// import Component from "../comp-544";

// const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
// // import "react-quill/dist/quill.snow.css";

// const formSchema = z.object({
//     title: z.string().min(2, {
//         message: "Title must be at least 2 characters.",
//     }),
//     content: z.string().min(10, {
//         message: "Content must be at least 10 characters.",
//     }),
// });

// type FormValues = z.infer<typeof formSchema>;

// const BlogForm = () => {
//     const form = useForm<FormValues>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             title: "",
//             content: "",
//         },
//     });

//     const { control, handleSubmit } = form;

//     const onSubmit = (values: FormValues) => {
//         console.log("Final Values:", values);
//         // call your server action or mutation here
//     };

//     return (
//         <Card className="max-w-4xl mx-auto p-6 bg-card/40 mt-20">
//             <CardHeader className="text-2xl font-bold mb-6 text-center">
//                 Create New Blog
//             </CardHeader>
//             <Form {...form}>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//                     {/* Title */}
//                     <FormField
//                         control={form.control}
//                         name="title"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Title</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="Enter blog title" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//                     {/* Thumbnail */}

//                     {/* Content */}
//                     <Controller
//                         control={control}
//                         name="content"
//                         render={({ field }) => (
//                             <FormItem className="">
//                                 <FormLabel>Content</FormLabel>
//                                 <FormControl>
//                                     <ReactQuill
//                                         theme="snow"
//                                         value={field.value}
//                                         onChange={field.onChange}
//                                         // className="bg-white dark:bg-zinc-900"
//                                         className='h-52 mb-12'
//                                     />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />

//                     {/* Tags */}

//                     <Button type="submit" className="w-full">
//                         Submit
//                     </Button>
//                 </form>
//             </Form>
//         </Card>
//     );
// };

// export default BlogForm;





"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import z from "zod";
import { Card, CardHeader } from "../ui/card";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

/** 1️⃣ Define form schema */
const formSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 2 characters." }),
    content: z.string().min(10, { message: "Content must be at least 10 characters." }),
    thumbnail: z.string().url({ message: "Thumbnail must be a valid URL." }),
    tags: z.array(z.string()).min(1, { message: "Add at least 1 tag." }),
});

type FormValues = z.infer<typeof formSchema>;

const BlogForm = () => {
    /** 2️⃣ Initialize form */
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
            thumbnail: "",
            tags: [],
        },
    });

    const { control, handleSubmit } = form;

    /** 3️⃣ Submit handler */
    const onSubmit = (values: FormValues) => {
        console.log("Blog Data:", values);
        // TODO: Call your backend API or server action here
        // Example: await createBlog(values);
    };

    return (
        <Card className="max-w-4xl mx-auto p-6 bg-card/40 mt-20">
            <CardHeader className="text-2xl font-bold mb-6 text-center">
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
                    <FormField
                        control={control}
                        name="thumbnail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Thumbnail URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter image URL" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

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
                                        className="h-52 mb-12"
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
                                                    .split(",")
                                                    .map((tag) => tag.trim())
                                                    .filter(Boolean)
                                            )
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </Form>
        </Card>
    );
};

export default BlogForm;

