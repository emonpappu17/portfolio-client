import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DashboardBlogsPage = () => {
    return (
        <main>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl'>Manage Blogs</h1>

                <Link href={'/dashboard/blogs/create'}>
                    <Button>
                        <Plus></Plus>
                        Create blog
                    </Button>
                </Link>
            </div>
        </main>
    );
};

export default DashboardBlogsPage;