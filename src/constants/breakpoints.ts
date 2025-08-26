// src/constants/breakpoints.ts
// Responsive breakpoint constants & utilities for consistent viewport handling

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

// get pixel value for breakpoint
export function getBreakpointValue(breakpoint: Breakpoint): number 
{
  return BREAKPOINTS[breakpoint];
}

// generate media query strings w/ min/max support
export function getMediaQuery(breakpoint: Breakpoint, type: 'min' | 'max' = 'min'): string 
{
  const value = BREAKPOINTS[breakpoint];
  const operator = type === 'min' ? 'min-width' : 'max-width';
  const queryValue = type === 'max' ? value - 1 : value;
  return `(${operator}: ${queryValue}px)`;
}

// common responsive media queries
export const RESPONSIVE_QUERIES = {
  mobile: getMediaQuery('md', 'max'),
  tablet: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
  desktop: getMediaQuery('lg'),
  large: getMediaQuery('xl'),
} as const;

// image sizing for responsive images
export const IMAGE_SIZES = {
  mobile: `(max-width: ${BREAKPOINTS.md}px) 100vw`,
  tablet: `(max-width: ${BREAKPOINTS.lg}px) 100vw`,
  desktop: `33vw`,
} as const;

// generate complete sizes string for responsive images
export function getImageSizes(mobileSizes?: string, tabletSizes?: string, desktopSizes?: string): string 
{
  return [
    IMAGE_SIZES.mobile.replace('100vw', mobileSizes || '100vw'),
    IMAGE_SIZES.tablet.replace('100vw', tabletSizes || '50vw'),
    desktopSizes || IMAGE_SIZES.desktop
  ].join(', ');
}