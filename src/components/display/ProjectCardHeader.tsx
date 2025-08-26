import { StatusBadge } from '~/components/display/StatusBadge';
import { VersionBadge } from '~/components/display/VersionBadge';
import { ProjectCollaborators } from '~/components/display/ProjectCollaborators';
import type { ProjectStatus, Collaborator } from '~/types/projects';

interface ProjectCardHeaderProps {
  title: string;
  dateRange: string;
  status: ProjectStatus;
  collaborators?: Collaborator[];
  repoUrl?: string;
  liveUrl?: string;
}

export function ProjectCardHeader({ 
  title, 
  dateRange, 
  status, 
  collaborators, 
  repoUrl, 
  liveUrl 
}: ProjectCardHeaderProps) 
{
  return (
    <div className="p-6 pb-2 flex justify-between items-start">
      <div>
        <h3 className="text-3xl font-bold text-[var(--color-text-light)]">{title}</h3>
        <div className="flex flex-col md:flex-row md:items-center mt-1">
          <p className="text-[var(--color-text)] text-sm flex flex-wrap items-center">
            <ProjectCollaborators collaborators={collaborators} />
            
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
  );
}