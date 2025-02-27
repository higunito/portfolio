"use client";

import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

const Main = () => {
  return (
    <main className="pt-24">
      <div id="canvas-container">
        <Canvas>
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
        </Canvas>
      </div>

      <About />
      <Experience />
      <Portfolio />
      <Blog />
      <Contact />

    </main>
  );
};

export default Main;