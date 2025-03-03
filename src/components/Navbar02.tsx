"use client";

import Link from 'next/link';
import { FaBars, FaRegWindowClose, FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import { useState, useEffect } from 'react';

const sections = ["home", "about", "experience", "portfolio", "blog", "contact"];
const socialLinks = [
  { href: "https://github.com/yourusername", icon: <FaGithub /> },
  { href: "https://twitter.com/yourusername", icon: <FaTwitter /> },
  { href: "https://zenn.dev/yourusername", icon: <SiZenn /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed w-full flex items-center justify-between bg-slate-900 p-4 z-50">

      <div className="flex items-center z-50">
        <Link href="/" className="text-white text-2xl font-bold">HomePage</Link>
      </div>

      <div className="hidden md:flex flex-1 justify-center space-x-4">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => handleScroll(e, section)}
            className={`text-lg mx-2 ${activeSection === section ? 'text-gray-500' : 'text-white hover:text-gray-500'}`}
          >
            ◼{section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <div className="hidden md:flex space-x-4 hover:text-gray-500">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500 text-lg"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <div className="md:hidden">
        {isOpen ? (
          <FaRegWindowClose size={30} onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-500" />
        ) : (
          <FaBars size={30} onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-500" />
        )}
      </div>

      <div className={`absolute top-16 left-0 w-full bg-slate-900 flex flex-col items-center space-y-4 md:hidden pb-4 transition-all duration-300 ease-in-out z-40 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'}`}>
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => handleScroll(e, section)}
            className={`text-lg ${activeSection === section ? 'text-gray-500' : 'text-white hover:text-gray-500'}`}
          >
            ◼︎{section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 text-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;