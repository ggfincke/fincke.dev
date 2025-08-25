// src/hooks/useMediaQuery.tsx

import { useState, useEffect } from 'react';

// Custom hook for generic media query handling
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Return false if we're in SSR
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(query);
    
    // Set initial state
    setMatches(mediaQueryList.matches);

    // Define the event handler
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add event listener
    mediaQueryList.addEventListener('change', handleChange);

    // Clean up
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

// Convenience hooks for common media queries
export const usePrefersDark = () => useMediaQuery('(prefers-color-scheme: dark)');
export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');
export const useIsTouch = () => useMediaQuery('(pointer: coarse)');
export const useIsHover = () => useMediaQuery('(hover: hover)');

// Orientation hooks
export const useIsLandscape = () => useMediaQuery('(orientation: landscape)');
export const useIsPortrait = () => useMediaQuery('(orientation: portrait)');

// Common responsive media queries as hooks
export const useIsSmallScreen = () => useMediaQuery('(max-width: 639px)');
export const useIsMediumScreen = () => useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
export const useIsLargeScreen = () => useMediaQuery('(min-width: 1024px)');
export const useIsExtraLargeScreen = () => useMediaQuery('(min-width: 1280px)');