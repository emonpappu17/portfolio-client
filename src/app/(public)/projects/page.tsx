import ProjectCard from '@/components/project/ProjectCard';
import { IProject } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "My Projects | EmonDev",
    description: "A collection of my recent projects.",
};

const ProjectsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        next: {
            tags: ["projects"]
        }
    })
    if (!res.ok) return <p className='py-20 text-center text-3xl font-bold '>Projects not found</p>;;
    const data = await res.json();
    const projects = data?.data as IProject[]
    return (
        <main>
            <div className='max-w-6xl mx-auto mt-20 mb-20 px-5'>
                <div className="text-center mb-12">
                    <h1
                        className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                    >
                        My Projects
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A collection of my recent Projects
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 '>
                    {
                        projects?.map(project => (
                            <ProjectCard key={project.id} project={project}></ProjectCard>
                        ))
                    }
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;