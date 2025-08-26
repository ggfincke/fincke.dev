// src/sections/shared/ResponsiveWrapper.tsx

import { ReactNode } from 'react';
import { useResponsiveSection } from '~/hooks/useResponsiveSection';

export interface ResponsiveWrapperProps {
  mobile?: ReactNode;
  tablet?: ReactNode;
  desktop: ReactNode;
  className?: string;
}

export interface ConditionalRenderProps {
  children: ReactNode;
  showOn?: 'mobile' | 'tablet' | 'desktop' | 'mobile-tablet' | 'tablet-desktop' | 'not-mobile' | 'not-desktop';
  className?: string;
}

// Main responsive wrapper that renders different content based on screen size
export function ResponsiveWrapper({ 
  mobile, 
  tablet, 
  desktop, 
  className = '' 
}: ResponsiveWrapperProps) {
  const { shouldShowMobileLayout, shouldShowTabletLayout } = useResponsiveSection();

  const wrapperClasses = className ? `${className}` : '';

  if (shouldShowMobileLayout && mobile) {
    return <div className={wrapperClasses}>{mobile}</div>;
  }
  
  if (shouldShowTabletLayout && tablet) {
    return <div className={wrapperClasses}>{tablet}</div>;
  }
  
  return <div className={wrapperClasses}>{desktop}</div>;
}

// Conditional renderer for specific screen sizes
export function ConditionalRender({ 
  children, 
  showOn = 'desktop', 
  className = '' 
}: ConditionalRenderProps) {
  const { shouldShowMobileLayout, shouldShowTabletLayout, shouldShowDesktopLayout } = useResponsiveSection();

  const shouldRender = (() => {
    switch (showOn) {
      case 'mobile':
        return shouldShowMobileLayout;
      case 'tablet':
        return shouldShowTabletLayout;
      case 'desktop':
        return shouldShowDesktopLayout;
      case 'mobile-tablet':
        return shouldShowMobileLayout || shouldShowTabletLayout;
      case 'tablet-desktop':
        return shouldShowTabletLayout || shouldShowDesktopLayout;
      case 'not-mobile':
        return !shouldShowMobileLayout;
      case 'not-desktop':
        return !shouldShowDesktopLayout;
      default:
        return true;
    }
  })();

  if (!shouldRender) return null;

  return className ? <div className={className}>{children}</div> : <>{children}</>;
}

// Specialized wrappers for common patterns
export interface TimelineResponsiveProps {
  timelineContent: ReactNode;
  stackedContent: ReactNode;
  className?: string;
}

export function TimelineResponsive({ 
  timelineContent, 
  stackedContent, 
  className = '' 
}: TimelineResponsiveProps) {
  return (
    <ResponsiveWrapper
      mobile={stackedContent}
      tablet={stackedContent}
      desktop={timelineContent}
      className={className}
    />
  );
}

export interface TableResponsiveProps {
  tableContent: ReactNode;
  cardContent: ReactNode;
  className?: string;
}

export function TableResponsive({ 
  tableContent, 
  cardContent, 
  className = '' 
}: TableResponsiveProps) {
  return (
    <ResponsiveWrapper
      mobile={cardContent}
      tablet={tableContent}
      desktop={tableContent}
      className={className}
    />
  );
}

export interface NavigationResponsiveProps {
  sidebarNavigation?: ReactNode;
  mobileNavigation: ReactNode;
  className?: string;
}

export function NavigationResponsive({ 
  sidebarNavigation, 
  mobileNavigation, 
  className = '' 
}: NavigationResponsiveProps) {
  const { showSidebarNavigation, showMobileNavigation } = useResponsiveSection();

  if (showMobileNavigation) {
    return <div className={className}>{mobileNavigation}</div>;
  }
  
  if (showSidebarNavigation && sidebarNavigation) {
    return <div className={className}>{sidebarNavigation}</div>;
  }
  
  return <div className={className}>{mobileNavigation}</div>;
}