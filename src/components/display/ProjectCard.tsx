// src/components/display/ProjectCard.tsx
// * project display card w/ collaborators, status, links & technologies

'use client';

import { SkillPill } from '~/components/display/SkillPill';
import { StatusBadge } from '~/components/display/StatusBadge';
import { VersionBadge } from '~/components/display/VersionBadge';
import { ProjectLinks } from '~/components/display/ProjectLinks';
import { renderCollaborators } from '~/components/display/Collaborators';
import type { ProjectCardProps } from '~/types/ui';


// collaborators renderer now imported from shared util

// * main project card component
export function ProjectCard({ 
  title, 
  dateRange,
  bulletPoints,
  technologies, 
  repoUrl, 
  liveUrl,
  contentComponent,
  status,
  collaborators
}: ProjectCardProps) 
{
  return (
    <div className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--card)] hover:shadow-lg transition-all w-full h-[700px] md:h-[550px] flex flex-col">
      {/* top bar (title, date, status, links) */}
      <div className="p-6 pb-2 flex justify-between items-start">
        <div>
          <h3 className="text-3xl font-bold text-[var(--fg)]">{title}</h3>
          <div className="flex flex-col md:flex-row md:items-center mt-1">
            <p className="text-[var(--muted)] text-sm flex flex-wrap items-center">
              {/* Collaborators section */}
              {collaborators && (
                <>
                  <span className="text-[var(--secondary)]">Collaborators:&nbsp;</span>
                  <span>{renderCollaborators(collaborators)}</span>
                  {/* Divider only visible on larger screens, o/w stack on top*/}
                  <span className="hidden md:inline mx-2 text-[var(--muted)]">|</span>
                </>
              )}
              
              {/* Date range */}
              <span className="md:ml-0 mt-1 md:mt-0 italic">
                {repoUrl && <VersionBadge repoUrl={repoUrl} />}
                {dateRange}
              </span>
            </p>
          </div>
          <div className="mt-2">
            <StatusBadge status={status} />
          </div>
        </div>
        
        <ProjectLinks repoUrl={repoUrl} liveUrl={liveUrl} variant="icon" />
      </div>
      
      {/* content area (bullets, image/content) */}
      <div className="p-6 pt-2 flex flex-col md:flex-row flex-grow overflow-y-auto">
        {/* bullet points - full width on mobile, half width on desktop */}
        <div className="w-full md:w-1/2 md:pr-4 overflow-y-auto">
          <ul className="list-disc pl-5 space-y-2">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-[var(--muted)] marker:text-[var(--secondary)]">{point}</li>
            ))}
          </ul>
        </div>
        
        {/* image / content - only render if contentComponent exists */}
        {contentComponent && (
          <div className="w-full md:w-1/2 h-48 md:h-80 mt-4 md:mt-0 rounded">
            {contentComponent}
          </div>
        )}
      </div>
      
      {/* bottom - technologies (via skill pills) */}
      <div className="px-6 pb-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <SkillPill key={tech} name={tech} showProjectsOnHover={false} />
        ))}
      </div>
    </div>
  );
}
