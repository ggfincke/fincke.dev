// src/hooks/useBreakpoint.tsx

import { useMemo, useCallback } from 'react';

import { useSharedBreakpoint, type BreakpointState, type Breakpoint, BREAKPOINTS } from '~/hooks/useSharedBreakpoint';

// Configuration for responsive utilities
export interface ResponsiveConfig 
{
  // Section-specific breakpoints
  mobileBreakpoint?: Breakpoint;
  tabletBreakpoint?: Breakpoint;
  desktopBreakpoint?: Breakpoint;
  
  // Navigation-specific settings
  enableNavUtilities?: boolean;
  enableSectionUtilities?: boolean;
}

// Enhanced interface with all utilities
export interface UseBreakpointResult extends BreakpointState 
{
  // Layout helpers
  shouldShowMobileLayout: boolean;
  shouldShowTabletLayout: boolean;
  shouldShowDesktopLayout: boolean;
  getLayoutType: () => 'mobile' | 'tablet' | 'desktop';
  isCompactLayout: boolean;
  
  // Grid and spacing utilities
  getGridColumns: () => number;
  getSpacing: () => 'sm' | 'md' | 'lg' | 'xl';
  
  // Component sizing helpers
  getImageSize: () => { width: number; height: number };
  getCardWidth: () => string;
  
  // Navigation-specific utilities
  showSidebar: boolean;
  showMobileNav: boolean;
  showDesktopNav: boolean;
  navLayout: 'mobile' | 'tablet' | 'desktop';
  isCompactNav: boolean;
  sidebarWidth: string;
  navSpacing: 'sm' | 'md' | 'lg';
  getNavButtonSize: () => 'sm' | 'md' | 'lg';
  getNavIconSize: () => number;
}

// Enhanced useBreakpoint hook with optional utilities
export function useBreakpoint(config: ResponsiveConfig = {}): UseBreakpointResult 
{
  const {
    mobileBreakpoint = 'md',
    tabletBreakpoint = 'lg',
    desktopBreakpoint = 'xl',
  } = config;

  const breakpointData = useSharedBreakpoint();

  // Section-specific responsive states
  const shouldShowMobileLayout = breakpointData.isBelow(mobileBreakpoint);
  const shouldShowTabletLayout = breakpointData.isAbove(mobileBreakpoint) && breakpointData.isBelow(desktopBreakpoint);
  const shouldShowDesktopLayout = breakpointData.isAbove(tabletBreakpoint);
  const isCompactLayout = shouldShowMobileLayout || shouldShowTabletLayout;

  // Navigation-specific responsive states
  const showMobileNav = breakpointData.isBelow(mobileBreakpoint);
  const showDesktopNav = breakpointData.isAbove(tabletBreakpoint);
  const showSidebar = showDesktopNav;
  const isCompactNav = !showDesktopNav;

  // Layout utilities
  const getLayoutType = useCallback((): 'mobile' | 'tablet' | 'desktop' => 
  {
    if (shouldShowMobileLayout) return 'mobile';
    if (shouldShowTabletLayout) return 'tablet';
    return 'desktop';
  }, [shouldShowMobileLayout, shouldShowTabletLayout]);

  // Navigation layout
  const navLayout: 'mobile' | 'tablet' | 'desktop' = useMemo(() => 
  {
    if (showMobileNav) return 'mobile';
    if (showDesktopNav) return 'desktop';
    return 'tablet';
  }, [showMobileNav, showDesktopNav]);

  // Grid and spacing utilities
  const getGridColumns = useCallback((): number => 
  {
    if (shouldShowMobileLayout) return 1;
    if (shouldShowTabletLayout) return 2;
    return 3;
  }, [shouldShowMobileLayout, shouldShowTabletLayout]);

  const getSpacing = useCallback((): 'sm' | 'md' | 'lg' | 'xl' => 
  {
    if (shouldShowMobileLayout) return 'sm';
    if (shouldShowTabletLayout) return 'md';
    if (breakpointData.isLarge) return 'xl';
    return 'lg';
  }, [shouldShowMobileLayout, shouldShowTabletLayout, breakpointData.isLarge]);

  // Component sizing helpers
  const getImageSize = useCallback((): { width: number; height: number } => 
  {
    if (shouldShowMobileLayout) return { width: 300, height: 200 };
    if (shouldShowTabletLayout) return { width: 400, height: 300 };
    return { width: 600, height: 400 };
  }, [shouldShowMobileLayout, shouldShowTabletLayout]);

  const getCardWidth = useCallback((): string => 
  {
    if (shouldShowMobileLayout) return 'w-full';
    if (shouldShowTabletLayout) return 'w-full max-w-2xl';
    return 'w-full max-w-4xl';
  }, [shouldShowMobileLayout, shouldShowTabletLayout]);

  // Navigation-specific utilities
  const sidebarWidth = useMemo(() => 
  {
    if (!showSidebar) return '0px';
    if (breakpointData.currentBreakpoint === '2xl') return '20rem';
    return '18rem';
  }, [showSidebar, breakpointData.currentBreakpoint]);

  const navSpacing: 'sm' | 'md' | 'lg' = useMemo(() => 
  {
    if (showMobileNav) return 'sm';
    if (showDesktopNav && breakpointData.isLarge) return 'lg';
    return 'md';
  }, [showMobileNav, showDesktopNav, breakpointData.isLarge]);

  const getNavButtonSize = useCallback((): 'sm' | 'md' | 'lg' => 
  {
    if (showMobileNav) return 'sm';
    if (breakpointData.isLarge) return 'lg';
    return 'md';
  }, [showMobileNav, breakpointData.isLarge]);

  const getNavIconSize = useCallback((): number => 
  {
    if (showMobileNav) return 20;
    if (breakpointData.isLarge) return 28;
    return 24;
  }, [showMobileNav, breakpointData.isLarge]);

  return useMemo(() => ({
    ...breakpointData,
    shouldShowMobileLayout,
    shouldShowTabletLayout,
    shouldShowDesktopLayout,
    getLayoutType,
    isCompactLayout,
    getGridColumns,
    getSpacing,
    getImageSize,
    getCardWidth,
    showSidebar,
    showMobileNav,
    showDesktopNav,
    navLayout,
    isCompactNav,
    sidebarWidth,
    navSpacing,
    getNavButtonSize,
    getNavIconSize,
  }), [
    breakpointData,
    shouldShowMobileLayout,
    shouldShowTabletLayout,
    shouldShowDesktopLayout,
    isCompactLayout,
    getLayoutType,
    getGridColumns,
    getSpacing,
    getImageSize,
    getCardWidth,
    showSidebar,
    showMobileNav,
    showDesktopNav,
    navLayout,
    isCompactNav,
    sidebarWidth,
    navSpacing,
    getNavButtonSize,
    getNavIconSize,
  ]);
}

// Export original types and constants for backwards compatibility
export type { Breakpoint, BreakpointState };
export { BREAKPOINTS };

// Convenience functions for specific use cases
export function useTimelineResponsive() 
{
  const responsive = useBreakpoint({
    mobileBreakpoint: 'lg', // Use timeline only on large screens
  });

  return {
    ...responsive,
    shouldShowTimeline: responsive.shouldShowDesktopLayout,
    shouldShowStackedView: !responsive.shouldShowDesktopLayout,
    timelineSpacing: responsive.getSpacing(),
  };
}

export function useTableResponsive() 
{
  const responsive = useBreakpoint({
    mobileBreakpoint: 'md',
  });

  return {
    ...responsive,
    shouldShowTable: responsive.shouldShowTabletLayout || responsive.shouldShowDesktopLayout,
    shouldShowCards: responsive.shouldShowMobileLayout,
    tableVariant: responsive.shouldShowMobileLayout ? 'cards' : 'table' as const,
  };
}

export function useSidebarNav() 
{
  const nav = useBreakpoint({ desktopBreakpoint: 'lg' });
  
  return {
    ...nav,
    shouldRender: nav.showSidebar,
    containerClasses: nav.showSidebar ? 'sidebar-visible' : 'sidebar-hidden',
    width: nav.sidebarWidth,
    spacing: nav.navSpacing,
  };
}