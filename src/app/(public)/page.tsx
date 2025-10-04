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
