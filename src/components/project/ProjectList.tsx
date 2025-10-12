"use client"
import { deleteProjectAction } from "@/actions/projectActions";
import { Button } from "@/components/ui/button";
import { IProject } from '@/types';
import { Edit, Eye, Trash2 } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

const ProjectList = ({ projects }: { projects: IProject[] }) => {
    return (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {
                projects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative flex flex-col overflow-hidden rounded-2xl  ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10 bg-card dark:ring-white/10"
                    >
                        {/* Thumbnail */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                sizes="(min-width: 1024px) 480px, 100vw"
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                            />
                            <div className="pointer-events-none absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/10 via-transparent to-transparent dark:from-black/30" />
                        </div>

                        {/* Body */}
                        <div className="flex flex-col gap-3 p-4 flex-1">
                            {/* Title */}
                            <h3 className="line-clamp-2 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            {project.technologies?.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {project.technologies.slice(0, 4).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700 transition-colors duration-200 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="mt-auto flex justify-end gap-2 pt-2">
                                <Link href={`/projects/${project.id}`} target="_blank">
                                    <Button variant="outline" size="sm">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href={`/dashboard/projects/${project.id}`}>
                                    <Button variant="outline" size="sm">
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-red-600 hover:text-red-700"
                                        // disabled={isDeleting}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete
                                                your project.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={() => deleteProjectAction(project.id)}
                                            >
                                                Continue
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProjectList;