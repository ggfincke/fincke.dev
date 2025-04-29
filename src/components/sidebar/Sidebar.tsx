// src/components/Sidebar.tsx

// use client   
'use client';

// import dependencies
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ThemeButton } from '../buttons/ThemeButton';
import { SidebarHeader } from './SidebarHeader';
import { Navigation } from './Navigation';

// main sidebar component
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
      <SidebarHeader 
        logo={
          <Image 
            src="/fincke-logo.svg"
            alt="Fincke Logo"
            width={300}
            height={100}
            className="mb-8"
          />
        } 
      />
      <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />
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