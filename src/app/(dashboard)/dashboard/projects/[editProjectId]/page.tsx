import ProjectForm from '@/components/project/ProjectForm';

const EditProjectPage = async ({
    params,
}: {
    params: Promise<{ editProjectId: string }>
}) => {
    const { editProjectId } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${editProjectId}`)
    const data = await res.json();
    const project = data.data;
    return (
        <main>
            <ProjectForm project={project}></ProjectForm>
        </main>
    );
};

export default EditProjectPage;