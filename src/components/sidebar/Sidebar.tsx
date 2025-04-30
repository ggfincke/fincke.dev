// src/components/sidebar/Sidebar.tsx

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
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      
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
    <aside className="fixed left-0 top-0 h-screen w-72 flex flex-col bg-[var(--color-background-alt)] border-r border-[var(--color-border)]">
      {/* top section w/ logo */}
      <div className="pt-12 px-6">
        <SidebarHeader 
          logo={
            <Image 
              src="/fincke-logo-alt.svg"
              alt="Fincke Logo"
              width={600}
              height={200}
              className="mb-4"
            />
          } 
        />
      </div>
      
      {/* spacer to push nav up */}
      <div className="flex-1 flex flex-col justify-center w-full mt-[-180px]">
        <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />
      </div>
      
      {/* bottom section w/ button
      <div className="px-6 pb-8 mt-auto">
        <ThemeButton 
          variant="primary"
          onClick={() => scrollToSection('contact')}
          className="w-full"
        >
          Get in Touch
        </ThemeButton>
      </div> */}
    </aside>
  );
}