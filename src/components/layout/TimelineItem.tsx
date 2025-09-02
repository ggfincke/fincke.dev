// src/components/layout/TimelineItem.tsx
// timeline experience item w/ date, company, title & technologies

import { SkillPill } from '~/components/display/SkillPill';
import type { TimelineItemProps } from '~/types/layout';

// timeline item component
export function TimelineItem({ 
  date, 
  title, 
  company, 
  children, 
  technologies = [], 
  companyUrl,
  companyLogos,
  isLast = false 
}: TimelineItemProps) 
{
  return (
    <div className={`flex mb-20 relative ${isLast ? '' : ''}`}>
      {/* left side - date */}
      <div className="w-28 flex-shrink-0 text-[var(--muted)] font-medium pt-1">
        {date}
      </div>
      
      {/* the timeline point */}
      <div className="absolute left-[7.5rem] top-3.5 w-3 h-3 rounded-full bg-[var(--accent)] z-10 transform -translate-x-17/40"></div>
      
      {/* right side - content */}
      <div className="pl-10 flex-1">
        
      {/* header row */}
        <h4 className="flex items-center justify-between text-xl font-semibold text-[var(--accent)] mb-3">
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noreferrer">
              {company}
            </a>
          ) : (
            company
          )}

          {/* icons flush right */}
          <span className="flex items-center gap-1">
            {companyLogos}
          </span>
        </h4>
        
        {/* title */}
        <div className="text-xl font-semibold text-[var(--fg)] mb-3">
          {title}
        </div>
        
        {/* description */}
        <div className="text-[var(--muted)] mb-4">
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