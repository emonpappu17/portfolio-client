export interface IProject {
    id: string;
    thumbnail: string;
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    live_link?: string;
    githubClient?: string;
    githubBackend?: string;
    createdAt: string;
    updatedAt: string;
}


export interface About {
    id: string;
    fullName: string;
    title: string;
    bio: string;
    image: string;
    skills: string[];
    whatILove?: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    createdAt: string;
    updatedAt: string;
}
