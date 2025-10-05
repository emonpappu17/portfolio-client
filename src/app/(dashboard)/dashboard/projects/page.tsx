import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const DashboardProjectsPage = () => {
    return (
        <main>
            <div className="max-w-7xl mx-auto px-4 py-10">
                {/* <h1>DashboardProjectsPage</h1> */}
                <Card className=" min-w-[310px]">
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
            </div>
        </main>
    );
};

export default DashboardProjectsPage;