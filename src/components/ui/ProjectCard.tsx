// src/components/ui/ProjectCard.tsx

// use client
'use client';

// imports
import Link from 'next/link';
import { ThemeButton } from '../buttons/ThemeButton';
import { SkillPill } from './SkillPill';

// project card component
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  repoUrl, 
  liveUrl 
}: ProjectCardProps) {
  return (
    <div className="border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-background-alt)] hover:shadow-lg transition-all w-full h-[450px] flex flex-col">
      {/* card content w/ fixed height sections */}
      <div className="p-6 flex flex-col flex-grow">
        {/* title */}
        <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-4">{title}</h3>
        
        {/* desc w/ fixed height & optional scroll */}
        <div className="mb-6 overflow-y-auto flex-grow">
          <p className="text-[var(--color-text)]">{description}</p>
        </div>
        
        {/* technologies */}
        <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
                <SkillPill key={tech} name={tech} />
            ))}
        </div>
        
        {/* buttons w/ fixed height */}
        <div className="flex gap-3 mt-auto">
          {repoUrl && (
            <Link href={repoUrl} target="_blank" passHref>
              <ThemeButton 
                variant="outline" 
                className="text-sm py-2"
              >
                View Repository
              </ThemeButton>
            </Link>
          )}
          
          {liveUrl && (
            <Link href={liveUrl} target="_blank" passHref>
              <ThemeButton 
                variant="primary" 
                className="text-sm py-2"
              >
                Live Demo
              </ThemeButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}