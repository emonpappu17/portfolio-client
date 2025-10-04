
// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { motion } from "framer-motion";
// import {
//     Download,
//     Github,
//     Linkedin,
//     Mail,
//     MapPin,
//     Phone,
// } from "lucide-react";
// import Image from "next/image";

// export default function AboutPage() {
//     // 🔹 Fake professional data for now
//     const about = {
//         name: "Emon Howlader",
//         title: "Full Stack Developer",
//         profile_image:
//             "https://avatars.githubusercontent.com/u/9919?s=280&v=4",
//         bio: "I’m a passionate full stack developer specializing in building scalable, modern, and user-centric web applications using cutting-edge technologies like Next.js, TypeScript, and Node.js. I focus on clean code, performance, and a seamless user experience.",
//         email: "emon@example.com",
//         phone: "+880 1711-234567",
//         location: "Dhaka, Bangladesh",
//         social_links: {
//             github: "https://github.com/",
//             linkedin: "https://linkedin.com/in/",
//         },
//         resume_url: "#",
//         experience: [
//             {
//                 position: "Full Stack Developer",
//                 company: "TechCraft Solutions",
//                 period: "2023 – Present",
//                 description:
//                     "Building enterprise-grade applications with Next.js, Express, and PostgreSQL. Focused on performance optimization, reusable component architecture, and API integrations.",
//             },
//             {
//                 position: "Frontend Developer",
//                 company: "Pixelwave Studio",
//                 period: "2021 – 2023",
//                 description:
//                     "Developed highly interactive and responsive web interfaces using React, Tailwind CSS, and TypeScript. Collaborated with backend teams to build seamless REST APIs.",
//             },
//         ],
//         education: [
//             {
//                 degree: "B.Sc. in Computer Science & Engineering",
//                 institution: "Bangladesh University of Business and Technology",
//                 period: "2018 – 2022",
//             },
//         ],
//         skills: [
//             "React",
//             "Next.js",
//             "TypeScript",
//             "Node.js",
//             "Express",
//             "PostgreSQL",
//             "MongoDB",
//             "Tailwind CSS",
//             "Docker",
//             "AWS",
//             "Git",
//             "REST API",
//         ],
//     };

//     return (
//         <div className="mt-10">
//             {/* <Navbar /> */}

//             <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="container mx-auto px-4 py-12"
//             >
//                 <div className="max-w-5xl mx-auto">
//                     {/* Profile Card */}
//                     <Card className="mb-12 shadow-xl border-blue-100">
//                         <CardContent className="pt-6">
//                             <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
//                                 <motion.div
//                                     whileHover={{ scale: 1.05 }}
//                                     className="flex-shrink-0"
//                                 >
//                                     <Image
//                                         src={about.profile_image}
//                                         alt={about.name}
//                                         width={200}
//                                         height={200}
//                                         className="rounded-full object-cover shadow-lg border-4 border-white"
//                                     />
//                                 </motion.div>

//                                 <div className="flex-1 text-center md:text-left">
//                                     <h1 className="text-4xl font-bold mb-2 text-gray-900">
//                                         {about.name}
//                                     </h1>
//                                     <p className="text-xl text-blue-600 mb-4">
//                                         {about.title}
//                                     </p>
//                                     <p className="text-gray-600 mb-6 leading-relaxed">
//                                         {about.bio}
//                                     </p>

//                                     <div className="space-y-2 mb-6 text-gray-600">
//                                         <div className="flex items-center justify-center md:justify-start gap-2">
//                                             <Mail className="h-4 w-4" />
//                                             <a
//                                                 href={`mailto:${about.email}`}
//                                                 className="hover:text-blue-600 transition-colors"
//                                             >
//                                                 {about.email}
//                                             </a>
//                                         </div>
//                                         <div className="flex items-center justify-center md:justify-start gap-2">
//                                             <Phone className="h-4 w-4" />
//                                             <span>{about.phone}</span>
//                                         </div>
//                                         <div className="flex items-center justify-center md:justify-start gap-2">
//                                             <MapPin className="h-4 w-4" />
//                                             <span>{about.location}</span>
//                                         </div>
//                                     </div>

//                                     <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//                                         <a
//                                             href={about.social_links.github}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             <Button variant="outline" size="sm">
//                                                 <Github className="h-4 w-4 mr-2" />
//                                                 GitHub
//                                             </Button>
//                                         </a>
//                                         <a
//                                             href={about.social_links.linkedin}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             <Button variant="outline" size="sm">
//                                                 <Linkedin className="h-4 w-4 mr-2" />
//                                                 LinkedIn
//                                             </Button>
//                                         </a>
//                                         <a
//                                             href={about.resume_url}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             <Button size="sm">
//                                                 <Download className="h-4 w-4 mr-2" />
//                                                 Resume
//                                             </Button>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </CardContent>
//                     </Card>

//                     {/* Experience & Education */}
//                     <div className="grid md:grid-cols-2 gap-8 mb-10">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.2 }}
//                         >
//                             <Card className="shadow-lg border-cyan-100">
//                                 <CardHeader>
//                                     <CardTitle className="text-2xl font-semibold">
//                                         Experience
//                                     </CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     {about.experience.map((exp, i) => (
//                                         <div key={i} className="mb-6 last:mb-0">
//                                             <h3 className="font-semibold text-lg text-gray-900">
//                                                 {exp.position}
//                                             </h3>
//                                             <p className="text-blue-600">{exp.company}</p>
//                                             <p className="text-sm text-gray-500 mb-2">
//                                                 {exp.period}
//                                             </p>
//                                             <p className="text-gray-600">{exp.description}</p>
//                                             {i < about.experience.length - 1 && (
//                                                 <Separator className="my-6" />
//                                             )}
//                                         </div>
//                                     ))}
//                                 </CardContent>
//                             </Card>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.3 }}
//                         >
//                             <Card className="shadow-lg border-teal-100">
//                                 <CardHeader>
//                                     <CardTitle className="text-2xl font-semibold">
//                                         Education
//                                     </CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     {about.education.map((edu, i) => (
//                                         <div key={i} className="mb-6 last:mb-0">
//                                             <h3 className="font-semibold text-lg text-gray-900">
//                                                 {edu.degree}
//                                             </h3>
//                                             <p className="text-blue-600">{edu.institution}</p>
//                                             <p className="text-sm text-gray-500">
//                                                 {edu.period}
//                                             </p>
//                                             {i < about.education.length - 1 && (
//                                                 <Separator className="my-6" />
//                                             )}
//                                         </div>
//                                     ))}
//                                 </CardContent>
//                             </Card>
//                         </motion.div>
//                     </div>

//                     {/* Skills */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.4 }}
//                     >
//                         <Card className="shadow-lg border-blue-100">
//                             <CardHeader>
//                                 <CardTitle className="text-2xl font-semibold">
//                                     Skills
//                                 </CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="flex flex-wrap gap-3">
//                                     {about.skills.map((skill) => (
//                                         <Badge
//                                             key={skill}
//                                             variant="secondary"
//                                             className="px-4 py-2 text-sm hover:scale-105 transition-transform"
//                                         >
//                                             {skill}
//                                         </Badge>
//                                     ))}
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </motion.div>
//                 </div>
//             </motion.div>
//         </div>
//     );
// }




// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { motion } from "framer-motion";
// import {
//     Download,
//     Github,
//     Linkedin,
//     Mail,
//     MapPin,
//     Phone,
// } from "lucide-react";
// import Image from "next/image";

// export default function AboutPage() {
//     const about = {
//         name: "Emon Howlader",
//         title: "Full Stack Developer",
//         profile_image:
//             "https://avatars.githubusercontent.com/u/9919?s=280&v=4",
//         bio: "I'm a passionate full stack developer specializing in building scalable, modern, and user-centric web applications using technologies like Next.js, TypeScript, and Node.js. I love crafting clean, performant code and creating delightful user experiences.",
//         email: "emon@example.com",
//         phone: "+880 1711-234567",
//         location: "Dhaka, Bangladesh",
//         social_links: {
//             github: "https://github.com/",
//             linkedin: "https://linkedin.com/in/",
//         },
//         resume_url: "#",
//         experience: [
//             {
//                 position: "Full Stack Developer",
//                 company: "TechCraft Solutions",
//                 period: "2023 – Present",
//                 description:
//                     "Architecting and building enterprise-grade apps using Next.js, Express, and PostgreSQL. Focused on performance, modular architecture, and clean API design.",
//             },
//             {
//                 position: "Frontend Developer",
//                 company: "Pixelwave Studio",
//                 period: "2021 – 2023",
//                 description:
//                     "Developed highly interactive and responsive web interfaces using React, Tailwind CSS, and TypeScript. Worked closely with backend teams to build robust REST APIs.",
//             },
//         ],
//         education: [
//             {
//                 degree: "B.Sc. in Computer Science & Engineering",
//                 institution: "Bangladesh University of Business and Technology",
//                 period: "2018 – 2022",
//             },
//         ],
//         skills: [
//             "React",
//             "Next.js",
//             "TypeScript",
//             "Node.js",
//             "Express",
//             "PostgreSQL",
//             "MongoDB",
//             "Tailwind CSS",
//             "Docker",
//             "AWS",
//             "Git",
//             "REST API",
//         ],
//     };

//     return (
//         <div className="relative min-h-screen ">
//             {/* Animated background glow */}
//             <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent"></div>

//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="container mx-auto px-4 py-16"
//             >
//                 <div className="max-w-5xl mx-auto space-y-12">
//                     {/* Profile Section */}
//                     <Card className="overflow-hidden shadow-lg border-0 bg-white/70 backdrop-blur-md">
//                         <CardContent className="p-8">
//                             <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
//                                 <motion.div
//                                     whileHover={{ scale: 1.05 }}
//                                     transition={{ type: "spring", stiffness: 300 }}
//                                 >
//                                     <Image
//                                         src={about.profile_image}
//                                         alt={about.name}
//                                         width={200}
//                                         height={200}
//                                         className="rounded-full border-4 border-blue-100 shadow-md"
//                                     />
//                                 </motion.div>

//                                 <div className="flex-1 text-center md:text-left">
//                                     <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
//                                         {about.name}
//                                     </h1>
//                                     <p className="text-lg text-blue-600 font-medium mt-1">
//                                         {about.title}
//                                     </p>
//                                     <p className="text-gray-600 mt-4 leading-relaxed">
//                                         {about.bio}
//                                     </p>

//                                     <div className="mt-6 space-y-2 text-gray-600">
//                                         <div className="flex items-center justify-center md:justify-start gap-2">
//                                             <Mail className="h-4 w-4" />
//                                             <a
//                                                 href={`mailto:${about.email}`}
//                                                 className="hover:text-blue-600 transition-colors"
//                                             >
//                                                 {about.email}
//                                             </a>
//                                         </div>
//                                         <div className="flex items-center justify-center md:justify-start gap-2">
//                                             <Phone className="h-4 w-4" />
//                                             <span>{about.phone}</span>
//                                         </div>
//                                         <div className="flex items-center justify-center md:justify-start gap-2">
//                                             <MapPin className="h-4 w-4" />
//                                             <span>{about.location}</span>
//                                         </div>
//                                     </div>

//                                     <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
//                                         <a href={about.social_links.github} target="_blank" rel="noopener noreferrer">
//                                             <Button variant="outline" size="sm" className="hover:bg-blue-50">
//                                                 <Github className="h-4 w-4 mr-2" /> GitHub
//                                             </Button>
//                                         </a>
//                                         <a href={about.social_links.linkedin} target="_blank" rel="noopener noreferrer">
//                                             <Button variant="outline" size="sm" className="hover:bg-blue-50">
//                                                 <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
//                                             </Button>
//                                         </a>
//                                         <a href={about.resume_url} target="_blank" rel="noopener noreferrer">
//                                             <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
//                                                 <Download className="h-4 w-4 mr-2" /> Resume
//                                             </Button>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </CardContent>
//                     </Card>

//                     {/* Experience and Education */}
//                     <div className="grid md:grid-cols-2 gap-8">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.2 }}
//                         >
//                             <Card className="border-0 shadow-md bg-white/80 backdrop-blur">
//                                 <CardHeader>
//                                     <CardTitle className="text-2xl font-semibold text-gray-900">
//                                         Experience
//                                     </CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     {about.experience.map((exp, i) => (
//                                         <div key={i} className="mb-6 last:mb-0">
//                                             <h3 className="font-semibold text-lg text-gray-800">
//                                                 {exp.position}
//                                             </h3>
//                                             <p className="text-blue-600">{exp.company}</p>
//                                             <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
//                                             <p className="text-gray-600 leading-relaxed">
//                                                 {exp.description}
//                                             </p>
//                                             {i < about.experience.length - 1 && <Separator className="my-6" />}
//                                         </div>
//                                     ))}
//                                 </CardContent>
//                             </Card>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.3 }}
//                         >
//                             <Card className="border-0 shadow-md bg-white/80 backdrop-blur">
//                                 <CardHeader>
//                                     <CardTitle className="text-2xl font-semibold text-gray-900">
//                                         Education
//                                     </CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     {about.education.map((edu, i) => (
//                                         <div key={i} className="mb-6 last:mb-0">
//                                             <h3 className="font-semibold text-lg text-gray-800">
//                                                 {edu.degree}
//                                             </h3>
//                                             <p className="text-blue-600">{edu.institution}</p>
//                                             <p className="text-sm text-gray-500">{edu.period}</p>
//                                             {i < about.education.length - 1 && <Separator className="my-6" />}
//                                         </div>
//                                     ))}
//                                 </CardContent>
//                             </Card>
//                         </motion.div>
//                     </div>

//                     {/* Skills */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.4 }}
//                     >
//                         <Card className="border-0 shadow-md bg-white/80 backdrop-blur">
//                             <CardHeader>
//                                 <CardTitle className="text-2xl font-semibold text-gray-900">
//                                     Skills
//                                 </CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="flex flex-wrap gap-3">
//                                     {about.skills.map((skill) => (
//                                         <Badge
//                                             key={skill}
//                                             variant="secondary"
//                                             className="px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-all"
//                                         >
//                                             {skill}
//                                         </Badge>
//                                     ))}
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </motion.div>
//                 </div>
//             </motion.div>
//         </div>
//     );
// }



"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
    Download,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const about = {
        name: "Emon Howlader",
        title: "Full Stack Developer",
        profile_image:
            "https://avatars.githubusercontent.com/u/9919?s=280&v=4",
        bio: "I'm a passionate full stack developer specializing in building scalable, modern, and user-centric web applications using technologies like Next.js, TypeScript, and Node.js. I love crafting clean, performant code and creating delightful user experiences.",
        email: "emon@example.com",
        phone: "+880 1711-234567",
        location: "Dhaka, Bangladesh",
        social_links: {
            github: "https://github.com/",
            linkedin: "https://linkedin.com/in/",
        },
        resume_url: "#",
        experience: [
            {
                position: "Full Stack Developer",
                company: "TechCraft Solutions",
                period: "2023 – Present",
                description:
                    "Architecting and building enterprise-grade apps using Next.js, Express, and PostgreSQL. Focused on performance, modular architecture, and clean API design.",
            },
            {
                position: "Frontend Developer",
                company: "Pixelwave Studio",
                period: "2021 – 2023",
                description:
                    "Developed highly interactive and responsive web interfaces using React, Tailwind CSS, and TypeScript. Worked closely with backend teams to build robust REST APIs.",
            },
        ],
        education: [
            {
                degree: "B.Sc. in Computer Science & Engineering",
                institution: "Bangladesh University of Business and Technology",
                period: "2018 – 2022",
            },
        ],
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "Tailwind CSS",
            "Docker",
            "AWS",
            "Git",
            "REST API",
        ],
    };

    return (
        <div className="relative mt-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 py-16"
            >
                <div className="max-w-5xl mx-auto space-y-12">
                    {/* Profile Section */}
                    <Card className="overflow-hidden shadow-md border border-border bg-card ">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Image
                                        src={about.profile_image}
                                        alt={about.name}
                                        width={200}
                                        height={200}
                                        className="rounded-full border-4 border-border shadow-md"
                                    />
                                </motion.div>

                                <div className="flex-1 text-center md:text-left">
                                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
                                        {about.name}
                                    </h1>
                                    <p className="text-lg text-primary font-medium mt-1">
                                        {about.title}
                                    </p>
                                    <p className="text-muted-foreground mt-4 leading-relaxed">
                                        {about.bio}
                                    </p>

                                    <div className="mt-6 space-y-2 text-muted-foreground">
                                        <div className="flex items-center justify-center md:justify-start gap-2">
                                            <Mail className="h-4 w-4" />
                                            <a
                                                href={`mailto:${about.email}`}
                                                className="hover:text-primary transition-colors"
                                            >
                                                {about.email}
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center md:justify-start gap-2">
                                            <Phone className="h-4 w-4" />
                                            <span>{about.phone}</span>
                                        </div>
                                        <div className="flex items-center justify-center md:justify-start gap-2">
                                            <MapPin className="h-4 w-4" />
                                            <span>{about.location}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                                        <a href={about.social_links.github} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="sm">
                                                <Github className="h-4 w-4 mr-2" /> GitHub
                                            </Button>
                                        </a>
                                        <a href={about.social_links.linkedin} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="sm">
                                                <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                                            </Button>
                                        </a>
                                        <a href={about.resume_url} target="_blank" rel="noopener noreferrer">
                                            <Button size="sm">
                                                <Download className="h-4 w-4 mr-2" /> Resume
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Experience & Education */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="shadow-md border border-border bg-card">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-semibold text-foreground">
                                        Experience
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {about.experience.map((exp, i) => (
                                        <div key={i} className="mb-6 last:mb-0">
                                            <h3 className="font-semibold text-lg text-foreground">
                                                {exp.position}
                                            </h3>
                                            <p className="text-primary">{exp.company}</p>
                                            <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {exp.description}
                                            </p>
                                            {i < about.experience.length - 1 && <Separator className="my-6" />}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card className="shadow-md border border-border bg-card">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-semibold text-foreground">
                                        Education
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {about.education.map((edu, i) => (
                                        <div key={i} className="mb-6 last:mb-0">
                                            <h3 className="font-semibold text-lg text-foreground">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-primary">{edu.institution}</p>
                                            <p className="text-sm text-muted-foreground">{edu.period}</p>
                                            {i < about.education.length - 1 && <Separator className="my-6" />}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Card className="shadow-md border border-border bg-card">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-foreground">
                                    Skills
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-3">
                                    {about.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-all"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

