"use client";

import { useEffect } from 'react';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

const Main = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const light = document.getElementById('light');
      if (light) {
        const lightWidth = light.offsetWidth;
        const lightHeight = light.offsetHeight;
        const scrollY = window.scrollY;
        light.style.left = `${event.clientX - lightWidth / 2}px`;
        light.style.top = `${event.clientY - lightHeight / 2 + scrollY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="pt-24 relative overflow-hidden animate-gradient">
      <div id="light" className="absolute w-[800px] h-[800px] 
              bg-radial-gradient pointer-events-none mix-blend-overlay"></div>
      <div className="relative z-10 container mx-auto p-5">
        <About />
        <Experience />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    </main>
  );
};

export default Main;