import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React from 'react';

const DashboardBlogsPage = () => {
    return (
        <main>

            <div className='flex justify-between items-center'>
                <h1 className='text-2xl'>Manage Blogs</h1>
                <Button>
                    <Plus></Plus>
                    Create blog
                </Button>
            </div>
        </main>
    );
};

export default DashboardBlogsPage;