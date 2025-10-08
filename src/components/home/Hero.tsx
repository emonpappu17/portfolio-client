"use client";
import { Button } from "@/components/ui/button";
import { IconCloud } from "@/components/ui/icon-cloud";
import { motion } from "framer-motion";
import { FolderGit2, Mail } from "lucide-react";
import Link from "next/link";

const slugs = [
    "typescript",
    "javascript",
    "tailwindcss",
    "react",
    "mongodb",
    "mongoose",
    "nextdotjs",
    "html5",
    "css",
    "nodedotjs",
    "express",
    "prisma",
    "postgresql",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "figma",
    "shadcnui",
    "postman",
    "zod",
    "jsonwebtokens",
];

const Hero = () => {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
    );

    return (
        <section className="relative overflow-hidden">
            <div className="relative py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 md:px-12">
                    {/* Section 1 */}
                    <motion.div
                        className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="mt-8 text-4xl font-semibold md:text-5xl xl:text-5xl xl:[line-height:1.125]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Assalamualaikum <br /> I am Emon Howlader
                        </motion.h1>

                        <motion.p
                            className="mx-auto mt-6 max-w-2xl text-wrap text-lg text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            A full‑stack web developer focused on building clean, responsive,
                            and user‑friendly applications. I craft modern interfaces with
                            React, Next.js, and Tailwind CSS, and build secure backends with
                            Node.js, Express, and databases like MongoDB and PostgreSQL. My
                            goal is to deliver smooth, scalable digital experiences.
                        </motion.p>

                        <motion.div
                            className="mt-8 flex justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                <Button asChild>
                                    <Link href="#projects">
                                        <FolderGit2 className="size-4" />
                                        <span className="text-nowrap">View Projects</span>
                                    </Link>
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                <Button variant="outline" asChild>
                                    <Link href="#contact">
                                        <Mail className="size-4" />
                                        <span className="text-nowrap">Contact Me</span>
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        className="x-auto relative mx-auto  max-w-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 -top-8 left-1/2 -z-20 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
                        <div className="absolute inset-x-0 top-24 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-100 blur-3xl dark:bg-white/10"></div>
                        <div className="flex justify-center">
                            <IconCloud images={images} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
