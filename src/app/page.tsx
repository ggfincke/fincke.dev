// src/app/page.tsx

// use client
'use client';

// components
import { useState, useEffect } from 'react';

import { SectionHeading } from '~/components/display/SectionHeading';
import { Sidebar } from '~/components/layout/Sidebar';
// sections
import { NAV_SECTIONS } from '~/config/navSections';
import { useBreakpoint } from '~/hooks/useBreakpoint';
import { useNav } from '~/hooks/useNav';
import { Footer } from '~/sections/Footer';
import { AboutSection } from '~/sections/home/AboutSection';
import { ExperienceSection } from '~/sections/home/ExperienceSection';
import { HeroSection } from '~/sections/home/HeroSection';
import { ProjectsSection } from '~/sections/home/ProjectsSection';

// hooks

// config

export default function Home() 
{
  const { showSidebar, activeSection, scrollToSection } = useNav({
    offset: 150 
  });
  const { isDesktop } = useBreakpoint();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => 
  {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Sidebar - always render but let CSS handle visibility to avoid hydration mismatch */}
      <div 
        className={`sidebar-container ${showSidebar ? 'sidebar-visible' : 'sidebar-hidden'} hidden lg:block`}
        style={{ display: (isMounted && isDesktop) ? undefined : 'none' }}
      >
        <Sidebar 
          activeSection={activeSection} 
          onSectionClick={scrollToSection} 
        />
      </div>
      
      {/* Main content */}
      <main className={`main-content ${(!isMounted || !isDesktop) ? '' : (showSidebar ? 'main-content-with-sidebar' : 'main-content-full')}`}>
        {/* Hero section */}
        <section id={NAV_SECTIONS.hero.id} className="min-h-screen flex items-center bg-[var(--color-background)] py-16 md:py-24 relative">
          <HeroSection scrollToSection={scrollToSection} />
        </section>

        {/* About section */}
        <section id={NAV_SECTIONS.about.id} className="py-16 md:py-24 bg-[var(--color-background)]">
          <div className="container mx-auto px-4 sm:px-8">
            <SectionHeading 
              title="About Me" 
              subtitle="Who I am & what I do"
            />
            <div className="mt-8">
              <AboutSection />
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section id={NAV_SECTIONS.experience.id} className="py-16 md:py-24 bg-[var(--color-background-alt)]">
          <div className="container mx-auto px-4 sm:px-8">
            <SectionHeading 
              title="Experience" 
              subtitle="Where I've worked & what I've done"
            />
            <div className="mt-8 md:mt-12">
              <ExperienceSection />
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id={NAV_SECTIONS.projects.id} className="py-16 md:py-24 bg-[var(--color-background)]">
          <div className="container mx-auto px-4 sm:px-8">
            <SectionHeading 
              title="Projects" 
              subtitle="What I've built & what I'm working on"
              subsubtitle="Projects listed in no order; Private repositories available upon request."
            />
            <div className="mt-8 md:mt-12">
              <ProjectsSection />
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <Footer isSmallScreen={!isDesktop} />
      </main>
    </div>
  );
}