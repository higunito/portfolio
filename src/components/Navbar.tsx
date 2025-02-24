"use client";

import Link from 'next/link';
import { HiBars3 } from "react-icons/hi2";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full flex items-center justify-between bg-gray-800 p-6 z-50">
      <div className="flex items-center">
        <Link href="/" className="text-white text-2xl font-bold">HomePage</Link>
      </div>
      <div className="hidden md:flex flex-1 justify-center space-x-4">
        <Link href="/" className="text-white hover:text-gray-500 mx-2 text-lg">◼︎Home</Link>
        <Link href="/about" className="text-white hover:text-gray-500 mx-2 text-lg">◼︎About</Link>
        <Link href="/experience" className="text-white hover:text-gray-500 mx-2 text-lg">◼︎Experience</Link>
        <Link href="/portfolio" className="text-white hover:text-gray-500 mx-2 text-lg">◼︎Portfolio</Link>
        <Link href="/blog" className="text-white hover:text-gray-500 mx-2 text-lg">◼︎Blog</Link>
        <Link href="/contact" className="text-white hover:text-gray-500 mx-2 text-lg">◼︎Contact</Link>
      </div>
      <div className="md:hidden">
        <HiBars3 size={30} color='white' onClick={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 md:hidden">
          <Link href="/" className="text-white hover:text-gray-500 text-lg">◼︎Home</Link>
          <Link href="/about" className="text-white hover:text-gray-500 text-lg">◼︎About</Link>
          <Link href="/experience" className="text-white hover:text-gray-500 text-lg">◼︎Experience</Link>
          <Link href="/portfolio" className="text-white hover:text-gray-500 text-lg">◼︎Portfolio</Link>
          <Link href="/blog" className="text-white hover:text-gray-500 text-lg">◼︎Blog</Link>
          <Link href="/contact" className="text-white hover:text-gray-500 text-lg">◼︎Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;