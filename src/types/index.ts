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


export interface IAbout {
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


export interface IAuthor {
    name: string;
}

export interface IBlog {
    id: string;
    title: string;
    content: string;
    thumbnail: string;
    slug: string;
    authorId: string;
    tags: string[];
    views: number;
    createdAt: string;
    updatedAt: string;
    author: IAuthor;
}


export interface IDashboardOverview {
    totalBlogs: number;
    totalProjects: number;
    totalViews: number;
    recentBlogs: RecentBlog[];
    recentProjects: RecentProject[];
    about: AboutInfo;
}

export interface RecentBlog {
    id: string;
    title: string;
    thumbnail: string;
    createdAt: string;
    slug: string;
}

export interface RecentProject {
    id: string;
    title: string;
    thumbnail: string;
    live_link: string;
    createdAt: string;
}

export interface AboutInfo {
    fullName: string;
    title: string;
    image: string;
    bio: string;
}


