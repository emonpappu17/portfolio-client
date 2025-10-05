/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Card, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
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
import { uploadImageToImgBB } from "@/services/uploadImageToImgBB";
import { useMutation } from "@tanstack/react-query";
import { createProject } from "@/services/project/project";

// Schema for Project
export const projectSchema = z.object({
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

    const mutation = useMutation({
        mutationFn: (payload: any) => createProject(payload),
        onSuccess: () => {
            toast.success("Project created successfully!");
            reset();
            router.push("/dashboard/projects");
        },
        onError: (error: any) => {
            console.error("Mutation error:", error);
            toast.error("Failed to create project");
        },
    });

    const handleFormSubmit = async (values: ProjectInput) => {
        if (!image) {
            return toast.error("Thumbnail missing");
        }

        try {
            setIsSubmitting(true);

            // Upload thumbnail
            const thumbnail = await uploadImageToImgBB(image as File);

            // Prepare final payload
            const finalData = {
                ...values,
                thumbnail,
                features: values.features
                    .split(",")
                    .map((f) => f.trim())
                    .filter(Boolean),
                technologies: values.technologies
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean),
            };

            mutation.mutate(finalData);
        } catch (err) {
            console.error(err);
            toast.error("Failed to create project");
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="max-w-3xl mx-auto p-6 bg-card mt-10 space-y-6 shadow-lg rounded-xl">
            <CardHeader className="text-2xl font-bold text-center">Create Project</CardHeader>

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
                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6" noValidate>
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
                                    <Textarea placeholder="Briefly describe the project" rows={4} {...field} />
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
                                    <Input placeholder="e.g. Authentication, Dashboard, Payments" {...field} />
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
                                    <Input placeholder="e.g. Next.js, Prisma, Tailwind CSS" {...field} />
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
                                    <Input type="url" placeholder="https://yourproject.vercel.app" {...field} />
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
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            "Create Project"
                        )}
                    </Button>
                </form>
            </Form>
        </Card>
    );
};

export default ProjectForm;


