// src/components/ui/ScrollIndicator.tsx

'use client';

// interface for scroll indicator props
import type { ScrollIndicatorProps } from '~/types';
import '~/styles/animations.css';

// scroll indicator component
export function ScrollIndicator({ onClick }: ScrollIndicatorProps) {
  // handle click
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // default behavior - scroll to about section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div 
      className="flex flex-col items-center mt-8 cursor-pointer animate-bounce"
      onClick={handleClick}
      aria-label="Scroll down"
    >
      <span className="text-[var(--color-text)] text-sm mb-2">Scroll Down</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-[var(--color-primary)]"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  );
}