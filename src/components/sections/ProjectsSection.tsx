// src/components/sections/ProjectsSection.tsx

// imports
import { ProjectCard } from '../ui/ProjectCard';

// project data
const projects = [
  {
    title: "InStock",
    description: "A price tracking system that monitors product pricing and availability across major e-commerce platforms using web scrapers.",
    technologies: ["Python", "Django", "PostgreSQL", "React", "Selenium", "Redis", "Celery"],
    imageUrl: "/instock.svg",
    repoUrl: "https://github.com/ggfincke/instock"
  },
  {
    title: "Portfolio Website",
    description: "This personal portfolio website built with Next.js, React, Typescript, and Tailwind CSS.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/portfolio.svg",
    repoUrl: "https://github.com/ggfincke/fincke.dev",
    liveUrl: "https://fincke.dev"
  }
  // add more projects
];

// projects section component
export function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectCard 
          key={project.title}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          imageUrl={project.imageUrl}
          repoUrl={project.repoUrl}
          liveUrl={project.liveUrl}
        />
      ))}
    </div>
  );
}