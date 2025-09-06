// src/components/navigation/NavArrow.tsx
// directional arrow button for project navigation

import type { NavArrowProps } from '~/types/navigation';

// navigation arrow component
export function NavArrow({ direction, onClick, disabled }: NavArrowProps) 
{
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
      className={`absolute top-1/2 transform -translate-y-1/2 ${positionClasses} bg-[var(--card)] border border-[var(--border)] rounded-full p-2 text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--secondary)] transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]`}
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
