"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
};

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Section Heading */}
            <motion.div
                className="text-center mb-16 p-4"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
            >
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                    About Me
                </h2>
                <div className="mt-3 h-1 w-16 mx-auto rounded-full bg-primary" />
                <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                    A quick look into my journey, skills, and what drives my passion for
                    creating meaningful digital experiences.
                </p>
            </motion.div>

            <div className="mx-auto max-w-6xl px-6 md:px-12 grid gap-10 md:grid-cols-2">
                {/* Profile Card */}
                <motion.div
                    className="flex flex-col items-center justify-center rounded-2xl bg-card/40 border border-border/50 p-10 shadow-sm"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                >
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
                        <Image
                            src="https://i.ibb.co.com/wNWNGVz1/1737897219247.jpg"
                            alt="Emon Howlader"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                        Emon Howlader
                    </h2>
                    <p className="text-primary font-medium">Full-Stack Web Developer</p>

                    <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                        <p className="flex items-center justify-center gap-2">
                            <Mail className="h-4 w-4 text-primary" /> emonbafsd@gmail.com
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <Phone className="h-4 w-4 text-primary" /> +880 1648-383606
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" /> Dhaka, Bangladesh
                        </p>
                    </div>

                    <div className="mt-6 flex gap-4">
                        {[
                            { icon: Github, href: "https://github.com/emonhowlader" },
                            { icon: Linkedin, href: "https://linkedin.com/in/emonhowlader" },
                        ].map(({ icon: Icon, href }, idx) => (
                            <motion.a
                                key={idx}
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
                </motion.div>

                {/* Details Card */}
                <motion.div
                    className="rounded-2xl bg-card/40 border border-border/50 p-10 shadow-md"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.1 }}
                >
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        Who I Am
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        I’m a passionate full-stack developer who loves crafting digital
                        products that are both functional and delightful. I specialize in
                        building scalable and performant web applications using modern
                        technologies like React, Next.js, Node.js, and Tailwind CSS.
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
                                        Completed: 2024
                                    </span>
                                </p>
                            </div>

                            <div>
                                <p className="font-medium text-foreground">
                                    Secondary School Certificate (SSC) – Arts
                                </p>
                                <p>
                                    BAF Shaheen College, Dhaka <br />
                                    GPA: 4.44 / 5.00 <br />
                                    <span className="text-sm text-muted-foreground">
                                        Completed: 2022
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
                            {[
                                "TypeScript",
                                "JavaScript",
                                "React",
                                "Next.js",
                                "Tailwind CSS",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "PostgreSQL",
                                "Prisma",
                                "Mongoose",
                                "Redux",
                                "Firebase",
                                "Docker",
                                "Git",
                                "GitHub",
                                "Shadcn UI",
                                "Figma",
                            ].map((skill, i) => (
                                <Badge key={i} variant="secondary" className="text-sm">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Passion Section */}
                    {/* <div className="mt-8">
                        <h3 className="text-xl font-semibold tracking-tight text-foreground">
                            What I Love to Build
                        </h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed">
                            I love building responsive web apps, dashboards, and portfolios
                            that combine clean UI design with smooth UX. My goal is to deliver
                            modern, performant, and pixel-perfect digital experiences that
                            leave a lasting impact.
                        </p>
                    </div> */}
                </motion.div>
            </div>
        </section>
    );
};

export default About;




