import ProjectDetails from '@/components/project/ProjectDetails';
import { IProject } from '@/types';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        next: {
            tags: ["projects"]
        }
    })
    if (!res.ok) throw new Error("Failed to fetch projects");
    const data = await res.json();
    return data?.data.map((project: IProject) => (
        { id: project.id }
    ))
}

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> => {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
        next: { tags: ["projects"] },
    });

    if (!res.ok) {
        return {
            title: "Project Not Found | EmonDev",
            description: "The project you are looking for does not exist.",
        };
    }

    const data = await res.json();
    const project = data?.data as IProject;

    return {
        title: `${project.title} | EmonDev`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.thumbnail],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
            images: [project.thumbnail],
        },
    };
};


const ProjectDetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
        next: {
            tags: ["projects"]
        }
    })

    if (!res.ok) return <p className='py-20 text-center text-3xl font-bold '>Project not found</p>;
    const data = await res.json();
    const project = data?.data as IProject;
    return (
        <main>
            <ProjectDetails project={project}></ProjectDetails>
        </main>
    );
};

export default ProjectDetailsPage;