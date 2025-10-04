// import React from 'react';

// const AboutPage = async () => {
//     // await new Promise((resolve) => setTimeout(resolve, 3000));
//     // throw new Error("Test error for error.tsx");

//     return (
//         <div>
//             <h1>AboutPage</h1>
//         </div>
//     );
// };

// export default AboutPage;



"use client";

import Navbar from "@/components/Navbar";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Mail,
    Phone,
    MapPin,
    Download,
    Github,
    Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    // 🔹 Fake professional data for now
    const about = {
        name: "Emon Howlader",
        title: "Full Stack Developer",
        profile_image:
            "https://avatars.githubusercontent.com/u/9919?s=280&v=4",
        bio: "I’m a passionate full stack developer specializing in building scalable, modern, and user-centric web applications using cutting-edge technologies like Next.js, TypeScript, and Node.js. I focus on clean code, performance, and a seamless user experience.",
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
                    "Building enterprise-grade applications with Next.js, Express, and PostgreSQL. Focused on performance optimization, reusable component architecture, and API integrations.",
            },
            {
                position: "Frontend Developer",
                company: "Pixelwave Studio",
                period: "2021 – 2023",
                description:
                    "Developed highly interactive and responsive web interfaces using React, Tailwind CSS, and TypeScript. Collaborated with backend teams to build seamless REST APIs.",
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
        <div className="mt-10">
            {/* <Navbar /> */}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 py-12"
            >
                <div className="max-w-5xl mx-auto">
                    {/* Profile Card */}
                    <Card className="mb-12 shadow-xl border-blue-100">
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex-shrink-0"
                                >
                                    <Image
                                        src={about.profile_image}
                                        alt={about.name}
                                        width={200}
                                        height={200}
                                        className="rounded-full object-cover shadow-lg border-4 border-white"
                                    />
                                </motion.div>

                                <div className="flex-1 text-center md:text-left">
                                    <h1 className="text-4xl font-bold mb-2 text-gray-900">
                                        {about.name}
                                    </h1>
                                    <p className="text-xl text-blue-600 mb-4">
                                        {about.title}
                                    </p>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {about.bio}
                                    </p>

                                    <div className="space-y-2 mb-6 text-gray-600">
                                        <div className="flex items-center justify-center md:justify-start gap-2">
                                            <Mail className="h-4 w-4" />
                                            <a
                                                href={`mailto:${about.email}`}
                                                className="hover:text-blue-600 transition-colors"
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

                                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                        <a
                                            href={about.social_links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button variant="outline" size="sm">
                                                <Github className="h-4 w-4 mr-2" />
                                                GitHub
                                            </Button>
                                        </a>
                                        <a
                                            href={about.social_links.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button variant="outline" size="sm">
                                                <Linkedin className="h-4 w-4 mr-2" />
                                                LinkedIn
                                            </Button>
                                        </a>
                                        <a
                                            href={about.resume_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button size="sm">
                                                <Download className="h-4 w-4 mr-2" />
                                                Resume
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Experience & Education */}
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="shadow-lg border-cyan-100">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-semibold">
                                        Experience
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {about.experience.map((exp, i) => (
                                        <div key={i} className="mb-6 last:mb-0">
                                            <h3 className="font-semibold text-lg text-gray-900">
                                                {exp.position}
                                            </h3>
                                            <p className="text-blue-600">{exp.company}</p>
                                            <p className="text-sm text-gray-500 mb-2">
                                                {exp.period}
                                            </p>
                                            <p className="text-gray-600">{exp.description}</p>
                                            {i < about.experience.length - 1 && (
                                                <Separator className="my-6" />
                                            )}
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
                            <Card className="shadow-lg border-teal-100">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-semibold">
                                        Education
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {about.education.map((edu, i) => (
                                        <div key={i} className="mb-6 last:mb-0">
                                            <h3 className="font-semibold text-lg text-gray-900">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-blue-600">{edu.institution}</p>
                                            <p className="text-sm text-gray-500">
                                                {edu.period}
                                            </p>
                                            {i < about.education.length - 1 && (
                                                <Separator className="my-6" />
                                            )}
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
                        <Card className="shadow-lg border-blue-100">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold">
                                    Skills
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-3">
                                    {about.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="px-4 py-2 text-sm hover:scale-105 transition-transform"
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

            <footer className="border-t mt-16 py-8 bg-white/60 backdrop-blur-md">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    <p>
                        &copy; 2025 <span className="font-semibold">Emon Howlader</span>.
                        All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
