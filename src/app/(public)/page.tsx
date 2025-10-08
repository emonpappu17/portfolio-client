import About from '@/components/home/About';
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
    <main>
      <Hero></Hero>
      <About about={about}></About>
    </main>
  );
};

export default HomePage;
