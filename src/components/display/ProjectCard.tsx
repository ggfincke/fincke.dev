'use client';

import { ProjectCardHeader } from '~/components/display/ProjectCardHeader';
import { ProjectCardContent } from '~/components/display/ProjectCardContent';
import { ProjectCardTechnologies } from '~/components/display/ProjectCardTechnologies';
import type { ProjectCardProps } from '~/types/ui';

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
    <div className="border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-background-alt)] hover:shadow-lg transition-all w-full h-[550px] flex flex-col">
      <ProjectCardHeader 
        title={title}
        dateRange={dateRange}
        status={status}
        collaborators={collaborators}
        repoUrl={repoUrl}
        liveUrl={liveUrl}
      />
      
      <ProjectCardContent 
        bulletPoints={bulletPoints}
        contentComponent={contentComponent}
      />
      
      <ProjectCardTechnologies technologies={technologies} />
    </div>
  );
}