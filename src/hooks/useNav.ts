// src/hooks/useNav.ts
// * navigation hook w/ scroll tracking & sidebar management

import { useState, useEffect, useCallback } from 'react';

import { SECTION_IDS } from '~/config/navSections';
import { useBreakpoint } from '~/hooks/useBreakpoint';

export interface UseNavOptions {
  // Sections to track for active section detection (defaults to all sections from config)
  sections?: string[];
  // Offset from top to determine when a section is active (default: 100)
  offset?: number;
  // Throttle delay for scroll handling in milliseconds (default: 100)
  throttleDelay?: number;
}

export interface UseNavResult {
  showSidebar: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  isScrolling: boolean;
}

// * main navigation hook
export function useNav({
  sections = SECTION_IDS,
  offset = 100,
  throttleDelay = 100
}: UseNavOptions = {}): UseNavResult 
{
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0] || 'hero');
  const [isScrolling, setIsScrolling] = useState(false);
  const { isDesktop } = useBreakpoint();

  // throttled scroll handler for performance
  const handleScroll = useCallback(() => 
{
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    setTimeout(() => 
{
      // Determine active section based on scroll position
      for (const section of sections) 
{
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        
        // A section is active when its top is near the top of the viewport
        // and we're actually within the section boundaries
        if (rect.top <= offset && rect.bottom >= offset) 
{
          setActiveSection(section);
          
          // Set sidebar visibility based on section and screen size
          if (isDesktop) 
{
            // Show sidebar when not on hero section
            setShowSidebar(section !== 'hero');
          } 
else 
{
            // Always hide sidebar on mobile/tablet
            setShowSidebar(false);
          }
          
          break;
        }
      }
      
      setIsScrolling(false);
    }, throttleDelay);
  }, [isScrolling, sections, offset, throttleDelay, isDesktop]);

  // setup scroll event listener
  useEffect(() => 
{
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check to set correct state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => 
{
    const element = document.getElementById(sectionId);
    if (!element) 
{
      console.warn(`Section with id "${sectionId}" not found`);
      return;
    }
    
    // Smooth scroll to the section
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    // Update sidebar visibility immediately for better UX
    if (isDesktop && sectionId !== 'hero') 
{
      setShowSidebar(true);
    }
  }, [isDesktop]);

  return {
    showSidebar,
    activeSection,
    scrollToSection,
    isScrolling
  };
}