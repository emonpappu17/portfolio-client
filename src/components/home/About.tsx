/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IAbout } from "@/types";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MailIcon, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Separator } from "@/components/ui/separator";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
};

const MotionDiv = ({ children, ...props }: any) => (
    <motion.div initial="initial" animate="animate" variants={fadeInUp} {...props}>
        {children}
    </motion.div>
);

const About = ({ about }: { about: IAbout }) => {
    return (
        <section id="about" className="py-16 relative overflow-hidden">
            {/* Section Heading */}
            <MotionDiv className="text-center mb-16 px-4">
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                    About Me
                </h2>
                <div className="mt-3 h-1 w-16 mx-auto rounded-full bg-primary" />
                <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                    A quick look into my journey, skills, and what drives my passion for
                    creating meaningful digital experiences.
                </p>
            </MotionDiv>

            <div className="mx-auto max-w-6xl px-4 md:px-8 grid gap-10 md:grid-cols-2">
                {/* Profile Card */}
                <MotionDiv className="flex flex-col items-center justify-center rounded-2xl bg-card/50 border border-border/60 p-8 md:p-10 shadow-sm backdrop-blur-sm">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 shadow-md">
                        <Image
                            src={about?.image}
                            alt={about?.fullName}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
                        />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground text-center">
                        {about?.fullName}
                    </h2>
                    <p className="text-primary font-medium text-center">{about?.title}</p>

                    {/* Contact Info */}
                    <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                        <p className="flex items-center justify-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            {about?.email}
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            {about?.phone}
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            {about?.location}
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6 flex gap-4">
                        {[
                            { icon: Github, href: about?.github },
                            { icon: Linkedin, href: about?.linkedin },
                            { icon: MailIcon, href: `mailto:${about?.email}` },
                        ]?.map(({ icon: Icon, href }, i) => (
                            <motion.a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Badge
                                    variant="outline"
                                    className="p-2 rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                                >
                                    <Icon className="h-5 w-5 text-foreground" />
                                </Badge>
                            </motion.a>
                        ))}
                    </div>
                </MotionDiv>

                {/* Details Card */}
                <MotionDiv
                    className="rounded-2xl bg-card/50 border border-border/60 p-6 md:p-10 shadow-md backdrop-blur-sm"
                    transition={{ delay: 0.1 }}
                >
                    {/* Bio */}
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        Who I Am
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        {about?.bio}
                    </p>

                    <Separator className="my-8" />

                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight text-foreground">
                            Education
                        </h3>
                        <div className="mt-4 space-y-4">
                            {about?.education?.map((edu, i) => (
                                <div key={i} className="space-y-1">
                                    <p className="font-medium text-foreground">{edu.degree}</p>
                                    <p className="text-muted-foreground text-sm">
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {edu.startYear && edu.endYear && (
                                            <span>
                                                ({edu.startYear} – {edu.endYear})
                                            </span>

                                        )}
                                        {!edu.startYear && edu.endYear && (
                                            <span>
                                                Completed: {edu.endYear}
                                            </span>
                                        )}
                                    </p>

                                    {edu.gpa && (
                                        <p className="text-xs text-muted-foreground">GPA: {edu.gpa}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <Separator className="my-8" />

                    {/* Experience */}
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight text-foreground">
                            Experience
                        </h3>
                        <div className="mt-4 space-y-4">
                            {about?.experiences?.map((exp, i) => (
                                <div key={i}>
                                    <p className="font-medium text-foreground">{exp.title}</p>
                                    <p className="text-muted-foreground text-sm">
                                        {exp.organization}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {exp.startYear} – {exp.endYear ?? "Present"}
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Separator className="my-8" />

                    {/* Skills */}
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight text-foreground">
                            Skills
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {about?.skills?.map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-sm">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {about?.whatILove && (
                        <>
                            <Separator className="my-8" />
                            <div>
                                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                                    What I Love to Do
                                </h3>
                                <p className="mt-3 text-muted-foreground leading-relaxed">
                                    {about?.whatILove}
                                </p>
                            </div>
                        </>
                    )}
                </MotionDiv>
            </div>
        </section>
    );
};

export default About;



