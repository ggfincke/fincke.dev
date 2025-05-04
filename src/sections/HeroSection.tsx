// src/sections/HeroSection.tsx

// imports
import React from 'react';

// hero section
interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <>
      {/* Content container */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-[var(--color-text-light)]">
            Garrett Fincke
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mt-2">
            Software Engineer
          </h2>
          <p className="mt-6 text-xl text-[var(--color-text)]">
            Full-stack application development with a focus on clean code and accessible interfaces.
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
      
      {/* Wave SVG */}
      <div className="absolute bottom-[20%] left-0 right-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="144" viewBox="0 0 1440 144" fill="none" preserveAspectRatio="none">
          <path d="M462 101.335C228.6 101.335 143.4 28.1958 0 28.1958V58.6706C96 58.6706 253.8 131.81 462 131.81C670.2 131.81 869.4 101.335 960 101.335C1084.8 101.335 1330.2 144 1440 144V113.525C1330.2 113.525 1084.8 70.8605 960 70.8605C867 70.8605 624.6 101.335 462 101.335Z" fill="url(#paint0_linear_24_31)"/>
          <path d="M462 72.5035C228.6 72.5035 143.4 0 0 0V30.2098C96 30.2098 253.8 102.713 462 102.713C670.2 102.713 869.4 72.5035 960 72.5035C1084.8 72.5035 1330.2 114.797 1440 114.797V84.5874C1330.2 84.5874 1084.8 42.2937 960 42.2937C867 42.2937 624.6 72.5035 462 72.5035Z" fill="url(#paint1_linear_24_31)"/>
          <defs>
            <linearGradient id="paint0_linear_24_31" x1="721.524" y1="0.0119269" x2="716.661" y2="310.697" gradientUnits="userSpaceOnUse">
              <stop offset="0.1" stop-color="#80CBC4"/>
              <stop offset="0.9" stop-color="#0F111A" stop-opacity="0.15"/>
            </linearGradient>
            <linearGradient id="paint1_linear_24_31" x1="721.524" y1="0.00950815" x2="718.433" y2="247.71" gradientUnits="userSpaceOnUse">
              <stop offset="1" stop-color="#80CBC4"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}