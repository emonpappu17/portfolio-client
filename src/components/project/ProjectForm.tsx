/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Card, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

import { Spinner } from "../ui/spinner";
import ImageUploader from "../comp-544";
import { uploadImageToImgBB } from "@/services/uploadImageToImgBB";
import { createProjectAction } from "@/actions/projectActions";
import { IProject } from "@/types";
import { FileMetadata } from "@/hooks/use-file-upload";

// ✅ Schema
const projectSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    features: z.string().min(1, "Provide at least one feature"),
    technologies: z.string().min(1, "Provide at least one technology"),
    live_link: z.string().url("Live link must be a valid URL").optional(),
    githubClient: z.string().url("Must be a valid URL").optional(),
    githubBackend: z.string().url("Must be a valid URL").optional(),
});

export type ProjectInput = z.infer<typeof projectSchema>;

type ProjectFormProps = {
    project?: IProject;
};

const ProjectForm = ({ project }: ProjectFormProps) => {
    const router = useRouter();
    const [image, setImage] = useState<File | FileMetadata | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isPending, startTransition] = useTransition();
    const isEditMode = Boolean(project);

    const form = useForm<ProjectInput>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: project?.title || "",
            description: project?.description || "",
            features: project?.features.join(", ") || "",
            technologies: project?.technologies.join(", ") || "",
            live_link: project?.live_link || "",
            githubClient: project?.githubClient || "",
            githubBackend: project?.githubBackend || "",
        },
    });

    const handleFormSubmit = async (values: ProjectInput) => {
        // if (!image) return toast.error("Thumbnail missing");
        setIsSubmitting(true)
        try {
            let thumbnail = project?.thumbnail || "";

            if (image) {
                thumbnail = await uploadImageToImgBB(image as File);
            }

            if (!thumbnail) {
                setIsSubmitting(false)
                return toast.error("Thumbnail missing")
            }

            const finalData = {
                ...values,
                thumbnail,
                features: values.features.split(",").map((f) => f.trim()),
                technologies: values.technologies.split(",").map((t) => t.trim()),
            };

            startTransition(async () => {
                const res = await createProjectAction(finalData as any);
                if (res?.success) {
                    toast.success("Project created successfully!");
                    form.reset();
                    setIsSubmitting(false)
                    router.push("/dashboard/projects");
                } else {
                    setIsSubmitting(false)
                    toast.error(res?.message || "Failed to create project");
                }
            });
        } catch (error) {
            console.error(error);
            setIsSubmitting(false)
            toast.error("Something went wrong while creating the project");
        }
    };

    return (
        <Card className="max-w-3xl mx-auto p-6 mt-10 space-y-6 bg-card shadow-lg rounded-xl">
            <CardHeader className="text-2xl font-bold text-center">
                {isEditMode ? "Edit Project" : "Create Project"}
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
                                    <Input placeholder="Enter project title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Description */}
                    <FormField
                        control={form.control}
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
                        <ImageUploader setImage={setImage} defaultImage={project?.thumbnail} />
                    </div>

                    {/* Features */}
                    <FormField
                        control={form.control}
                        name="features"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Features (comma separated)</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g. Authentication, Dashboard, Payments"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Technologies */}
                    <FormField
                        control={form.control}
                        name="technologies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Technologies (comma separated)</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g. Next.js, Prisma, Tailwind CSS"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Links */}
                    <FormField
                        control={form.control}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
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
                            control={form.control}
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
                    <Button type="submit" className="w-full" disabled={isPending || isSubmitting}>
                        {isPending || isSubmitting ? <Spinner /> : isEditMode ? "Update Project" : "Create Project"}
                    </Button>
                </form>
            </Form>
        </Card>
    );
};

export default ProjectForm;



