import ProjectForm from '@/components/project/ProjectForm';
import { baseUrl } from '@/config/baseUrl';
import React from 'react';

const EditProjectPage = async ({
    params,
}: {
    params: Promise<{ editProjectId: string }>
}) => {
    const { editProjectId } = await params;
    const res = await fetch(`https://portfolio-server-fawn-tau.vercel.app/api/project/${editProjectId}`)
    const data = await res.json();
    const project = data.data;
    return (
        <main>
            <ProjectForm project={project}></ProjectForm>
        </main>
    );
};

export default EditProjectPage;