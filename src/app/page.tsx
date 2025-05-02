// src/app/page.tsx

// use client
'use client';

// imports
// components
import { Sidebar } from '~/components/sidebar/Sidebar';
import { SectionHeading } from '~/components/ui/SectionHeading';
// sections
import { HeroSection } from '~/sections/HeroSection';
import { AboutSection } from '~/sections/AboutSection';
import { ExperienceSection } from '~/sections/ExperienceSection';
import { ProjectsSection } from '~/sections/ProjectsSection';
import { Footer } from '~/sections/Footer';
// hooks
import { useScrollSidebar } from '~/hooks/useScrollSidebar';
// styles
import { sidebarAnimation, contentAnimation } from '~/styles/sidebarAnimations';

// home page
export default function Home() {
  // use scroll sidebar hook
  const { showSidebar, activeSection, scrollToSection } = useScrollSidebar({
    offset: 150 
  });

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <div 
        className="fixed left-0 top-0 h-screen z-50"
        style={showSidebar ? sidebarAnimation.visible : sidebarAnimation.hidden}
      >
        <Sidebar 
          activeSection={activeSection} 
          onSectionClick={scrollToSection} 
        />
      </div>
      
      {/* Main content */}
      <main style={showSidebar ? contentAnimation.withSidebar : contentAnimation.fullWidth}>
        {/* Hero section */}
        <section id="hero" className="min-h-screen flex items-center bg-[var(--color-background)] py-24">
          <HeroSection scrollToSection={scrollToSection} />
        </section>

        {/* About section */}
        <section id="about" className="py-24 bg-[var(--color-background)]">
          <div className="container mx-auto px-8">
            <SectionHeading 
              title="About Me" 
              subtitle="Let me introduce myself"
            />
            <div className="mt-8">
              <AboutSection />
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section id="experience" className="py-24 bg-[var(--color-background-alt)]">
          <div className="container mx-auto px-8">
            <SectionHeading 
              title="Experience" 
              subtitle="My professional journey"
            />
            <div className="mt-12">
              <ExperienceSection />
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="py-24 bg-[var(--color-background)]">
          <div className="container mx-auto px-8">
            <SectionHeading 
              title="Projects" 
              subtitle="Some things I've built"
            />
            <div className="mt-12">
              <ProjectsSection />
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}