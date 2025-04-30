// src/components/timeline/TimelineItem.tsx

// imports
import { ReactNode } from 'react';
import { SkillPill } from '../ui/SkillPill';

// timeline item component
interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  children: ReactNode;
  technologies?: string[];
  companyUrl?: string;
  isLast?: boolean;
}

export function TimelineItem({ 
  date, 
  title, 
  company, 
  children, 
  technologies = [], 
  companyUrl,
  isLast = false 
}: TimelineItemProps) {
  return (
    <div className={`flex mb-20 relative ${isLast ? '' : ''}`}>
      {/* left side - date */}
      <div className="w-28 flex-shrink-0 text-[var(--color-muted)] font-medium pt-1">
        {date}
      </div>
      
      {/* the timeline point */}
      <div className="absolute left-[7.5rem] top-2 w-3 h-3 rounded-full bg-[var(--color-primary)] z-10 transform -translate-x-17/40"></div>
      
      {/* right side - content */}
      <div className="pl-10 flex-1">
        {/* title & company */}
        <div className="flex items-center mb-3">
          <h4 className="text-xl font-semibold text-[var(--color-primary)]">
            {title}
            {company && <span className="text-[var(--color-text-light)]">, {company}</span>}
          </h4>
          
          {companyUrl && (
            <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-[var(--color-text)] hover:text-[var(--color-text-light)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
        
        {/* description */}
        <div className="text-[var(--color-text)] mb-4">
          {children}
        </div>
        
        {/* technologies (uses skillpill component) */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <SkillPill key={index} name={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}