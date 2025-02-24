"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useEffect } from 'react';
import gsap from 'gsap';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

const Main = () => {
  useEffect(() => {
    gsap.fromTo(
      '.content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <main className="pt-24 relative">
      <Canvas className="absolute top-0 left-0 w-full h-full z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <OrbitControls />
      </Canvas>
      <div className="relative z-10 content">
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