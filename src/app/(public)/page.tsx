import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Hero from '@/components/home/Hero';
import { baseUrl } from '@/config/baseUrl';
import { IAbout } from '@/types';
import React from 'react';

const HomePage = async () => {
  const res = await fetch(`${baseUrl}/about`, {
    cache: "force-cache"
  })
  const data = await res.json();
  const about = data?.data as IAbout
  // console.log(about);

  return (
    <main className=''>
      <Hero></Hero>
      <About about={about}></About>
      <Contact></Contact>
    </main>
  );
};

export default HomePage;
