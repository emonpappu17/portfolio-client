// "use client";

// import React, { useState } from 'react';
// import { Card, CardHeader } from '../ui/card';
// import { Button } from '../ui/button';
// import { ArrowLeft } from 'lucide-react';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
// import { Input } from '../ui/input';
// import ImageUploader from '../comp-544';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import z from 'zod';
// import { useRouter } from 'next/navigation';
// import { FileMetadata } from '@/hooks/use-file-upload';


// export const projectSchema = z.object({
//     thumbnail: z.string().url("Thumbnail must be a valid URL"),
//     title: z.string().min(2, "Title must be at least 2 characters"),
//     description: z.string().min(10, "Description must be at least 10 characters"),
//     features: z.string().min(1, "Provide at least one feature"),
//     technologies: z.string().min(1, "Provide at least one technology"),
//     live_link: z.string().url("Live link must be a valid URL").optional(),
//     githubClient: z.string().url("githubClient must be a valid URL").optional().nullable(),
//     githubBackend: z.string().url("githubBackend must be a valid URL").optional().nullable(),
// });


// export type ProjectInput = z.infer<typeof projectSchema>;

// const ProjectForm = () => {
//     const [image, setImage] = useState<File | FileMetadata | null>(null);
//     const router = useRouter();

//     const form = useForm<ProjectInput>({
//         resolver: zodResolver(projectSchema),
//         defaultValues: {
//             technologies: "",
//             features: "",
//             live_link: "",
//             githubClient: "",
//             githubBackend: "",
//             title: "",
//             description: "",
//             thumbnail: "",
//         },
//     });

//     const { control, handleSubmit } = form;

//     const handleFormSubmit = async (values: ProjectInput) => {
//         console.log(values);
//     };
//     return (
//         <Card className="max-w-2xl mx-auto p-6 bg-card mt-10 space-y-6">
//             <CardHeader className="text-2xl font-bold text-center">{"Create Project"}</CardHeader>

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
//                 <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
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
//                         <ImageUploader
//                             setImage={setImage}
//                         // defaultImage={thumbnail}
//                         />
//                     </div>




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
//                                         defaultValue={field.value?.join(",")}
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

//                     <Button
//                         type="submit"
//                         className="w-full"
//                     // disabled={isSubmitting}
//                     >
//                         {/* {isSubmitting ? (
//                             <Loader2 className="h-5 w-5 animate-spin" />
//                         ) : (
//                             submitLabel
//                         )} */}
//                         Create
//                     </Button>
//                 </form>
//             </Form>
//         </Card>
//     );
// };

// export default ProjectForm;



"use client";

import React, { useState } from "react";
import { Card, CardHeader } from "../ui/card";
// import { Button } from "../ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import ImageUploader from "../comp-544";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { FileMetadata } from "@/hooks/use-file-upload";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { uploadImageToImgBB } from "@/services/uploadImageToImgBB";

// ✅ Schema aligned with your Project model
export const projectSchema = z.object({
    // thumbnail: z.string().url("Thumbnail must be a valid URL"),
    title: z.string().min(2, "Title must be at least 2 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    features: z.string().min(1, "Provide at least one feature"),
    technologies: z.string().min(1, "Provide at least one technology"),
    live_link: z.string().url("Live link must be a valid URL").optional(),
    githubClient: z.string().url("Must be a valid URL").optional(),
    githubBackend: z.string().url("Must be a valid URL").optional(),
});

export type ProjectInput = z.infer<typeof projectSchema>;

const ProjectForm = () => {
    const [image, setImage] = useState<File | FileMetadata | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const form = useForm<ProjectInput>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            // thumbnail: "",
            title: "",
            description: "",
            features: "",
            technologies: "",
            live_link: "",
            githubClient: "",
            githubBackend: "",
        },
    });

    const { control, handleSubmit, reset } = form;
    // console.log(watch.name("title"));

    const handleFormSubmit = async (values: ProjectInput) => {
        console.log(values);
        try {
            setIsSubmitting(true);

            if (!image) {
                setIsSubmitting(false);
                return toast.error("Thumbnail missing")
            }
            let thumbnail = ''

            if (image) {
                thumbnail = await uploadImageToImgBB(image as File);
            }

            console.log("✅ Submitted Data:", values, thumbnail);
            const finalData = {
                ...values,
                thumbnail,
                features: values.features.split(",").map(f => f.trim()),
                technologies: values.technologies.split(",").map(t => t.trim()),
            }

            console.log("finalData: ", finalData);
            // You can replace this with API call
            // await fetch("/api/projects", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify(values),
            // });

            // toast.success("Project created successfully!");
            // reset();
            // router.push("/dashboard/projects");
        } catch (error) {
            toast.error("Failed to create project");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="max-w-2xl mx-auto p-6 bg-card mt-10 space-y-6 shadow-lg rounded-xl">
            <CardHeader className="text-2xl font-bold text-center">
                Create Project
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
                <form
                    onSubmit={handleSubmit(handleFormSubmit)}
                    className="space-y-6"
                    noValidate
                >
                    {/* Title */}
                    <FormField
                        control={control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter project title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Description */}
                    <FormField
                        control={control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Briefly describe the project"
                                        rows={4}
                                        {...field}
                                    />
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

                    {/* Features */}
                    <FormField
                        control={control}
                        name="features"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Features (comma separated)</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g. Authentication, Dashboard, Payments"
                                        {...field}
                                    // onChange={(e) =>
                                    //     field.onChange(
                                    //         e.target.value
                                    //             .split(",")
                                    //             .map((f) => f.trim())
                                    //             .filter((f) => f.length > 0)
                                    //     )
                                    // }
                                    // defaultValue={field.value?.join(",")}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Technologies */}
                    <FormField
                        control={control}
                        name="technologies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Technologies (comma separated)</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g. Next.js, Prisma, Tailwind CSS"
                                        // onChange={(e) =>
                                        //     field.onChange(
                                        //         e.target.value
                                        //             .split(",")
                                        //             .map((t) => t.trim())
                                        //             .filter((t) => t.length > 0)
                                        //     )
                                        // }
                                        // defaultValue={field.value?.join(",")}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Live Link */}
                    <FormField
                        control={control}
                        name="live_link"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Live Link</FormLabel>
                                <FormControl>
                                    <Input
                                        type="url"
                                        placeholder="https://yourproject.vercel.app"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* GitHub Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={control}
                            name="githubClient"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>GitHub Client</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="url"
                                            placeholder="https://github.com/username/client"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="githubBackend"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>GitHub Backend</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="url"
                                            placeholder="https://github.com/username/backend"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin mr-2" /> Submitting...
                            </>
                        ) : (
                            "Create Project"
                        )}
                        {/* Create Project */}
                    </Button>

                </form>
            </Form>
        </Card>
    );
};

export default ProjectForm;



