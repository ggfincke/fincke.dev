// src/components/display/PaginationDots.tsx
// clickable pagination dots w/ active state & navigation

import type { PaginationDotsProps } from '~/types/navigation';

// pagination dots component
export function PaginationDots({ totalItems, currentIndex, onDotClick, disabled }: PaginationDotsProps) 
{
  return (
    <div className="flex justify-center space-x-3 mb-2">
      {Array.from({ length: totalItems }).map((_, index) => (
        <button 
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] ${
            index === currentIndex 
              ? 'bg-[var(--accent)]' 
              : 'bg-[var(--border)] hover:bg-[var(--muted)]'
          }`}
          disabled={disabled || index === currentIndex}
          aria-label={`Go to project ${index + 1}`}
          aria-current={index === currentIndex ? 'true' : 'false'}
        />
      ))}
    </div>
  );
}
