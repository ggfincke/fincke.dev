// src/types/shared.ts
// common utility types, component patterns & API interfaces

import { ReactNode } from 'react';

// common utility types used across components
export type Size = 'sm' | 'md' | 'lg' | 'xl';

export type Alignment = 'left' | 'center' | 'right';

export type Direction = 'left' | 'right' | 'up' | 'down';

// common component patterns
export interface BaseComponent {
  className?: string;
  children?: ReactNode;
}

export interface ClickableComponent {
  onClick?: () => void;
  disabled?: boolean;
}

export interface LinkComponent {
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

// animation & transition types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  easing?: string;
}

// responsive breakpoints (matching Tailwind defaults)
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ResponsiveValue<T> {
  default: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}


// external API types
export interface GitHubRelease {
  tag_name: string;
  name?: string;
  published_at?: string;
  html_url?: string;
}