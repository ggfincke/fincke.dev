// src/sections/home/ProjectsSection.tsx

'use client';

import Image from 'next/image';

import { PaginationDots } from '~/components/display/PaginationDots';
import { ProjectCard } from '~/components/display/ProjectCard';
import { NavArrow } from '~/components/navigation/NavArrow';
import { SectionNavButton } from '~/components/navigation/SectionNavButton';
import { getImageSizes } from '~/constants/breakpoints';
import { getFeaturedProjects } from '~/data/structured/projects';
import { useBreakpoint } from '~/hooks/useBreakpoint';
import { useSectionNavigation } from '~/hooks/useSectionNavigation';

// featured projects section w/ navigation controls
export function ProjectsSection() 
{
  const projects = getFeaturedProjects();
  const { isMobile } = useBreakpoint();
  
  const {
    currentIndex,
    isAnimating,
    goToNext,
    goToPrevious,
    goToIndex: navigateToProject,
    getTransitionClasses,
  } = useSectionNavigation({
    totalItems: projects.length,
    transitionDuration: 300,
  });
  
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-8">
      {/* project display */}
      <div className="relative mb-6 md:mb-10">
        {/* Side navigation arrows - only on larger screens */}
        {!isMobile && (
          <>
            <NavArrow 
              direction="left"
              onClick={goToPrevious}
              disabled={isAnimating}
            />
            
            <NavArrow 
              direction="right"
              onClick={goToNext}
              disabled={isAnimating}
            />
          </>
        )}
        
        {/* current project card w/ animation */}
        <div className={getTransitionClasses()}>
          <ProjectCard 
            title={projects[currentIndex].title}
            dateRange={projects[currentIndex].dateRange}
            status={projects[currentIndex].status}
            bulletPoints={projects[currentIndex].bulletPoints}
            technologies={projects[currentIndex].technologies}
            repoUrl={projects[currentIndex].repoUrl}
            liveUrl={projects[currentIndex].liveUrl}
            collaborators={projects[currentIndex].collaborators}
            contentComponent={
              projects[currentIndex].imagePath ? (
                <div className="w-full h-full relative rounded-lg">
                  <Image
                    src={projects[currentIndex].imagePath!}
                    alt={projects[currentIndex].imageAlt!}
                    width={800}
                    height={600}
                    className="object-contain hover:scale-105 hover:z-50 transition-all duration-300 rounded-lg w-full h-full"
                    sizes={getImageSizes('100vw', '50vw')}
                  />
                </div>
              ) : undefined
            }
          />
        </div>
      </div>
      
      {/* Navigation controls - centered / normal layout */}
      <div className="flex flex-col items-center space-y-4">
        {/* Pagination dots */}
        <PaginationDots 
          totalItems={projects.length}
          currentIndex={currentIndex}
          onDotClick={navigateToProject}
          disabled={isAnimating}
        />
        
        {/* Mobile-friendly navigation buttons */}
        {isMobile && (
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={goToPrevious}
              disabled={isAnimating}
              className="bg-[var(--card)] border border-[var(--border)] rounded-full p-2 text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={goToNext}
              disabled={isAnimating}
              className="bg-[var(--card)] border border-[var(--border)] rounded-full p-2 text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
      
      {/* View All Projects Button */}
      <div className="mt-12 flex justify-center">
        <SectionNavButton href="/projects">
          View All Projects
        </SectionNavButton>
      </div>
    </div>
  );
}