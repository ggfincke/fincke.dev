// src/hooks/useTransitionAnimation.ts

import { useState, useCallback } from 'react';

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