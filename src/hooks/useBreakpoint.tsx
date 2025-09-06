// src/hooks/useBreakpoint.tsx

import { useMemo, useCallback } from 'react';

import { BREAKPOINTS } from '~/constants/breakpoints';
import type { Breakpoint } from '~/constants/breakpoints';
import { useSharedBreakpoint, type BreakpointState } from '~/hooks/useSharedBreakpoint';

// responsive configuration interface
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

// enhanced breakpoint result w/ all utilities
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

// * enhanced breakpoint hook w/ responsive utilities
export function useBreakpoint(config: ResponsiveConfig = {}): UseBreakpointResult 
{
  const {
    mobileBreakpoint = 'md',
    tabletBreakpoint = 'lg',
    desktopBreakpoint = 'xl',
  } = config;

  const breakpointData = useSharedBreakpoint();

  // section-specific responsive states
  const shouldShowMobileLayout = breakpointData.isBelow(mobileBreakpoint);
  const shouldShowTabletLayout = breakpointData.isAbove(mobileBreakpoint) && breakpointData.isBelow(desktopBreakpoint);
  const shouldShowDesktopLayout = breakpointData.isAbove(tabletBreakpoint);
  const isCompactLayout = shouldShowMobileLayout || shouldShowTabletLayout;

  // navigation-specific responsive states
  const showMobileNav = breakpointData.isBelow(mobileBreakpoint);
  const showDesktopNav = breakpointData.isAbove(tabletBreakpoint);
  const showSidebar = showDesktopNav;
  const isCompactNav = !showDesktopNav;

  // layout utilities
  const getLayoutType = useCallback((): 'mobile' | 'tablet' | 'desktop' => 
  {
    if (shouldShowMobileLayout) return 'mobile';
    if (shouldShowTabletLayout) return 'tablet';
    return 'desktop';
  }, [shouldShowMobileLayout, shouldShowTabletLayout]);

  // navigation layout
  const navLayout: 'mobile' | 'tablet' | 'desktop' = useMemo(() => 
  {
    if (showMobileNav) return 'mobile';
    if (showDesktopNav) return 'desktop';
    return 'tablet';
  }, [showMobileNav, showDesktopNav]);

  // grid & spacing utilities
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

  // component sizing helpers
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

  // navigation-specific utilities
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

// export original types & constants for backwards compatibility
export type { BreakpointState };
export type { Breakpoint } from '~/constants/breakpoints';
export { BREAKPOINTS };

// timeline responsive hook
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

// table responsive hook
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

// sidebar navigation hook
// (Removed) useSidebarNav: previously exported but unused
