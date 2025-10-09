"use client";

import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, CheckCircle2, Calendar } from "lucide-react";
import { format } from "date-fns";

const ProjectDetails = ({ project }: { project: IProject }) => {
    console.log(project);
    return (
        <section className="max-w-4xl mx-auto px-5 py-26">
            {/* Hero Section */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-md">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
            </div>

            {/* Title + Description */}
            <div className="mt-8 text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    {project.title}
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                    {project.description}
                </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
                {project.live_link && (
                    <Link href={project.live_link} target="_blank">
                        <Button variant="default" className="gap-2">
                            <ExternalLink className="h-4 w-4" /> Live Site
                        </Button>
                    </Link>
                )}
                {project.githubClient && (
                    <Link href={project.githubClient} target="_blank">
                        <Button variant="outline" className="gap-2">
                            <Code2 className="h-4 w-4" /> Client Code
                        </Button>
                    </Link>
                )}
                {project.githubBackend && (
                    <Link href={project.githubBackend} target="_blank">
                        <Button variant="outline" className="gap-2">
                            <Code2 className="h-4 w-4" /> Backend Code
                        </Button>
                    </Link>
                )}
            </div>

            {/* Content Grid */}
            <div className="mt-12 grid gap-10 md:grid-cols-2">
                {/* Features */}
                <div>
                    <h2 className="text-xl font-semibold tracking-tight mb-4">
                        Features
                    </h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {project.features?.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technologies */}
                <div>
                    <h2 className="text-xl font-semibold tracking-tight mb-4">
                        Technologies
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-sm">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>

            {/* Meta Info */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground border-t pt-6">
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                        Created: {format(new Date(project.createdAt), "MMM dd, yyyy")}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                        Updated: {format(new Date(project.updatedAt), "MMM dd, yyyy")}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
