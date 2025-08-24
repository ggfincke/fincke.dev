// src/components/timeline/TimelineContainer.tsx

import { ReactNode } from 'react';

interface TimelineContainerProps {
  children: ReactNode;
  className?: string;
}
export function TimelineContainer({ children, className = '' }: TimelineContainerProps) {
  return (
    <div className={`relative ${className}`}>
      {/* timeline vertical line */}
      <div className="absolute left-[7.5rem] top-[1.125rem] bottom-0 w-0.5 bg-[var(--color-border)] z-0"></div>
      
      {/* content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}