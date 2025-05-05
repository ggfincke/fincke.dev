// src/components/sections/ProjectsSection.tsx

// use client 
'use client';

// imports
import { useState, useEffect } from 'react';
import { ProjectCard } from '~/components/ui/ProjectCard';
import { NavigationArrow } from '~/components/ui/cards/NavigationArrow';
import { PaginationDots } from '~/components/ui/cards/PaginationDots';
import { projects } from '~/data/structured/projects';

// projects section component
export function ProjectsSection() {
  // state to track current project index
  const [currentIndex, setCurrentIndex] = useState(0);
  // state for animation
  const [isAnimating, setIsAnimating] = useState(false);
  // state to detect screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Check for screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // 768px is the 'md' breakpoint in Tailwind
    };
    
    // Set initial value
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
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
    <div className="max-w-4xl mx-auto relative px-4 sm:px-8">
      {/* project display */}
      <div className="relative mb-6 md:mb-10">
        {/* Side navigation arrows - only on larger screens */}
        {!isSmallScreen && (
          <>
            <NavigationArrow 
              direction="left"
              onClick={goToPrevious}
              disabled={isAnimating}
            />
            
            <NavigationArrow 
              direction="right"
              onClick={goToNext}
              disabled={isAnimating}
            />
          </>
        )}
        
        {/* current project card w/ animation */}
        <div 
          className={`transition-all duration-300 ease-in-out ${
            isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}
        >
          <ProjectCard 
            title={projects[currentIndex].title}
            dateRange={projects[currentIndex].dateRange}
            status={projects[currentIndex].status}
            bulletPoints={projects[currentIndex].bulletPoints}
            technologies={projects[currentIndex].technologies}
            repoUrl={projects[currentIndex].repoUrl}
            liveUrl={projects[currentIndex].liveUrl}
          />
        </div>
      </div>
      
      {/* Navigation controls - centered and with correct layout */}
      <div className="flex flex-col items-center space-y-4">
        {/* Pagination dots always horizontal */}
        <PaginationDots 
          totalItems={projects.length}
          currentIndex={currentIndex}
          onDotClick={navigateToProject}
          disabled={isAnimating}
        />
        
        {/* Mobile-friendly navigation buttons - horizontal */}
        {isSmallScreen && (
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={goToPrevious}
              disabled={isAnimating}
              className="bg-[var(--color-background-alt)] border border-[var(--color-border)] rounded-full p-2 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={goToNext}
              disabled={isAnimating}
              className="bg-[var(--color-background-alt)] border border-[var(--color-border)] rounded-full p-2 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}