// src/hooks/useScrollSidebar.tsx

// imports
import { useState, useEffect } from 'react';

// interface for useScrollSidebar options
interface UseScrollSidebarOptions {
  // optional sections to track for active section
  sections?: string[];
}

// interface for useScrollSidebar result
interface UseScrollSidebarResult {
  showSidebar: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

// custom hook to manage sidebar visibility based on scroll position
export function useScrollSidebar({
  sections = ['hero', 'about', 'experience', 'projects', 'contact']
}: UseScrollSidebarOptions = {}): UseScrollSidebarResult {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0] || 'hero');

  // handle hero section visibility to control sidebar
  useEffect(() => {
    const heroEl = document.getElementById('hero');
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSidebar(!entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // handle scroll to determine active section
  useEffect(() => {
    const handleScroll = () => {
      // determine active section
      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        
        const rect = el.getBoundingClientRect();
        // consider a section active when its top is near the top of the viewport
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    // add scroll event listener w/ passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // initial check
    handleScroll();
    
    // clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // function to scroll to section & control sidebar
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    
    // smooth scroll to section
    element.scrollIntoView({ behavior: 'smooth' });
    
    // force sidebar visibility based on section
    if (sectionId !== 'hero') {
      setShowSidebar(true);
    }
  };

  return {
    showSidebar,
    activeSection,
    scrollToSection
  };
}