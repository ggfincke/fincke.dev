// src/app/page.tsx

// use client
'use client';

// components
import { Sidebar } from '~/components/layout/Sidebar';
import { SectionHeading } from '~/components/display/SectionHeading';
// sections
import { HeroSection } from '~/sections/home/HeroSection';
import { AboutSection } from '~/sections/home/AboutSection';
import { ExperienceSection } from '~/sections/home/ExperienceSection';
import { ProjectsSection } from '~/sections/home/ProjectsSection';
import { Footer } from '~/sections/Footer';
// hooks
import { useScrollSidebar } from '~/hooks/useScrollSidebar';
import { useBreakpoint } from '~/hooks/useBreakpoint';
// styles
import '~/styles/sidebarAnimation.css';
export default function Home() {
  const { showSidebar, activeSection, scrollToSection } = useScrollSidebar({
    offset: 150 
  });
  const { isDesktop } = useBreakpoint();

  return (
    <div className="min-h-screen">
      {/* Sidebar - hidden on mobile and tablet screens */}
      {isDesktop && (
        <div 
          className={`sidebar-container ${showSidebar ? 'sidebar-visible' : 'sidebar-hidden'} hidden lg:block`}
        >
          <Sidebar 
            activeSection={activeSection} 
            onSectionClick={scrollToSection} 
          />
        </div>
      )}
      
      {/* Main content */}
      <main className={`main-content ${!isDesktop ? '' : (showSidebar ? 'main-content-with-sidebar' : 'main-content-full')}`}>
        {/* Hero section */}
        <section id="hero" className="min-h-screen flex items-center bg-[var(--color-background)] py-16 md:py-24 relative">
          <HeroSection scrollToSection={scrollToSection} />
        </section>

        {/* About section */}
        <section id="about" className="py-16 md:py-24 bg-[var(--color-background)]">
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
        <section id="experience" className="py-16 md:py-24 bg-[var(--color-background-alt)]">
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
        <section id="projects" className="py-16 md:py-24 bg-[var(--color-background)]">
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