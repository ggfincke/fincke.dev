// src/components/ui/PaginationDots.tsx

// imports
import React from 'react';

// pagination dots component
interface PaginationDotsProps {
  totalItems: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
  disabled?: boolean;
}

export function PaginationDots({ totalItems, currentIndex, onDotClick, disabled }: PaginationDotsProps) {
  return (
    <div className="flex justify-center space-x-3 mb-2">
      {Array.from({ length: totalItems }).map((_, index) => (
        <button 
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-colors ${
            index === currentIndex 
              ? 'bg-[var(--color-primary)]' 
              : 'bg-[var(--color-border)] hover:bg-[var(--color-text)]'
          }`}
          disabled={disabled || index === currentIndex}
          aria-label={`Go to project ${index + 1}`}
          aria-current={index === currentIndex ? 'true' : 'false'}
        />
      ))}
    </div>
  );
} 