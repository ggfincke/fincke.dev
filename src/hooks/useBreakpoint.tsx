// src/hooks/useBreakpoint.tsx

import { useState, useEffect } from 'react';

// Tailwind CSS breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

// interface for useBreakpoint result
export interface UseBreakpointResult {
  isMobile: boolean;     // < md (768px)
  isTablet: boolean;     // >= md && < lg (768px - 1023px)
  isDesktop: boolean;    // >= lg (1024px)
  isLarge: boolean;      // >= xl (1280px)
  currentBreakpoint: Breakpoint | null;
  isAbove: (breakpoint: Breakpoint) => boolean;
  isBelow: (breakpoint: Breakpoint) => boolean;
}

// Custom hook for responsive breakpoint detection
export function useBreakpoint(): UseBreakpointResult 
{
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // init window width
  useEffect(() => 
{
    const getWindowWidth = () => 
{
      if (typeof window !== 'undefined') 
{
        return window.innerWidth;
      }
      return 0;
    };

    // Set initial width
    setWindowWidth(getWindowWidth());

    const handleResize = () => 
{
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => 
{
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // helper funcs
  const isAbove = (breakpoint: Breakpoint): boolean => 
{
    return windowWidth >= BREAKPOINTS[breakpoint];
  };

  const isBelow = (breakpoint: Breakpoint): boolean => 
{
    return windowWidth < BREAKPOINTS[breakpoint];
  };

  // Determine current breakpoint
  const getCurrentBreakpoint = (): Breakpoint | null => 
{
    if (windowWidth === 0) return null;
    
    if (windowWidth >= BREAKPOINTS['2xl']) return '2xl';
    if (windowWidth >= BREAKPOINTS.xl) return 'xl';
    if (windowWidth >= BREAKPOINTS.lg) return 'lg';
    if (windowWidth >= BREAKPOINTS.md) return 'md';
    if (windowWidth >= BREAKPOINTS.sm) return 'sm';
    return null; 
  };

  return {
    isMobile: isBelow('md'),
    isTablet: isAbove('md') && isBelow('lg'),
    isDesktop: isAbove('lg'),
    isLarge: isAbove('xl'),
    currentBreakpoint: getCurrentBreakpoint(),
    isAbove,
    isBelow,
  };
}