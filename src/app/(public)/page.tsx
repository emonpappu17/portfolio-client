import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Hero from '@/components/home/Hero';
import { IAbout } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "EmonDev | Full-Stack Web Developer",
  description:
    "Assalamualaikum, I am Emon Howlader — a full‑stack web developer building clean, responsive, and user‑friendly applications with Next.js, React, Node.js and modern web technologies.",
  keywords: ["Full-Stack Developer", "Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Portfolio"],
  authors: [{ name: "Emon Howlader" }],
  creator: "EmonDev",
};


const HomePage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/about`, {
    cache: "force-cache"
  })
  const data = await res.json();
  const about = data?.data as IAbout

  return (
    <main>
      <Hero></Hero>
      <About about={about}></About>
      <Contact></Contact>
    </main>
  );
};

export default HomePage;
