// src/components/ui/cards/NavigationArrow.tsx

import type { NavigationArrowProps } from '~/types';

export function NavigationArrow({ direction, onClick, disabled }: NavigationArrowProps) {
  // determine if left or right arrow
  const isLeft = direction === 'left';
  // determine arrow points
  const arrowPoints = isLeft 
    ? "15 18 9 12 15 6"
    : "9 18 15 12 9 6";
  // determine arrow position
  const positionClasses = isLeft
    ? "left-0 -translate-x-8 sm:-translate-x-12 md:-translate-x-16"
    : "right-0 translate-x-8 sm:translate-x-12 md:translate-x-16";

  return (
    <button 
      className={`absolute top-1/2 transform -translate-y-1/2 ${positionClasses} bg-[var(--color-background-alt)] border border-[var(--color-border)] rounded-full p-2 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors z-10`}
      onClick={onClick}
      disabled={disabled}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} project`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points={arrowPoints}></polyline>
      </svg>
    </button>
  );
} 