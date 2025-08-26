// src/hooks/useResponsiveNav.ts

import { useMemo, useCallback } from 'react';
import { useBreakpoint, type UseBreakpointResult, type Breakpoint } from './useBreakpoint';

export interface ResponsiveNavConfig {
  // Breakpoint below which mobile navigation is shown (default: 'md')
  mobileBreakpoint?: Breakpoint;
  // Breakpoint above which desktop navigation is shown (default: 'lg')
  desktopBreakpoint?: Breakpoint;
}

export interface UseResponsiveNavResult extends UseBreakpointResult {
  // Navigation-specific responsive states
  showSidebar: boolean;
  showMobileNav: boolean;
  showDesktopNav: boolean;
  
  // Layout helpers
  navLayout: 'mobile' | 'tablet' | 'desktop';
  isCompactNav: boolean;
  
  // Navigation-specific utilities
  sidebarWidth: string;
  navSpacing: 'sm' | 'md' | 'lg';
  
  // Component sizing helpers for navigation
  getNavButtonSize: () => 'sm' | 'md' | 'lg';
  getNavIconSize: () => number;
}

export function useResponsiveNav({
  mobileBreakpoint = 'md',
  desktopBreakpoint = 'lg',
}: ResponsiveNavConfig = {}): UseResponsiveNavResult 
{
  const breakpoint = useBreakpoint();

  // Navigation-specific responsive states
  const showMobileNav = breakpoint.isBelow(mobileBreakpoint);
  const showDesktopNav = breakpoint.isAbove(desktopBreakpoint);
  const showSidebar = showDesktopNav; // Sidebar only shown on desktop
  
  // Layout determination
  const navLayout: 'mobile' | 'tablet' | 'desktop' = useMemo(() => 
{
    if (showMobileNav) return 'mobile';
    if (showDesktopNav) return 'desktop';
    return 'tablet';
  }, [showMobileNav, showDesktopNav]);

  const isCompactNav = !showDesktopNav;

  // Navigation-specific styling utilities
  const sidebarWidth = useMemo(() => 
{
    if (!showSidebar) return '0px';
    if (breakpoint.currentBreakpoint === '2xl') return '20rem'; // 320px
    return '18rem'; // 288px (w-72)
  }, [showSidebar, breakpoint.currentBreakpoint]);

  const navSpacing: 'sm' | 'md' | 'lg' = useMemo(() => 
{
    if (showMobileNav) return 'sm';
    if (showDesktopNav && breakpoint.isLarge) return 'lg';
    return 'md';
  }, [showMobileNav, showDesktopNav, breakpoint.isLarge]);

  // Component sizing helpers
  const getNavButtonSize = useCallback((): 'sm' | 'md' | 'lg' => 
{
    if (showMobileNav) return 'sm';
    if (breakpoint.isLarge) return 'lg';
    return 'md';
  }, [showMobileNav, breakpoint.isLarge]);

  const getNavIconSize = useCallback((): number => 
{
    if (showMobileNav) return 20;
    if (breakpoint.isLarge) return 28;
    return 24;
  }, [showMobileNav, breakpoint.isLarge]);

  // Memoize the result to prevent unnecessary re-renders
  return useMemo(() => ({
    ...breakpoint,
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
    breakpoint,
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

export function useSidebarNav() 
{
  const nav = useResponsiveNav({ desktopBreakpoint: 'lg' });
  
  return {
    ...nav,
    shouldRender: nav.showSidebar,
    containerClasses: nav.showSidebar ? 'sidebar-visible' : 'sidebar-hidden',
    width: nav.sidebarWidth,
    spacing: nav.navSpacing,
  };
}