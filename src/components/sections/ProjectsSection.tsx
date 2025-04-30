// src/components/sections/ProjectsSection.tsx

// use client 
'use client';

// imports
import { useState, useEffect } from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { NavigationArrow } from '../ui/NavigationArrow';
import { PaginationDots } from '../ui/PaginationDots';

// project data (filler data for now)
const projects = [
  {
    title: "InStock",
    description: "A price tracking system that monitors product pricing and availability across major e-commerce platforms using web scrapers. The system uses microservices architecture with Django, Redis for pub/sub messaging and Celery for task scheduling. Features include a fault-tolerant architecture with error recovery mechanisms, RESTful API endpoints for data retrieval, and Discord bot integration for real-time alerts.",
    technologies: ["Python", "Django", "PostgreSQL", "React", "Selenium", "Redis", "Celery"],
    repoUrl: "https://github.com/ggfincke/instock"
  },
  {
    title: "Portfolio Website",
    description: "This personal portfolio website built with Next.js, React, Typescript, and Tailwind CSS. Features a responsive design, dark mode, custom component system, and smooth transitions. The site showcases professional experience, projects, and skills with a clean, minimalist design.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/ggfincke/fincke.dev",
    liveUrl: "https://fincke.dev"
  },
  {
    title: "Project Tracker",
    description: "A collaborative task management tool for software development teams with real-time updates and progress visualization. Includes features for sprint planning, task assignment, time tracking, and customizable dashboards. Uses Socket.io for real-time collaboration and Chart.js for burndown charts and other progress metrics.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Chart.js"],
    repoUrl: "https://github.com/ggfincke/project-tracker"
  },
  {
    title: "SwiftUI Weather App",
    description: "A weather application built with SwiftUI featuring location-based forecasts, animated weather conditions, and customizable alerts. Integrates with WeatherKit API for accurate forecasts and uses Core Location for precise location services. Implements MapKit for interactive weather maps and custom SwiftUI animations for weather conditions.",
    technologies: ["Swift", "SwiftUI", "CoreLocation", "WeatherKit", "MapKit"],
    repoUrl: "https://github.com/ggfincke/swiftui-weather"
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets with customizable charts, filters, and export capabilities. Built with React and D3.js, it allows users to upload their own datasets, create visualizations, and share insights with team members. Includes support for multiple chart types and responsive design for all device sizes.",
    technologies: ["React", "D3.js", "Node.js", "Express", "CSV Parsing"],
    repoUrl: "https://github.com/ggfincke/data-viz-dashboard"
  }
];

// projects section component
export function ProjectsSection() {
  // state to track current project index
  const [currentIndex, setCurrentIndex] = useState(0);
  // state for animation
  const [isAnimating, setIsAnimating] = useState(false);
  
  // navigation functions
  const navigateToProject = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
  };
  
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    navigateToProject(newIndex);
  };
  
  const goToNext = () => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    navigateToProject(newIndex);
  };
  
  // reset animation state after transition completes
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // match this to the CSS transition duration
      
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);
  
  return (
    <div className="max-w-3xl mx-auto relative px-8 sm:px-4">
      {/* project display */}
      <div className="relative mb-10">
        {/* left navigation arrow */}
        <NavigationArrow 
          direction="left"
          onClick={goToPrevious}
          disabled={isAnimating}
        />
        
        {/* current project card w/ animation */}
        <div 
          className={`transition-all duration-300 ease-in-out ${
            isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}
        >
          <ProjectCard 
            title={projects[currentIndex].title}
            description={projects[currentIndex].description}
            technologies={projects[currentIndex].technologies}
            repoUrl={projects[currentIndex].repoUrl}
            liveUrl={projects[currentIndex].liveUrl}
          />
        </div>
        
        {/* right navigation arrow */}
        <NavigationArrow 
          direction="right"
          onClick={goToNext}
          disabled={isAnimating}
        />
      </div>
      
      {/* project counter & pagination dots */}
      <div className="flex flex-col items-center">
        {/* counter */}
        <div className="text-[var(--color-text)] mb-4">
          <span>Project {currentIndex + 1} of {projects.length}</span>
        </div>
        
        {/* pagination dots */}
        <PaginationDots 
          totalItems={projects.length}
          currentIndex={currentIndex}
          onDotClick={navigateToProject}
          disabled={isAnimating}
        />
      </div>
    </div>
  );
}