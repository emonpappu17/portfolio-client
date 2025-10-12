import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IProject } from "@/types";

const ProjectCard = ({ project }: { project: IProject }) => {
    return (
        <Link
            href={`/projects/${project.id}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-card/60 shadow-sm ring-1 ring-border/30 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:ring-border/50"
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
                <h3 className="line-clamp-2 text-base font-semibold tracking-tight text-foreground">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="line-clamp-3 text-sm text-muted-foreground">
                    {project.description}
                </p>

                {/* Technologies */}
                {project.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                        {project.technologies.slice(0, 4).map((tech: string, i: number) => (
                            <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                )}

                {/* View Details Text */}
                <div className="mt-auto pt-3 flex items-center text-sm font-medium text-primary group-hover:underline">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;


