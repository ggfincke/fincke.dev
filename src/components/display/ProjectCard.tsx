// src/components/ui/ProjectCard.tsx

// use client
'use client';

import { SkillPill } from '~/components/display/SkillPill';
import { StatusBadge } from '~/components/display/StatusBadge';
import { VersionBadge } from '~/components/display/VersionBadge';
import type { ProjectCardProps, Collaborator } from '~/types';


// helper function to render collaborators w/ optional links
const renderCollaborators = (collaborators: string | string[] | Collaborator | Collaborator[]) => {
  // simple string
  if (typeof collaborators === 'string') {
    return collaborators;
  }
  
  // array of strings
  if (Array.isArray(collaborators) && typeof collaborators[0] === 'string') {
    return (collaborators as string[]).join(', ');
  }
  
  // Collaborator object
  if (!Array.isArray(collaborators) && typeof collaborators === 'object') {
    const collab = collaborators as Collaborator;
    return collab.url ? (
      <a 
        href={collab.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[var(--color-primary)] hover:underline"
      >
        {collab.name}
      </a>
    ) : collab.name;
  }
  
  // array of Collaborator objects
  if (Array.isArray(collaborators) && typeof collaborators[0] === 'object') {
    return (collaborators as Collaborator[]).map((collab, index, arr) => (
      <span key={collab.name}>
        {collab.url ? (
          <a 
            href={collab.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:underline"
          >
            {collab.name}
          </a>
        ) : collab.name}
        {index < arr.length - 1 ? ', ' : ''}
      </span>
    ));
  }
  
  return null;
};

// project card component

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
}: ProjectCardProps) {
  return (
    <div className="border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-background-alt)] hover:shadow-lg transition-all w-full h-[550px] flex flex-col">
      {/* top bar (title, date, status, links) */}
      <div className="p-6 pb-2 flex justify-between items-start">
        <div>
          <h3 className="text-3xl font-bold text-[var(--color-text-light)]">{title}</h3>
          <div className="flex flex-col md:flex-row md:items-center mt-1">
            <p className="text-[var(--color-text)] text-sm flex flex-wrap items-center">
              {/* Collaborators section */}
              {collaborators && (
                <>
                  <span className="text-[var(--color-primary)]">Collaborators:&nbsp;</span>
                  <span>{renderCollaborators(collaborators)}</span>
                  {/* Divider only visible on larger screens, o/w stack on top*/}
                  <span className="hidden md:inline mx-2 text-[var(--color-text)]">|</span>
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
        
        <div className="flex space-x-3">
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="GitHub Repository"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="Live Site"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>
      
      {/* content area (bullets, image/content) */}
      <div className="p-6 pt-2 flex flex-col md:flex-row flex-grow overflow-y-auto">
        {/* bullet points - full width on small screens, half width on medium+ */}
        <div className="w-full md:w-1/2 pr-4 overflow-y-auto">
          <ul className="list-disc pl-5 space-y-2">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-[var(--color-text)]">{point}</li>
            ))}
          </ul>
        </div>
        
        {/* image / content */}
        {contentComponent ? (
          <div className="w-full md:w-1/2 h-80 mt-4 md:mt-0 rounded">
            {contentComponent}
          </div>
        ) : (
          <div className="hidden md:block md:w-1/2 h-80 bg-gray-200 mt-4 md:mt-0 rounded">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              (image)
            </div>
          </div>
        )}
      </div>
      
      {/* bottom - technologies (via skill pills) */}
      <div className="px-6 pb-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <SkillPill key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
}