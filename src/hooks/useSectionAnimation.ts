// src/hooks/useSectionAnimation.ts

import { useState, useCallback } from 'react';

export interface SectionAnimationConfig {
  duration?: number;
  initialDelay?: number;
  staggerDelay?: number;
}

export interface SectionAnimationState {
  isAnimating: boolean;
  isComplete: boolean;
  isVisible: boolean;
  stage: number;
}

export interface UseSectionAnimationResult extends SectionAnimationState {
  startAnimation: () => void;
  resetAnimation: () => void;
  setStage: (stage: number) => void;
  getStageClasses: (stage: number, baseClasses?: string) => string;
}

// Default animation classes for common patterns
const ANIMATION_CLASSES = {
  hidden: 'opacity-0 translate-y-4',
  visible: 'opacity-100 translate-y-0',
  transition: 'transition-all duration-1000',
} as const;

export function useSectionAnimation(
  config: SectionAnimationConfig = {}
): UseSectionAnimationResult {
  const {
    duration = 1000,
    initialDelay = 0,
  } = config;

  const [state, setState] = useState<SectionAnimationState>({
    isAnimating: false,
    isComplete: false,
    isVisible: false,
    stage: 0,
  });

  const startAnimation = useCallback(() => {
    setState(prev => ({ ...prev, isAnimating: true, isVisible: true }));

    // Complete animation after duration + initial delay
    const timer = setTimeout(() => {
      setState(prev => ({ ...prev, isAnimating: false, isComplete: true }));
    }, duration + initialDelay);

    return () => clearTimeout(timer);
  }, [duration, initialDelay]);

  const resetAnimation = useCallback(() => {
    setState({
      isAnimating: false,
      isComplete: false,
      isVisible: false,
      stage: 0,
    });
  }, []);

  const setStage = useCallback((stage: number) => {
    setState(prev => ({ ...prev, stage }));
  }, []);

  const getStageClasses = useCallback((
    stage: number,
    baseClasses: string = ''
  ): string => {
    const isStageVisible = state.isVisible && (state.isComplete || state.stage >= stage);
    const animationClasses = [
      ANIMATION_CLASSES.transition,
      isStageVisible ? ANIMATION_CLASSES.visible : ANIMATION_CLASSES.hidden,
      baseClasses,
    ].filter(Boolean).join(' ');

    return animationClasses;
  }, [state]);

  return {
    ...state,
    startAnimation,
    resetAnimation,
    setStage,
    getStageClasses,
  };
}

// Specialized hook for transition animations (like carousel)
export function useTransitionAnimation(duration: number = 300) {
  const [isAnimating, setIsAnimating] = useState(false);

  const startTransition = useCallback(() => {
    if (isAnimating) return false;
    
    setIsAnimating(true);
    
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [isAnimating, duration]);

  return {
    isAnimating,
    startTransition,
    getTransitionClasses: (baseClasses: string = '') => {
      return `${baseClasses} transition-all duration-${duration} ease-in-out ${
        isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
      }`;
    },
  };
}