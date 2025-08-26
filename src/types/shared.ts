// src/types/shared.ts

import { ReactNode } from 'react';

// Common utility types used across components
export type Size = 'sm' | 'md' | 'lg' | 'xl';

export type Alignment = 'left' | 'center' | 'right';

export type Direction = 'left' | 'right' | 'up' | 'down';

export type Theme = 'light' | 'dark';

// Common component patterns
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

// Animation and transition types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  easing?: string;
}

// Responsive breakpoints (matching Tailwind defaults)
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ResponsiveValue<T> {
  default: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}

// Common event handlers
export type EventHandler<T = void> = (event?: Event) => T;
export type ChangeHandler<T> = (value: T) => void;

// Loading and error states
export interface AsyncState<T> {
  data?: T;
  loading: boolean;
  error?: string;
}

// Pagination types
export interface PaginationState {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
}

// Form field types
export interface FormField<T = string> {
  value: T;
  error?: string;
  touched?: boolean;
  required?: boolean;
}