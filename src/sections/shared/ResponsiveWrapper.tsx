// src/sections/shared/ResponsiveWrapper.tsx

import { ReactNode } from 'react';
import { useResponsiveSection } from '~/hooks/useResponsiveSection';

export interface ResponsiveWrapperProps {
  mobile?: ReactNode;
  tablet?: ReactNode;
  desktop: ReactNode;
  className?: string;
}


// Main responsive wrapper that renders different content based on screen size
export function ResponsiveWrapper({ 
  mobile, 
  tablet, 
  desktop, 
  className = '' 
}: ResponsiveWrapperProps) 
{
  const { shouldShowMobileLayout, shouldShowTabletLayout } = useResponsiveSection();

  const wrapperClasses = className ? `${className}` : '';

  if (shouldShowMobileLayout && mobile) 
{
    return <div className={wrapperClasses}>{mobile}</div>;
  }
  
  if (shouldShowTabletLayout && tablet) 
{
    return <div className={wrapperClasses}>{tablet}</div>;
  }
  
  return <div className={wrapperClasses}>{desktop}</div>;
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
}: TimelineResponsiveProps) 
{
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
}: TableResponsiveProps) 
{
  return (
    <ResponsiveWrapper
      mobile={cardContent}
      tablet={tableContent}
      desktop={tableContent}
      className={className}
    />
  );
}

