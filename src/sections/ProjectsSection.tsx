// src/components/sections/ProjectsSection.tsx

// use client 
'use client';

// imports
import { useState, useEffect } from 'react';
import { ProjectCard } from '~/components/ui/ProjectCard';
import { NavigationArrow } from '~/components/ui/NavigationArrow';
import { PaginationDots } from '~/components/ui/PaginationDots';
import { projects } from '~/data/structured/projects';

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
      
      {/* pagination dots */}
      <div className="flex flex-col items-center">
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