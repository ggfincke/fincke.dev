// src/hooks/useSharedBreakpoint.ts

import { useState, useEffect, useRef } from 'react';

// Tailwind CSS breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export interface BreakpointState {
  windowWidth: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
  currentBreakpoint: Breakpoint | null;
  isAbove: (breakpoint: Breakpoint) => boolean;
  isBelow: (breakpoint: Breakpoint) => boolean;
}

class BreakpointManager 
{
  private listeners = new Set<(state: BreakpointState) => void>();
  private state: BreakpointState | null = null;
  private resizeHandler?: () => void;
  private isInitialized = false;

  constructor() 
  {
    // Don't initialize immediately - wait for first access
  }

  private ensureInitialized() 
  {
    if (!this.isInitialized) 
    {
      this.state = this.createInitialState();
      this.setupResizeListener();
      this.isInitialized = true;
    }
  }

  private createInitialState(): BreakpointState 
  {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    return this.createState(windowWidth);
  }

  private createState(windowWidth: number): BreakpointState 
  {
    const isAbove = (breakpoint: Breakpoint): boolean => 
    {
      return windowWidth >= BREAKPOINTS[breakpoint];
    };

    const isBelow = (breakpoint: Breakpoint): boolean => 
    {
      return windowWidth < BREAKPOINTS[breakpoint];
    };

    const getCurrentBreakpoint = (): Breakpoint | null => 
    {
      if (windowWidth === 0) return null;
      if (windowWidth >= BREAKPOINTS['2xl']) return '2xl';
      if (windowWidth >= BREAKPOINTS.xl) return 'xl';
      if (windowWidth >= BREAKPOINTS.lg) return 'lg';
      if (windowWidth >= BREAKPOINTS.md) return 'md';
      if (windowWidth >= BREAKPOINTS.sm) return 'sm';
      return null;
    };

    return {
      windowWidth,
      isMobile: isBelow('md'),
      isTablet: isAbove('md') && isBelow('lg'),
      isDesktop: isAbove('lg'),
      isLarge: isAbove('xl'),
      currentBreakpoint: getCurrentBreakpoint(),
      isAbove,
      isBelow,
    };
  }

  private setupResizeListener() 
  {
    if (typeof window === 'undefined') return;

    this.resizeHandler = () => 
    {
      if (!this.state) return;
      
      const newState = this.createState(window.innerWidth);
      
      // Only update if state actually changed
      if (this.hasStateChanged(this.state, newState)) 
      {
        this.state = newState;
        this.notifyListeners();
      }
    };

    window.addEventListener('resize', this.resizeHandler, { passive: true });
  }

  private hasStateChanged(oldState: BreakpointState, newState: BreakpointState): boolean 
  {
    return (
      oldState.windowWidth !== newState.windowWidth ||
      oldState.currentBreakpoint !== newState.currentBreakpoint
    );
  }

  private notifyListeners() 
  {
    if (this.state) 
    {
      this.listeners.forEach(listener => listener(this.state!));
    }
  }

  subscribe(listener: (state: BreakpointState) => void) 
  {
    this.ensureInitialized();
    this.listeners.add(listener);
    
    return () => 
    {
      this.listeners.delete(listener);
      
      // Clean up if no listeners
      if (this.listeners.size === 0 && this.resizeHandler) 
      {
        window?.removeEventListener('resize', this.resizeHandler);
        this.resizeHandler = undefined;
        this.isInitialized = false;
        this.state = null;
      }
    };
  }

  getState(): BreakpointState 
  {
    this.ensureInitialized();
    return this.state!;
  }
}

// Singleton instance
const breakpointManager = new BreakpointManager();

// Shared hook that uses the singleton with hydration safety
export function useSharedBreakpoint(): BreakpointState 
{
  // Initialize with server-safe defaults to prevent hydration mismatch
  const [state, setState] = useState<BreakpointState>(() => 
  {
    // Server-safe initial state
    const serverSafeState: BreakpointState = {
      windowWidth: 0,
      isMobile: true,  // Assume mobile by default to match server
      isTablet: false,
      isDesktop: false,
      isLarge: false,
      currentBreakpoint: null,
      isAbove: () => false,
      isBelow: () => true,
    };
    return serverSafeState;
  });
  
  const unsubscribeRef = useRef<(() => void) | null>(null);

  useEffect(() => 
  {
    // Subscribe to changes
    unsubscribeRef.current = breakpointManager.subscribe(setState);
    
    // Get actual state from manager (with real window dimensions)
    setState(breakpointManager.getState());

    return () => 
    {
      unsubscribeRef.current?.();
    };
  }, []);

  return state;
}