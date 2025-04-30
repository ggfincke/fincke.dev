// src/components/ui/ProjectCard.tsx

// use client
'use client';

// imports
import Image from 'next/image';
import Link from 'next/link';
import { ThemeButton } from '../buttons/ThemeButton';
import { SkillPill } from './SkillPill';

// project card component
interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    repoUrl?: string;
    liveUrl?: string;
  }
  
  export function ProjectCard({ 
    title, 
    description, 
    technologies, 
    imageUrl = "/file.svg", 
    repoUrl, 
    liveUrl 
  }: ProjectCardProps) {
    return (
      <div className="border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-background-alt)] hover:shadow-lg transition-all">
        {/* image */}
        <div className="h-48 w-full relative bg-[var(--color-sidebar)]">
          {imageUrl && (
            <Image 
              src={imageUrl}
              alt={`${title} project interface`}
              fill
              className="object-cover"
            />
          )}
        </div>
        
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--color-text-light)] mb-2">{title}</h3>
          <p className="text-[var(--color-text)] mb-4">{description}</p>
          
          {/* technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <SkillPill key={tech} name={tech} />
            ))}
          </div>
          
          {/* buttons */}
          <div className="flex gap-3">
            {repoUrl && (
              <Link href={repoUrl} passHref>
                <ThemeButton 
                  variant="outline" 
                  className="text-sm py-2"
                >
                  View Repository
                </ThemeButton>
              </Link>
            )}
            
            {/* live demo */}
            {liveUrl && (
              <Link href={liveUrl} passHref>
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