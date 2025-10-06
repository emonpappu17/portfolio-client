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
