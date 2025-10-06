import { Spinner } from '@/components/ui/spinner';
import React from 'react';

const EditLoadingPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <Spinner className='size-12'></Spinner>
            </div>
        </div>
    );
};

export default EditLoadingPage;