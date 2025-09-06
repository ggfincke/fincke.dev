// src/hooks/useSharedBreakpoint.ts

import { useState, useEffect, useRef } from 'react';

import { BREAKPOINTS } from '../constants/breakpoints';
import type { Breakpoint } from '../constants/breakpoints';

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

// singleton manager for shared breakpoint state
class BreakpointManager 
{
  private listeners = new Set<(state: BreakpointState) => void>();
  private state: BreakpointState | null = null;
  private resizeHandler?: () => void;
  private isInitialized = false;

  // lazy initialization to avoid SSR issues
  constructor() 
  {
    // don't initialize immediately - wait for first access
  }

  // ensure manager is initialized before use
  private ensureInitialized() 
  {
    if (!this.isInitialized) 
    {
      this.state = this.createInitialState();
      this.setupResizeListener();
      this.isInitialized = true;
    }
  }

  // create initial breakpoint state
  private createInitialState(): BreakpointState 
  {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    return this.createState(windowWidth);
  }

  // create breakpoint state from window width
  private createState(windowWidth: number): BreakpointState 
  {
    // check if window is above breakpoint
    const isAbove = (breakpoint: Breakpoint): boolean => 
    {
      return windowWidth >= BREAKPOINTS[breakpoint];
    };

    // check if window is below breakpoint
    const isBelow = (breakpoint: Breakpoint): boolean => 
    {
      return windowWidth < BREAKPOINTS[breakpoint];
    };

    // determine current breakpoint from window width
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

  // setup window resize listener
  private setupResizeListener() 
  {
    if (typeof window === 'undefined') return;

    // debounced resize handler
    this.resizeHandler = () => 
    {
      if (!this.state) return;
      
      const newState = this.createState(window.innerWidth);
      
      // only update if state actually changed
      if (this.hasStateChanged(this.state, newState)) 
      {
        this.state = newState;
        this.notifyListeners();
      }
    };

    window.addEventListener('resize', this.resizeHandler, { passive: true });
  }

  // check if breakpoint state has changed
  private hasStateChanged(oldState: BreakpointState, newState: BreakpointState): boolean 
  {
    return (
      oldState.windowWidth !== newState.windowWidth ||
      oldState.currentBreakpoint !== newState.currentBreakpoint
    );
  }

  // notify all subscribers of state change
  private notifyListeners() 
  {
    if (this.state) 
    {
      this.listeners.forEach(listener => listener(this.state!));
    }
  }

  // subscribe to breakpoint changes
  subscribe(listener: (state: BreakpointState) => void) 
  {
    this.ensureInitialized();
    this.listeners.add(listener);
    
    return () => 
    {
      this.listeners.delete(listener);
      
      // clean up if no listeners
      if (this.listeners.size === 0 && this.resizeHandler) 
      {
        window?.removeEventListener('resize', this.resizeHandler);
        this.resizeHandler = undefined;
        this.isInitialized = false;
        this.state = null;
      }
    };
  }

  // get current breakpoint state
  getState(): BreakpointState 
  {
    this.ensureInitialized();
    return this.state!;
  }
}

// singleton instance
const breakpointManager = new BreakpointManager();

// * shared breakpoint hook w/ hydration safety
export function useSharedBreakpoint(): BreakpointState 
{
  // initialize w/ server-safe defaults to prevent hydration mismatch
  const [state, setState] = useState<BreakpointState>(() => 
  {
    // server-safe initial state
    const serverSafeState: BreakpointState = {
      windowWidth: 0,
      isMobile: true,  // assume mobile by default to match server
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
    // subscribe to changes
    unsubscribeRef.current = breakpointManager.subscribe(setState);
    
    // get actual state from manager w/ real window dimensions
    setState(breakpointManager.getState());

    return () => 
    {
      unsubscribeRef.current?.();
    };
  }, []);

  return state;
}
