"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code,
  BookOpen,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const techLogos = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "GraphQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
];

export default function HeroSection() {
  return (
    <div className="relative ">
      {/* Hero Section */}
      <section className=" max-w-6xl mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left max-w-xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600 mt-4 mb-8">
              I build scalable, high-performance web applications with modern technologies and clean design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  About Me
                </Button>
              </Link>
            </div>
            <div className="flex gap-6 justify-center md:justify-start mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Replace this with your real photo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="https://i.ibb.co.com/wNWNGVz1/1737897219247.jpg" // replace with your real image
              alt="Your Name"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Quick Links
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest projects, blogs, and learn more about me
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {[
            {
              title: "Projects",
              desc: "Explore my latest work and side projects",
              href: "/projects",
              color: "blue",
              icon: <Code className="h-7 w-7 text-blue-600" />,
            },
            {
              title: "Blog",
              desc: "Read my thoughts on web development and tech trends",
              href: "/blogs",
              color: "cyan",
              icon: <BookOpen className="h-7 w-7 text-cyan-600" />,
            },
            {
              title: "About",
              desc: "Learn more about my background and experience",
              href: "/about",
              color: "teal",
              icon: <Briefcase className="h-7 w-7 text-teal-600" />,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >

              <Card className="group relative flex flex-col flex-1 border border-border/50 hover:border-transparent bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-${item.color}-500/10 to-${item.color}-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />

                <CardHeader className="relative z-10 flex-grow">
                  <div
                    className={`w-12 h-12 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-900/30 flex items-center justify-center mb-4`}
                  >
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 mt-auto">
                  <Link href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-between group-hover:text-${item.color}-600 transition-colors"
                    >
                      Go to {item.title}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Tech Stack Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build performant, modern web applications
          </p>
        </motion.div>

        <div className="backdrop-blur-lg border border-border/50 rounded-3xl shadow-xl p-10 md:p-14 bg-card/50 ">
          <div className="flex flex-wrap justify-center gap-10">
            {techLogos.map((tech, i) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src={tech.url}
                  alt={tech.name}
                  width={56}
                  height={56}
                  className="object-contain"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
