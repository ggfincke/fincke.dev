// src/components/ProjectsSection.tsx

import Image from 'next/image';
import { ThemeButton } from '~/components/buttons/ThemeButton';

// project card component
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
}

function ProjectCard({ 
  title, 
  description, 
  technologies, 
  imageUrl = "/public/file.svg", 
  repoUrl, 
  liveUrl 
}: ProjectCardProps) {
  return (
    <div className="border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-background-alt)] hover:shadow-lg transition-all">
      <div className="h-48 w-full relative bg-[var(--color-sidebar)]">
        {imageUrl && (
          <Image 
            src={imageUrl}
            alt={`${title} screenshot`}
            fill
            className="object-cover"
          />
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--color-text-light)] mb-2">{title}</h3>
        <p className="text-[var(--color-text)] mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-[var(--color-sidebar)] text-[var(--color-text)] px-3 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {repoUrl && (
            <ThemeButton 
              variant="outline" 
              href={repoUrl}
              className="text-sm py-2"
            >
              View Repository
            </ThemeButton>
          )}
          
          {liveUrl && (
            <ThemeButton 
              variant="primary" 
              href={liveUrl}
              className="text-sm py-2"
            >
              Live Demo
            </ThemeButton>
          )}
        </div>
      </div>
    </div>
  );
}

// projects section component
export function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard 
        title="InStock"
        description="A price tracking system that monitors product pricing and availability across major e-commerce platforms using web scrapers."
        technologies={["Python", "Django", "PostgreSQL", "React", "Selenium", "Redis", "Celery"]}
        repoUrl="#" // Replace with actual URL when available
      />
      
      <ProjectCard 
        title="Portfolio Website"
        description="This personal portfolio website built with Next.js, React, and Tailwind CSS."
        technologies={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
        repoUrl="https://github.com/ggfincke/fincke.dev" // Replace with actual URL
        liveUrl="https://fincke.dev"
      />
      
      {/* Add more project cards as needed */}
    </div>
  );
}