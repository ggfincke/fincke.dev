// src/hooks/useResponsiveSection.ts

import { useBreakpoint, type UseBreakpointResult, type Breakpoint } from './useBreakpoint';
import { useMemo, useCallback } from 'react';

export interface ResponsiveSectionConfig {
  mobileBreakpoint?: Breakpoint;
  tabletBreakpoint?: Breakpoint;
  desktopBreakpoint?: Breakpoint;
}

export interface UseResponsiveSectionResult extends UseBreakpointResult {
  // Section-specific responsive utilities
  shouldShowMobileLayout: boolean;
  shouldShowTabletLayout: boolean;
  shouldShowDesktopLayout: boolean;
  
  // Layout helpers
  getLayoutType: () => 'mobile' | 'tablet' | 'desktop';
  isCompactLayout: boolean;
  showSidebarNavigation: boolean;
  showMobileNavigation: boolean;
  
  // Grid and spacing utilities
  getGridColumns: () => number;
  getSpacing: () => 'sm' | 'md' | 'lg' | 'xl';
  
  // Component sizing helpers
  getImageSize: () => { width: number; height: number };
  getCardWidth: () => string;
}

export function useResponsiveSection(
  config: ResponsiveSectionConfig = {}
): UseResponsiveSectionResult 
{
  const {
    mobileBreakpoint = 'md',
    tabletBreakpoint = 'lg', 
    desktopBreakpoint = 'xl',
  } = config;

  const breakpointData = useBreakpoint();

  // Section-specific responsive states
  const shouldShowMobileLayout = breakpointData.isBelow(mobileBreakpoint);
  const shouldShowTabletLayout = breakpointData.isAbove(mobileBreakpoint) && breakpointData.isBelow(desktopBreakpoint);
  const shouldShowDesktopLayout = breakpointData.isAbove(tabletBreakpoint);

  const isCompactLayout = shouldShowMobileLayout || shouldShowTabletLayout;
  const showSidebarNavigation = shouldShowDesktopLayout;
  const showMobileNavigation = shouldShowMobileLayout;

  // Layout utilities
  const getLayoutType = useCallback((): 'mobile' | 'tablet' | 'desktop' => 
{
    if (shouldShowMobileLayout) return 'mobile';
    if (shouldShowTabletLayout) return 'tablet';
    return 'desktop';
  }, [shouldShowMobileLayout, shouldShowTabletLayout]);

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

  const memoizedResult = useMemo(() => ({
    ...breakpointData,
    shouldShowMobileLayout,
    shouldShowTabletLayout,
    shouldShowDesktopLayout,
    getLayoutType,
    isCompactLayout,
    showSidebarNavigation,
    showMobileNavigation,
    getGridColumns,
    getSpacing,
    getImageSize,
    getCardWidth,
  }), [
    breakpointData,
    shouldShowMobileLayout,
    shouldShowTabletLayout,
    shouldShowDesktopLayout,
    isCompactLayout,
    showSidebarNavigation,
    showMobileNavigation,
    getLayoutType,
    getGridColumns,
    getSpacing,
    getImageSize,
    getCardWidth,
  ]);

  return memoizedResult;
}

// Specialized hook for timeline components
export function useTimelineResponsive() 
{
  const responsive = useResponsiveSection({
    mobileBreakpoint: 'lg', // Use timeline only on large screens
  });

  return {
    ...responsive,
    shouldShowTimeline: responsive.shouldShowDesktopLayout,
    shouldShowStackedView: !responsive.shouldShowDesktopLayout,
    timelineSpacing: responsive.getSpacing(),
  };
}

// Specialized hook for table components  
export function useTableResponsive() 
{
  const responsive = useResponsiveSection({
    mobileBreakpoint: 'md',
  });

  return {
    ...responsive,
    shouldShowTable: responsive.shouldShowTabletLayout || responsive.shouldShowDesktopLayout,
    shouldShowCards: responsive.shouldShowMobileLayout,
    tableVariant: responsive.shouldShowMobileLayout ? 'cards' : 'table' as const,
  };
}