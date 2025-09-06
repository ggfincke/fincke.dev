// src/hooks/useAnimation.ts

import { useState, useEffect, useCallback, useRef } from 'react';

import { DEFAULT_DURATION } from '../constants/durations';

export type AnimationType = 'transition' | 'typing' | 'fade' | 'scale';

export interface TransitionConfig 
{
  type: 'transition';
  duration?: number;
}

export interface TypingConfig 
{
  type: 'typing';
  text: string;
  speed?: number;
}

export interface FadeConfig 
{
  type: 'fade';
  duration?: number;
}

export interface ScaleConfig 
{
  type: 'scale';
  duration?: number;
}

export type AnimationConfig = TransitionConfig | TypingConfig | FadeConfig | ScaleConfig;

export interface AnimationResult 
{
  // Common properties
  isAnimating: boolean;
  
  // Transition-specific
  startTransition?: () => (() => void) | false;
  getTransitionClasses?: (baseClasses?: string) => string;
  
  // Typing-specific
  displayText?: string;
  isComplete?: boolean;
  
  // Fade/Scale-specific
  startAnimation?: () => (() => void) | false;
  getAnimationClasses?: (baseClasses?: string) => string;
}

// * animation hook w/ configurable types & transitions
export function useAnimation(config: AnimationConfig): AnimationResult 
{
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // cleanup on unmount
  useEffect(() => 
  {
    return () => 
    {
      if (timerRef.current) 
      {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // typing animation effect
  useEffect(() => 
  {
    if (config.type === 'typing') 
    {
      const { text, speed = 100 } = config;
      let index = 0;
      setDisplayText('');
      setIsComplete(false);
      
      const timer = setInterval(() => 
      {
        if (index < text.length) 
        {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } 
        else 
        {
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);
      
      return () => clearInterval(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.type, 'text' in config ? config.text : '', 'speed' in config ? config.speed : 0]);

  // transition animation handler
  const startAnimation = useCallback(() => 
  {
    if (isAnimating) return false;
    
    const duration = 'duration' in config ? config.duration || DEFAULT_DURATION : DEFAULT_DURATION;
    
    setIsAnimating(true);
    
    timerRef.current = setTimeout(() => 
    {
      setIsAnimating(false);
    }, duration);

    return () => 
    {
      if (timerRef.current) 
      {
        clearTimeout(timerRef.current);
        setIsAnimating(false);
      }
    };
  }, [isAnimating, config]);

  // get CSS classes based on animation type
  const getAnimationClasses = useCallback((baseClasses: string = '') => 
  {
    const duration = 'duration' in config ? config.duration || DEFAULT_DURATION : DEFAULT_DURATION;
    
    switch (config.type) 
    {
      case 'transition':
        return `${baseClasses} transition-all duration-${duration} ease-in-out ${
          isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
        }`;
      
      case 'fade':
        return `${baseClasses} transition-opacity duration-${duration} ease-in-out ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`;
      
      case 'scale':
        return `${baseClasses} transition-transform duration-${duration} ease-in-out ${
          isAnimating ? 'transform scale-95' : 'transform scale-100'
        }`;
      
      default:
        return baseClasses;
    }
  }, [config, isAnimating]);

  // return appropriate properties based on animation type
  const result: AnimationResult = {
    isAnimating: config.type === 'typing' ? !isComplete : isAnimating,
  };

  if (config.type === 'typing') 
  {
    result.displayText = displayText;
    result.isComplete = isComplete;
  } 
  else 
  {
    result.startTransition = startAnimation;
    result.startAnimation = startAnimation;
    result.getTransitionClasses = getAnimationClasses;
    result.getAnimationClasses = getAnimationClasses;
  }

  return result;
}

// transition animation hook
export function useTransitionAnimation(duration: number = DEFAULT_DURATION) 
{
  return useAnimation({ type: 'transition', duration });
}

// typing animation hook
export function useTypingAnimation(text: string, speed: number = 100) 
{
  const result = useAnimation({ type: 'typing', text, speed });
  return {
    displayText: result.displayText!,
    isComplete: result.isComplete!,
  };
}

// fade animation hook
// (Removed) Dedicated fade/scale wrappers were unused; use useAnimation({ type: 'fade' | 'scale' }) instead
