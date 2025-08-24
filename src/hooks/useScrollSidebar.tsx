// src/hooks/useScrollSidebar.tsx

import { useState, useEffect, useCallback } from 'react';
import { useBreakpoint } from '~/hooks/useBreakpoint';

// interface for useScrollSidebar options
interface UseScrollSidebarOptions {
  // sections to track for active section
  sections?: string[];
  // offset from top to determine when a section is active
  offset?: number;
}

// interface for useScrollSidebar result
interface UseScrollSidebarResult {
  showSidebar: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

// custom hook to manage sidebar visibility based on scroll position
export function useScrollSidebar({
  sections = ['hero', 'about', 'experience', 'projects', 'contact'],
  offset = 100
}: UseScrollSidebarOptions = {}): UseScrollSidebarResult {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0] || 'hero');
  const [scrolling, setScrolling] = useState(false);
  const { isDesktop } = useBreakpoint();

  // throttled scroll handler to improve performance
  const handleScroll = useCallback(() => {
    if (scrolling) return;
    
    setScrolling(true);
    
    setTimeout(() => {
      // determine active section
      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        
        const rect = el.getBoundingClientRect();
        
        // a section is active when its top is near the top of the viewport
        // But also make sure we're actually in the section (not below it)
        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveSection(section);
          
          // set sidebar visibility based on whether we're past the hero section
          // but only on desktop screens
          if (isDesktop) {
            if (section !== 'hero') {
              setShowSidebar(true);
            } else {
              setShowSidebar(false);
            }
          } else {
            // Always hide sidebar on mobile/tablet screens
            setShowSidebar(false);
          }
          
          break;
        }
      }
      
      setScrolling(false);
    }, 100); // throttle to every 100ms
  }, [scrolling, sections, offset, isDesktop]);
  
  // handle scroll to determine active section
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // initial check
    handleScroll();
    
    // clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // function to scroll to section & control sidebar
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    
    // smooth scroll to section
    element.scrollIntoView({ behavior: 'smooth' });
    
    // force sidebar visibility based on section but only on desktop screens
    if (isDesktop && sectionId !== 'hero') {
      setShowSidebar(true);
    }
    
  }, [isDesktop]);

  return {
    showSidebar,
    activeSection,
    scrollToSection
  };
}