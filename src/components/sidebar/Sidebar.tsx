// src/components/sidebar/Sidebar.tsx

// use client   
'use client';

// import dependencies
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ThemeButton } from '../buttons/ThemeButton';
import { SidebarHeader } from './SidebarHeader';
import { Navigation } from './Navigation';

// interface for sidebar props
interface SidebarProps {
  // optional custom active section & scroll handler
  // if not provided, the component will use its own internal logic
  customActiveSection?: string;
  onSectionClick?: (sectionId: string) => void;
}

// main sidebar component
export function Sidebar({ customActiveSection, onSectionClick }: SidebarProps) {
  const [activeSection, setActiveSection] = useState(customActiveSection || 'hero');

  // update active section based on scroll position (if no custom handler is provided)
  useEffect(() => {
    // if customActiveSection is provided, use that instead of present logic
    if (customActiveSection) {
      setActiveSection(customActiveSection);
      return;
    }

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
    handleScroll(); // initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [customActiveSection]);

  // smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    // if custom click handler is provided, use that
    if (onSectionClick) {
      onSectionClick(sectionId);
      return;
    }

    // default scroll behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="h-screen w-72 flex flex-col bg-[var(--color-background-alt)] border-r border-[var(--color-border)]">
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
    </aside>
  );
}