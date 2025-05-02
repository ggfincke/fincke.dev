// src/components/sections/ProjectsSection.tsx

// use client 
'use client';

// imports
import { useState, useEffect } from 'react';
import { ProjectCard } from '~/components/ui/ProjectCard';
import { NavigationArrow } from '~/components/ui/NavigationArrow';
import { PaginationDots } from '~/components/ui/PaginationDots';

// project data
const projects = [
  {
    title: "InStock",
    dateRange: "Dec 2024 - Present",
    bulletPoints: [
      "Designed a price tracking system for monitoring product pricing and availability across various major retailers",
      "Created a custom database schema using Django's ORM and PostgreSQL for efficient data storage and retrieval",
      "Engineered a microservices architecture in Django with Redis and Celery for predictable and scalable performance",
      "Built RESTful API endpoints for data retrieval and user management to a React frontend and mobile app",
      "Integrated Discord bot functionality for real-time alerts"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "React", "Selenium", "Redis", "Celery"],
    repoUrl: "https://github.com/ggfincke/instock"
  },
  {
    title: "Portfolio Website",
    dateRange: "Mar 2025 - Apr 2025",
    bulletPoints: [
      "Built a personal portfolio website with Next.js, React, TypeScript (you're looking at it!)",
      "Implemented modern, responsive design with animations and transitions using Tailwind CSS",
      "Created a custom component system for UI consistency",
      "Designed with accessibility and performance in mind",
      "Configured continuous deployment with Vercel"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
    repoUrl: "https://github.com/ggfincke/fincke.dev",
    liveUrl: "https://fincke.dev"
  },
  {
    title: "SwimMate",
    dateRange: "Feb 2024 - Jun 2024",
    bulletPoints: [
      <>Final Project for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/cmpsc/#:~:text=CMPSC%20475%3A%20Applications%20Programming" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">CMPSC 475: Applications Programming</a>, 
      the class I would later go on to LA for</>,
      "Developed a native iOS/watchOS app for swimmers to track, find, and save workouts, view history, and follow progress over time",
      "Built custom components in SwiftUI for workout entry, lap timing, and charting performance trends",
      "Implemented HealthKit to track swimming metrics",
      "Connected iOS app to Apple Watch to track workout data and other metrics, as well as sending premade workouts to the watch for user to follow",
      "Designed a clean and intuitive UI tailored for quick post-swim logging"
    ],
    technologies: ["Swift", "SwiftUI", "HealthKit", "WatchKit"],
    repoUrl: "https://github.com/ggfincke/SwimMate"
  },
  {
    title: "TCGhub",
    dateRange: "Sep 2024 - Dec 2024",
    bulletPoints: [
      <>Final Project for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/cmpsc/#:~:text=CMPSC%20431W%3A%20Database%20Management%20Systems" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">CMPSC 431W: Database Management Systems</a>, 
      created with my friend Yash Tumuluri</>,
      <>Developed a React-based trading card marketplace clone with live data integration (essentially a replica of <a href="https://www.tcgplayer.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">tcgplayer.com</a>)</>,
      "Customized a complex database schema in BCNF and hand-wrote all SQL queries to the local SQLite database",
      "Implemented filtering and search functionality for card sets and rarities",
      "Used React Router for smooth client-side navigation across views",
      "Styled with modern CSS to create a clean, responsive UI"
    ],
    technologies: ["React", "JavaScript", "CSS", "Pokémon TCG API"],
    repoUrl: "https://github.com/ggfincke/TCGhub"
  },
  {
    title: "OPTIMUS",
    dateRange: "Feb 2024 - Apr 2024",
    bulletPoints: [
      <>Built a fine-tuned Discord chatbot using <a href="https://www.microsoft.com/en-us/research/project/godel/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">Microsoft's GODEL-v1.1 model</a> for contextual conversation generation</>,
      "Integrated HuggingFace Transformers to run local inference with a custom-trained seq2seq model",
      "Created rich Discord interactions including emote reactions, user-specific triggers, and dynamic status updates",
      "Designed 'Free Rein' and 'Puppeteer Mode' to control bot behavior based on real-time message context"
    ],
    technologies: ["Python", "Discord.py", "Transformers", "HuggingFace", "APScheduler"],
    repoUrl: "https://github.com/ggfincke/OPTIMUS"
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