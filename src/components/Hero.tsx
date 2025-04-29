// src/components/Hero.tsx

// use client
'use client';

// import dependencies
import { ThemeButton } from '~/components/ThemeButton';

// hero component
export function Hero() {
  return (
    <section id="hero" className="w-full bg-[var(--color-background)] py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-left max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--color-text-light)]">
            Garrett Fincke
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mt-2">
            Software Engineer
          </h2>
          <p className="mt-6 text-xl text-[var(--color-text)]">
            Full-stack application development
          </p>
          <div className="mt-10 flex gap-4">
            <ThemeButton 
              variant="primary" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              Get in Touch
            </ThemeButton>
            <ThemeButton 
              variant="outline" 
              onClick={() => document.getElementById('resume')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-transparent"
            >
              View Resume
            </ThemeButton>
          </div>
        </div>
      </div>
    </section>
  );
}