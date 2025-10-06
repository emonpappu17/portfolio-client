/* eslint-disable @typescript-eslint/no-unused-vars */
import ProjectList from '@/components/project/ProjectList';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { baseUrl } from '@/config/baseUrl';
import { IProject } from '@/types';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const getAllProject = async () => {
    try {
        const res = await fetch(`${baseUrl}/project`, {
            cache: "no-store"
        })

        if (!res.ok) return [];

        const { data: projects } = await res.json();
        return projects as IProject[]
    } catch (error) {
        return [];
    }
}

const DashboardProjectsPage = async () => {
    const projects = await getAllProject();

    return (
        <main>
            <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
                <Card >
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-2xl font-bold">Manage Projects</CardTitle>
                        <Link href="/dashboard/projects/create">
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                Create Project
                            </Button>
                        </Link>
                    </CardHeader>
                </Card>
                <ProjectList projects={projects}></ProjectList>
            </div>
        </main>
    );
};

export default DashboardProjectsPage;