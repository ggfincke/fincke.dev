// src/sections/HeroSection.tsx

// imports
import React from 'react';

// hero section
interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <div className="container mx-auto px-8">
      <div className="max-w-2xl">
        <h1 className="text-5xl sm:text-6xl font-bold text-[var(--color-text-light)]">
          Garrett Fincke
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mt-2">
          Software Engineer
        </h2>
        <p className="mt-6 text-xl text-[var(--color-text)]">
          Full-stack application development with a focus on clean, accessible interfaces.
        </p>
        <div className="mt-10 flex justify-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors animate-bounce flex flex-col items-center"
          >
            <span className="block mb-2">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 