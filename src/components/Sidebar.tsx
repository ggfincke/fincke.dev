// src/components/Sidebar.tsx

// use client   
'use client';

// import dependencies
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ThemeButton } from './ThemeButton';

// sidebar component
export function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');

  // update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'resume', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed right-0 top-0 h-screen w-72 flex flex-col justify-center p-8 bg-[var(--color-background-alt)] border-l border-[var(--color-border)]">
      <div className="mb-8 flex flex-col items-center">
        <Image 
          src="/fincke-logo.svg"
          alt="Fincke Logo"
          width={300}
          height={100}
          className="mb-8"
        />
        <h1 className="text-3xl font-bold text-[var(--color-text-light)] text-center">
          Garrett Fincke
        </h1>
        <h2 className="text-xl font-medium text-[var(--color-primary)] mt-2 text-center">
          Software Engineer
        </h2>
        <p className="mt-4 text-[var(--color-text)] text-sm text-center">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>
      
      <nav className="flex flex-col space-y-4 my-8 items-center">
        <button 
          onClick={() => scrollToSection('about')}
          className={`text-center px-4 py-2 border-l-2 transition-colors duration-200 w-full ${
            activeSection === 'about' 
              ? 'border-[var(--color-primary)] text-[var(--color-primary)]' 
              : 'border-transparent text-[var(--color-text)] hover:text-[var(--color-text-light)]'
          }`}
        >
          About
        </button>
        
        <button 
          onClick={() => scrollToSection('resume')}
          className={`text-center px-4 py-2 border-l-2 transition-colors duration-200 w-full ${
            activeSection === 'resume' 
              ? 'border-[var(--color-primary)] text-[var(--color-primary)]' 
              : 'border-transparent text-[var(--color-text)] hover:text-[var(--color-text-light)]'
          }`}
        >
          Resume
        </button>
        
        <button 
          onClick={() => scrollToSection('projects')}
          className={`text-center px-4 py-2 border-l-2 transition-colors duration-200 w-full ${
            activeSection === 'projects' 
              ? 'border-[var(--color-primary)] text-[var(--color-primary)]' 
              : 'border-transparent text-[var(--color-text)] hover:text-[var(--color-text-light)]'
          }`}
        >
          Projects
        </button>
        
        <button 
          onClick={() => scrollToSection('contact')}
          className={`text-center px-4 py-2 border-l-2 transition-colors duration-200 w-full ${
            activeSection === 'contact' 
              ? 'border-[var(--color-primary)] text-[var(--color-primary)]' 
              : 'border-transparent text-[var(--color-text)] hover:text-[var(--color-text-light)]'
          }`}
        >
          Contact
        </button>
      </nav>
      
      <div className="mt-auto mb-8 flex justify-center">
        <ThemeButton 
          variant="primary"
          onClick={() => scrollToSection('contact')}
        >
          Get in Touch
        </ThemeButton>
      </div>
    </aside>
  );
}