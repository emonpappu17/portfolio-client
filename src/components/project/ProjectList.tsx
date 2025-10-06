"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IProject } from '@/types';
import { motion } from "framer-motion";
import { Edit, Eye, Trash, Trash2 } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

const ProjectList = ({ projects }: { projects: IProject[] }) => {
    return (
        <>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    projects.map((project) => (
                        // <motion.div
                        //     key={project.id}
                        //     whileHover={{ scale: 1.02 }}
                        //     whileTap={{ scale: 0.98 }}
                        //     className=""
                        // >
                        //     <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
                        //         {/* Thumbnail */}
                        //         <div className="relative w-full aspect-[16/9] overflow-hidden">
                        //             <Image
                        //                 src={project.thumbnail}
                        //                 alt={project.title}
                        //                 fill
                        //                 sizes="(min-width: 1024px) 480px, 100vw"
                        //                 className="object-cover transition-transform duration-500 group-hover:scale-105"
                        //             />
                        //             {/* Gradient overlay */}
                        //             <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                        //         </div>

                        //         <CardContent className="space-y-4">
                        //             {/* Title & Description */}
                        //             <CardHeader className="p-0">
                        //                 <CardTitle className="text-lg font-bold line-clamp-2">{project.title}</CardTitle>
                        //                 <CardDescription className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                        //                     {project.description}
                        //                 </CardDescription>
                        //             </CardHeader>

                        //             {/* Technologies */}
                        //             <div className="flex flex-wrap gap-2 mt-2">
                        //                 {project.technologies.map((tech, idx) => (
                        //                     <Badge key={idx} variant="secondary" className="text-sm px-2 py-1">
                        //                         {tech}
                        //                     </Badge>
                        //                 ))}
                        //             </div>

                        //             {/* Action Buttons - ALWAYS visible */}
                        //             <div className="flex justify-end gap-2 mt-4">
                        //                 <Button variant="outline" size="sm"
                        //                     //  onClick={() => onView(project.id)}
                        //                     className="flex items-center gap-1"
                        //                 >
                        //                     <Eye className="w-4 h-4" /> View
                        //                 </Button>
                        //                 <Button variant="secondary" size="sm"
                        //                     //  onClick={() => onEdit(project.id)} 
                        //                     className="flex items-center gap-1">
                        //                     <Edit className="w-4 h-4" /> Edit
                        //                 </Button>
                        //                 <Button variant="destructive" size="sm"
                        //                     // onClick={() => onDelete(project.id)} 
                        //                     className="flex items-center gap-1">
                        //                     <Trash className="w-4 h-4" /> Delete
                        //                 </Button>
                        //             </div>
                        //         </CardContent>

                        //         {/* Subtle bottom accent */}
                        //         <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />
                        //     </Card>
                        // </motion.div>
                        <div
                            key={project.id}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10 dark:bg-neutral-900/60 dark:ring-white/10"
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
                                {/* <div className="mt-auto flex justify-end gap-2 pt-2">
                                    <button
                                        // onClick={() => onView?.(project.id)}
                                        className="flex items-center gap-1 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                                    >
                                        <Eye className="h-4 w-4" /> View
                                    </button>
                                    <button
                                        // onClick={() => onEdit?.(project.id)}
                                        className="flex items-center gap-1 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-indigo-700"
                                    >
                                        <Edit className="h-4 w-4" /> Edit
                                    </button>
                                    <button
                                        // onClick={() => onDelete?.(project.id)}
                                        className="flex items-center gap-1 rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-red-700"
                                    >
                                        <Trash className="h-4 w-4" /> Delete
                                    </button>
                                </div> */}
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
                                                    // onClick={() => mutate(project.id)}
                                                >
                                                    Continue
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>


                            </div>

                            {/* Subtle bottom accent */}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-500/60 via-violet-500/60 to-fuchsia-500/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default ProjectList;