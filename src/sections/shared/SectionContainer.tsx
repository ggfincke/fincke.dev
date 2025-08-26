// src/sections/shared/SectionContainer.tsx

import { ReactNode } from 'react';
import { useBreakpoint } from '~/hooks/useBreakpoint';

export interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
  as?: 'div' | 'section' | 'main' | 'article';
}

const MAX_WIDTH_CLASSES = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  '2xl': 'max-w-6xl',
  full: 'max-w-full',
} as const;

const SPACING_CLASSES = {
  none: '',
  sm: 'px-4 sm:px-6',
  md: 'px-4 sm:px-8',
  lg: 'px-6 sm:px-8 lg:px-12',
  xl: 'px-8 sm:px-12 lg:px-16',
} as const;

export function SectionContainer({
  children,
  className = '',
  maxWidth = 'xl',
  spacing,
  center = true,
  as: Component = 'div',
}: SectionContainerProps) 
{
  const { getSpacing } = useBreakpoint();
  
  // Use responsive spacing if not explicitly provided
  const effectiveSpacing = spacing || getSpacing();
  
  const containerClasses = [
    MAX_WIDTH_CLASSES[maxWidth],
    SPACING_CLASSES[effectiveSpacing],
    center ? 'mx-auto' : '',
    'relative',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={containerClasses}>
      {children}
    </Component>
  );
}

