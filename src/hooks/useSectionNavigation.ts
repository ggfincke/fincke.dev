// src/hooks/useSectionNavigation.ts
// * navigation hook w/ transition animations & expandable rows

import { useState, useCallback } from 'react';

import { useTransitionAnimation } from '~/hooks/useAnimation';

export interface SectionNavigationConfig {
  totalItems: number;
  initialIndex?: number;
  transitionDuration?: number;
  loop?: boolean;
}

export interface UseSectionNavigationResult {
  currentIndex: number;
  isAnimating: boolean;
  canGoNext: boolean;
  canGoPrevious: boolean;
  goToNext: () => void;
  goToPrevious: () => void;
  goToIndex: (index: number) => void;
  getTransitionClasses: (baseClasses?: string) => string;
}

// * section navigation w/ animation support
export function useSectionNavigation({
  totalItems,
  initialIndex = 0,
  transitionDuration = 300,
  loop = true,
}: SectionNavigationConfig): UseSectionNavigationResult 
{
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  const { 
    isAnimating, 
    startTransition, 
    getTransitionClasses 
  } = useTransitionAnimation(transitionDuration);

  const canGoNext = loop || currentIndex < totalItems - 1;
  const canGoPrevious = loop || currentIndex > 0;

  const goToIndex = useCallback((targetIndex: number) => 
{
    if (isAnimating || targetIndex === currentIndex || targetIndex < 0 || targetIndex >= totalItems) 
{
      return;
    }
    
    const cleanup = startTransition?.();
    setCurrentIndex(targetIndex);
    
    return cleanup;
  }, [isAnimating, currentIndex, totalItems, startTransition]);

  const goToNext = useCallback(() => 
{
    if (!canGoNext) return;
    
    const nextIndex = loop && currentIndex === totalItems - 1 
      ? 0 
      : currentIndex + 1;
    
    goToIndex(nextIndex);
  }, [canGoNext, loop, currentIndex, totalItems, goToIndex]);

  const goToPrevious = useCallback(() => 
{
    if (!canGoPrevious) return;
    
    const previousIndex = loop && currentIndex === 0 
      ? totalItems - 1 
      : currentIndex - 1;
    
    goToIndex(previousIndex);
  }, [canGoPrevious, loop, currentIndex, totalItems, goToIndex]);

  return {
    currentIndex,
    isAnimating,
    canGoNext,
    canGoPrevious,
    goToNext,
    goToPrevious,
    goToIndex,
    getTransitionClasses: getTransitionClasses || ((baseClasses = '') => baseClasses),
  };
}


// * expandable rows hook
export function useExpandableRows<T = number>() 
{
  const [expandedRows, setExpandedRows] = useState<T[]>([]);

  const toggleRow = useCallback((id: T) => 
{
    setExpandedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  }, []);

  const isExpanded = useCallback((id: T) => 
{
    return expandedRows.includes(id);
  }, [expandedRows]);

  const expandRow = useCallback((id: T) => 
{
    setExpandedRows(prev => 
      prev.includes(id) ? prev : [...prev, id]
    );
  }, []);

  const collapseRow = useCallback((id: T) => 
{
    setExpandedRows(prev => prev.filter(rowId => rowId !== id));
  }, []);

  const collapseAll = useCallback(() => 
{
    setExpandedRows([]);
  }, []);

  return {
    expandedRows,
    toggleRow,
    isExpanded,
    expandRow,
    collapseRow,
    collapseAll,
  };
}