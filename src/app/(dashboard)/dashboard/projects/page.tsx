/* eslint-disable @typescript-eslint/no-unused-vars */
import ProjectList from '@/components/project/ProjectList';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { IProject } from '@/types';
import { FolderClosedIcon, Plus } from 'lucide-react';
import Link from 'next/link';

import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty";

const getAllProject = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
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
                                <Plus />
                                Create Project
                            </Button>
                        </Link>
                    </CardHeader>
                </Card>
                {
                    projects.length === 0
                        ? <Card>
                            <Empty>
                                <EmptyHeader>
                                    <EmptyMedia variant="icon">
                                        <FolderClosedIcon />
                                    </EmptyMedia>
                                    <EmptyTitle>No Projects Yet</EmptyTitle>
                                    <EmptyDescription>
                                        You haven&apos;t created any projects yet. Get started by creating
                                        your first project.
                                    </EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent>
                                    <Link href={'/dashboard/projects/create'}>
                                        <Button>Create Project</Button>
                                    </Link>
                                </EmptyContent>
                            </Empty>
                        </Card>
                        : <ProjectList projects={projects} />
                }
            </div>
        </main>
    );
};

export default DashboardProjectsPage;