// import HeroSection from "@/components/hero-section";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { ArrowRight, BookOpen, Briefcase, Code, Github, Linkedin, Mail } from "lucide-react";
// import Link from "next/link";

// const HomePage = () => {
//   return (
//     // <div className="p-8 ">
//     //   <h1 className="text-3xl font-bold">Now you can see me 👋</h1>
//     // </div>
//     // <HeroSection></HeroSection>

//     <div className="min-h-screen ">
//       {/* <Navbar /> */}
//       {/* <HeroSection></HeroSection> */}
//       <div
//         aria-hidden
//         className=" inset-0 isolate hidden opacity-65 contain-strict lg:block fixed">
//         <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
//         <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
//         <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
//       </div>
//       <section className="container mx-auto px-4 py-20 md:py-32">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
//             Full Stack Developer
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
//             Crafting beautiful, performant, and user-friendly web applications
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
//             <Link href="/projects">
//               <Button size="lg" className="w-full sm:w-auto">
//                 View Projects
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//             <Link href="/about">
//               <Button size="lg" variant="outline" className="w-full sm:w-auto">
//                 About Me
//               </Button>
//             </Link>
//           </div>
//           <div className="flex gap-6 justify-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
//               <Github className="h-6 w-6" />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
//               <Linkedin className="h-6 w-6" />
//             </a>
//             <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
//               <Mail className="h-6 w-6" />
//             </a>
//           </div>
//         </div>
//       </section>

//       <section className="container mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           <Card className="border-2 hover:border-blue-600 transition-all duration-300 hover:shadow-lg">
//             <CardHeader>
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                 <Code className="h-6 w-6 text-blue-600" />
//               </div>
//               <CardTitle>Projects</CardTitle>
//               <CardDescription>
//                 Explore my latest work and side projects
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Link href="/projects">
//                 <Button variant="ghost" className="w-full justify-between">
//                   View Projects
//                   <ArrowRight className="h-4 w-4" />
//                 </Button>
//               </Link>
//             </CardContent>
//           </Card>

//           <Card className="border-2 hover:border-cyan-600 transition-all duration-300 hover:shadow-lg">
//             <CardHeader>
//               <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
//                 <BookOpen className="h-6 w-6 text-cyan-600" />
//               </div>
//               <CardTitle>Blog</CardTitle>
//               <CardDescription>
//                 Read my thoughts on web development
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Link href="/blogs">
//                 <Button variant="ghost" className="w-full justify-between">
//                   Read Blog
//                   <ArrowRight className="h-4 w-4" />
//                 </Button>
//               </Link>
//             </CardContent>
//           </Card>

//           <Card className="border-2 hover:border-teal-600 transition-all duration-300 hover:shadow-lg">
//             <CardHeader>
//               <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
//                 <Briefcase className="h-6 w-6 text-teal-600" />
//               </div>
//               <CardTitle>About</CardTitle>
//               <CardDescription>
//                 Learn more about my experience and skills
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Link href="/about">
//                 <Button variant="ghost" className="w-full justify-between">
//                   About Me
//                   <ArrowRight className="h-4 w-4" />
//                 </Button>
//               </Link>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       <section className="container mx-auto px-4 py-16">
//         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
//           <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
//           <p className="text-gray-600 mb-6">
//             Technologies I work with on a daily basis
//           </p>
//           <div className="flex flex-wrap gap-3">
//             {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS', 'GraphQL'].map((tech) => (
//               <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
//                 {tech}
//               </Badge>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;


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
      {/* Decorative gradient circles */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" /> */}
      <div
        aria-hidden
        className=" inset-0 isolate hidden opacity-65 contain-strict lg:block fixed">
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-36 relative z-10">
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

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Projects",
              desc: "Explore my latest work and side projects",
              href: "/projects",
              color: "blue",
              icon: <Code className="h-6 w-6 text-blue-600" />,
            },
            {
              title: "Blog",
              desc: "Read my thoughts on web development and tech trends",
              href: "/blogs",
              color: "cyan",
              icon: <BookOpen className="h-6 w-6 text-cyan-600" />,
            },
            {
              title: "About",
              desc: "Learn more about my background and experience",
              href: "/about",
              color: "teal",
              icon: <Briefcase className="h-6 w-6 text-teal-600" />,
            },
          ].map((item) => (
            <Card
              key={item.title}
              className={`border-2 hover:border-${item.color}-600 transition-all duration-300 hover:shadow-xl`}
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4`}
                >
                  {item.icon}
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={item.href}>
                  <Button variant="ghost" className="w-full justify-between">
                    Go to {item.title}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-4 text-center">Tech Stack</h2>
          <p className="text-gray-600 mb-8 text-center">
            Tools and technologies I use to build performant, modern applications
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {techLogos.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src={tech.url}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <span className="text-sm font-medium text-gray-700">
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


// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { ArrowRight, BookOpen, Briefcase, Code, Github, Linkedin, Mail } from 'lucide-react';
// import Image from 'next/image';
// import React from 'react';

// const page = () => {
//   return (
//     <div>
//       <section className="min-h-screen flex items-center justify-center ">
//         <div className="container mx-auto px-4 py-20 md:py-32">
//           <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
//             <div className="text-center md:text-left animate-in fade-in slide-in-from-left duration-1000">
//               <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
//                 Full Stack Developer
//               </h1>
//               <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
//                 Crafting beautiful, performant, and user-friendly web applications
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 animate-in fade-in slide-in-from-left duration-1000 delay-200">
//                 <a href="/projects">
//                   <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
//                     View Projects
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Button>
//                 </a>
//                 <a href="/about">
//                   <Button size="lg" variant="outline" className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
//                     About Me
//                   </Button>
//                 </a>
//               </div>
//               <div className="flex gap-6 justify-center md:justify-start animate-in fade-in slide-in-from-left duration-1000 delay-300">
//                 <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
//                   <Github className="h-6 w-6" />
//                 </a>
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
//                   <Linkedin className="h-6 w-6" />
//                 </a>
//                 <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
//                   <Mail className="h-6 w-6" />
//                 </a>
//               </div>
//             </div>
//             <div className="flex justify-center md:justify-end animate-in fade-in slide-in-from-right duration-1000 delay-100">
//               <div className="relative">
//                 {/* <Image
//                   src="https://i.ibb.co.com/wNWNGVz1/1737897219247.jpg"
//                   alt="Profile Picture"
//                   priority
//                   fill
//                   className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white ring-4 ring-blue-100 hover:ring-blue-200 transition-all duration-500 transform hover:scale-105"
//                 /> */}


//                 <Image
//                   src="https://i.ibb.co.com/wNWNGVz1/1737897219247.jpg" //replace with your real image
//                   alt="Your Name"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//                 <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
//                   <Code className="h-8 w-8 text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="container mx-auto px-4 py-20">
//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:border-blue-200 hover:-translate-y-2">
//             <CardHeader className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
//                 <Code className="h-8 w-8 text-white" />
//               </div>
//               <CardTitle className="text-xl font-semibold">Projects</CardTitle>
//               <CardDescription className="text-gray-600">
//                 Explore my latest work and side projects
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="pt-0">
//               <a href="/projects" className="block">
//                 <Button variant="ghost" className="w-full justify-center group">
//                   View Projects
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                 </Button>
//               </a>
//             </CardContent>
//           </Card>

//           <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:border-cyan-200 hover:-translate-y-2">
//             <CardHeader className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
//                 <BookOpen className="h-8 w-8 text-white" />
//               </div>
//               <CardTitle className="text-xl font-semibold">Blog</CardTitle>
//               <CardDescription className="text-gray-600">
//                 Read my thoughts on web development
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="pt-0">
//               {/* <a href="/blogs" className="block">
              
//               </a> */}
//               <Button variant="ghost" className="w-full justify-center group">
//                 Read Blog
//                 <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//               </Button>
//             </CardContent>
//           </Card>

//           <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:border-teal-200 hover:-translate-y-2">
//             <CardHeader className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
//                 <Briefcase className="h-8 w-8 text-white" />
//               </div>
//               <CardTitle className="text-xl font-semibold">About</CardTitle>
//               <CardDescription className="text-gray-600">
//                 Learn more about my experience and skills
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="pt-0">
//               <a href="/about" className="block">
//                 <Button variant="ghost" className="w-full justify-center group">
//                   About Me
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                 </Button>
//               </a>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       <section className="container mx-auto px-4 py-20">
//         <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
//               Tech Stack
//             </h2>
//             <p className="text-xl text-gray-600">
//               Technologies I work with on a daily basis
//             </p>
//           </div>
//           <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
//             {[
//               { name: 'React', src: 'https://cdn.simpleicons.org/react/61DAFB' },
//               { name: 'Next.js', src: 'https://cdn.simpleicons.org/next.js/000000' },
//               { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/3178C6' },
//               { name: 'Node.js', src: 'https://cdn.simpleicons.org/node.js/339933' },
//               { name: 'PostgreSQL', src: 'https://cdn.simpleicons.org/postgresql/416194' },
//               { name: 'Tailwind CSS', src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
//               { name: 'Docker', src: 'https://cdn.simpleicons.org/docker/2496ED' },
//               { name: 'AWS', src: 'https://cdn.simpleicons.org/amazonaws/232F3E' },
//               { name: 'GraphQL', src: 'https://cdn.simpleicons.org/graphql/E10098' }
//             ].map((tech) => (
//               <div
//                 key={tech.name}
//                 className="group cursor-pointer p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 hover:shadow-md"
//               >
//                 <img
//                   src={tech.src}
//                   alt={tech.name}
//                   className="w-12 h-12 md:w-16 md:h-16 object-contain mx-auto group-hover:opacity-80 transition-opacity duration-300"
//                 />
//                 <p className="text-xs font-medium text-gray-700 mt-2 text-center group-hover:text-blue-600 transition-colors duration-300">
//                   {tech.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default page;