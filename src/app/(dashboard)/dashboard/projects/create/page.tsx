import ProjectForm from '@/components/project/ProjectForm';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CreateProject = () => {
    return (
        <div>
            {/* Page Header */}
        
            <ProjectForm></ProjectForm>
        </div>
    );
};

export default CreateProject;