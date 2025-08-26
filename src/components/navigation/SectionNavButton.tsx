// src/components/navigation/SectionNavButton.tsx
// section navigation button w/ arrow icon

import Link from 'next/link';

import type { SectionNavButtonProps } from '~/types/navigation';

// section navigation button component
export function SectionNavButton({ href, children, className = '' }: SectionNavButtonProps) 
{
  return (
    <Link href={href} className={`section-nav-button ${className}`}>
      {children}
      <svg 
        className="section-nav-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  );
} 