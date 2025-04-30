// src/components/sections/ProjectsSection.tsx

// use client 
'use client';

// imports
import { useState, useEffect } from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { NavigationArrow } from '../ui/NavigationArrow';
import { PaginationDots } from '../ui/PaginationDots';

// project data
const projects = [
  {
    title: "InStock",
    dateRange: "Dec 2024 - Present",
    bulletPoints: [
      "Designed a price tracking system for monitoring product pricing and availability",
      "Engineered a microservices architecture in Django with Redis and Celery",
      "Designed a fault-tolerant architecture with 99% system uptime",
      "Built RESTful API endpoints for data retrieval and user management",
      "Integrated Discord bot functionality for real-time alerts"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "React", "Selenium", "Redis", "Celery"],
    repoUrl: "https://github.com/ggfincke/instock"
  },
  {
    title: "Portfolio Website",
    dateRange: "Mar 2025 - Apr 2025",
    bulletPoints: [
      "Built a personal portfolio website with Next.js, React, TypeScript",
      "Implemented responsive design with Tailwind CSS",
      "Created a custom component system for UI consistency",
      "Designed with accessibility and performance in mind",
      "Configured continuous deployment with Vercel"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/ggfincke/fincke.dev",
    liveUrl: "https://fincke.dev"
  },
  {
    title: "Project Tracker",
    dateRange: "Oct 2024 - Dec 2024",
    bulletPoints: [
      "Developed a collaborative task management tool for software teams",
      "Implemented real-time updates with Socket.io",
      "Created visualizations for sprint planning and progress tracking",
      "Designed customizable dashboards for different team roles",
      "Built time tracking functionality for accurate project estimates"
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Chart.js"],
    repoUrl: "https://github.com/ggfincke/project-tracker"
  },
  {
    title: "SwiftUI Weather App",
    dateRange: "Sep 2024 - Oct 2024",
    bulletPoints: [
      "Built a weather application with SwiftUI and WeatherKit API",
      "Implemented location-based forecasts with Core Location",
      "Created custom animations for different weather conditions",
      "Designed an interactive weather map with MapKit",
      "Added customizable weather alerts and notifications"
    ],
    technologies: ["Swift", "SwiftUI", "CoreLocation", "WeatherKit", "MapKit"],
    repoUrl: "https://github.com/ggfincke/swiftui-weather"
  },
  {
    title: "Data Visualization Dashboard",
    dateRange: "Jan 2024 - Feb 2025",
    bulletPoints: [
      "Created an interactive dashboard for visualizing complex datasets",
      "Built customizable charts and filters with D3.js and React",
      "Implemented CSV parsing for user data uploads",
      "Added export capabilities for charts and insights",
      "Designed a responsive interface for all device sizes"
    ],
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
    <div className="max-w-4xl mx-auto relative px-8 sm:px-4">
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
            dateRange={projects[currentIndex].dateRange}
            bulletPoints={projects[currentIndex].bulletPoints}
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