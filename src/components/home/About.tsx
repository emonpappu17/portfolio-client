/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, MailIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { IAbout } from "@/types";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
};

// Small helper to avoid repeating motion props
const MotionDiv = ({ children, ...props }: any) => (
    <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        {...props}
    >
        {children}
    </motion.div>
);

const About = ({ about }: { about: IAbout }) => {
    return (
        <section id="about" className="py-14 relative overflow-hidden">
            {/* Section Heading */}
            <MotionDiv className="text-center mb-16 p-4">
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                    About Me
                </h2>
                <div className="mt-3 h-1 w-16 mx-auto rounded-full bg-primary" />
                <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                    A quick look into my journey, skills, and what drives my passion for
                    creating meaningful digital experiences.
                </p>
            </MotionDiv>

            <div className="mx-auto max-w-6xl px-6 md:px-12 grid gap-10 md:grid-cols-2">
                {/* Profile Card */}
                <MotionDiv className="flex flex-col items-center justify-center rounded-2xl bg-card/40 border border-border/50 p-10 shadow-sm">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
                        <Image
                            src={about.image}
                            alt={about.fullName}
                            fill
                            priority
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
                        />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                        {about.fullName}
                    </h2>
                    <p className="text-primary font-medium">{about.title}</p>

                    <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                        <p className="flex items-center justify-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            {about.email}
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            {about.phone}
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            {about.location}
                        </p>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <motion.a
                            href={about.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Badge
                                variant="outline"
                                className="p-2 rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                            >
                                <Github className="h-5 w-5 text-foreground" />
                            </Badge>
                        </motion.a>
                        <motion.a
                            href={about.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Badge
                                variant="outline"
                                className="p-2 rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                            >
                                <Linkedin className="h-5 w-5 text-foreground" />
                            </Badge>
                        </motion.a>
                        <motion.a
                            href={`mailto:${about.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Badge
                                variant="outline"
                                className="p-2 rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                            >
                                <MailIcon className="h-5 w-5 text-foreground" />
                            </Badge>
                        </motion.a>
                    </div>
                </MotionDiv>

                {/* Details Card */}
                <MotionDiv
                    className="rounded-2xl bg-card/40 border border-border/50 md:p-10 p-4 shadow-md"
                    transition={{ delay: 0.1 }}
                >
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        Who I Am
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        {about.bio}
                    </p>

                    {/* Education */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold tracking-tight text-foreground">
                            Education
                        </h3>

                        <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                            <div>
                                <p className="font-medium text-foreground">
                                    B.A. (Hons) in Political Science
                                </p>
                                <p>
                                    Government Titumir College, Dhaka <br />
                                    <span className="text-sm text-muted-foreground">
                                        (2024 – 2028)
                                    </span>
                                </p>
                            </div>

                            <div>
                                <p className="font-medium text-foreground">
                                    Higher Secondary Certificate (HSC) – Arts
                                </p>
                                <p>
                                    BAF Shaheen College, Dhaka <br />
                                    GPA: 4.33 / 5.00 <br />
                                    <span className="text-sm text-muted-foreground">
                                        Completed: 2023
                                    </span>
                                </p>
                            </div>

                            <div>
                                <p className="font-medium text-foreground">
                                    Secondary School Certificate (SSC) – Arts
                                </p>
                                <p>
                                    BAF Shaheen College, Dhaka <br />
                                    GPA: 4.39 / 5.00 <br />
                                    <span className="text-sm text-muted-foreground">
                                        Completed: 2021
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold tracking-tight text-foreground">
                            Skills
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {about.skills.map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-sm">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Passion Section */}
                    {about.whatILove && (
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold tracking-tight text-foreground">
                                What I Love to Build
                            </h3>
                            <p className="mt-2 text-muted-foreground leading-relaxed">
                                {about.whatILove}
                            </p>
                        </div>
                    )}
                </MotionDiv>
            </div>
        </section>
    );
};

export default About;


