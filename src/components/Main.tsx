"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

const Main = () => {
  return (
    <main className="pt-24 relative">
      <Canvas className="absolute top-0 left-0 w-full h-full z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <OrbitControls />
      </Canvas>
      <div className="relative z-10">
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