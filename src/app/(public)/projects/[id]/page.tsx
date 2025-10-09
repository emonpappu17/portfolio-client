import ProjectDetails from '@/components/project/ProjectDetails';
import { baseUrl } from '@/config/baseUrl';
import { IProject } from '@/types';
import React from 'react';

const ProjectDetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params;
    const res = await fetch(`${baseUrl}/project/${id}`)

    if (!res.ok) return <p>Not found</p>;
    const data = await res.json();
    const project = data?.data as IProject;
    console.log(project);
    return (
        <main>
            <ProjectDetails project={project}></ProjectDetails>
        </main>
    );
};

export default ProjectDetailsPage;