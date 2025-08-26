// src/sections/home/HeroSection.tsx

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FloatingParticle from '~/components/display/FloatingParticle';
import { useTypingAnimation } from '~/hooks/useAnimation';
import type { HeroSectionProps } from '~/types/layout';

export function HeroSection({ scrollToSection }: HeroSectionProps) 
{
  const { displayText: nameText, isComplete: nameComplete } = useTypingAnimation('Garrett Fincke', 120);
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number, duration: number}>>([]);

  useEffect(() => 
{
    // generate particles on client side to avoid hydration mismatch
    const particleData = Array.from({ length: 10 }, (_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: i * 3,
      // 60-100 seconds (very slow)
      duration: 60 + Math.random() * 40 
    }));
    setParticles(particleData);
  }, []);

  return (
    <>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-[var(--color-background-alt)]/10 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent z-0" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {particles.map((particle, i) => (
          <FloatingParticle 
            key={i} 
            delay={particle.delay}
            left={particle.left}
            top={particle.top}
            duration={particle.duration}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-24">
          {/* Text content */}
          <div className="flex-1 max-w-2xl lg:mr-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-text-light)] min-h-[1.2em]">
              {nameText}
              <span className="animate-pulse">|</span>
            </h1>
            
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary)] mt-2 transition-all duration-1000 ${
                nameComplete 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Software Engineer
            </h2>
            
            <p 
              className={`mt-6 text-lg sm:text-xl text-[var(--color-text)] transition-all duration-1000 delay-500 ${
                nameComplete 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Full-stack application development with a focus on clean code and accessible interfaces.
            </p>
            
            <div 
              className={`mt-10 flex justify-center transition-all duration-1000 delay-700 ${
                nameComplete 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
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

          {/* Profile picture */}
          <div 
            className={`flex-shrink-0 lg:ml-auto transition-all duration-1000 delay-300 ${
              nameComplete 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="relative">
              {/* Profile picture container */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-background-alt)]/30 border-4 border-[var(--color-primary)]/30 overflow-hidden shadow-2xl">
                <Image 
                  src="/e1a0328be737ec1f073159545b2184d6.jpg" 
                  alt="Garrett Fincke" 
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)]/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave SVG */}
      <div className="absolute bottom-[20%] left-0 w-full z-0 hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="144" viewBox="0 0 1440 144" fill="none" preserveAspectRatio="none">
          <path d="M462 101.335C228.6 101.335 143.4 28.1958 0 28.1958V58.6706C96 58.6706 253.8 131.81 462 131.81C670.2 131.81 869.4 101.335 960 101.335C1084.8 101.335 1330.2 144 1440 144V113.525C1330.2 113.525 1084.8 70.8605 960 70.8605C867 70.8605 624.6 101.335 462 101.335Z" fill="url(#paint0_linear_24_31)"/>
          <path d="M462 72.5035C228.6 72.5035 143.4 0 0 0V30.2098C96 30.2098 253.8 102.713 462 102.713C670.2 102.713 869.4 72.5035 960 72.5035C1084.8 72.5035 1330.2 114.797 1440 114.797V84.5874C1330.2 84.5874 1084.8 42.2937 960 42.2937C867 42.2937 624.6 72.5035 462 72.5035Z" fill="url(#paint1_linear_24_31)"/>
          <defs>
            <linearGradient id="paint0_linear_24_31" x1="721.524" y1="0.0119269" x2="716.661" y2="310.697" gradientUnits="userSpaceOnUse">
              <stop offset="0.1" stopColor="#80CBC4"/>
              <stop offset="0.9" stopColor="#0F111A" stopOpacity="0.15"/>
            </linearGradient>
            <linearGradient id="paint1_linear_24_31" x1="721.524" y1="0.00950815" x2="718.433" y2="247.71" gradientUnits="userSpaceOnUse">
              <stop offset="1" stopColor="#80CBC4"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}