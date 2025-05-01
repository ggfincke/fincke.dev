// src/app/page.tsx

// use client
'use client';

// imports
import { useRef } from 'react';
import { Sidebar } from '~/components/sidebar/Sidebar';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { HeroSection } from '~/sections/HeroSection';
import { AboutSection } from '~/sections/AboutSection';
import { ExperienceSection } from '~/sections/ExperienceSection';
import { ProjectsSection } from '~/sections/ProjectsSection';
import { ContactSection } from '~/sections/ContactSection';
import { Footer } from '~/sections/Footer';
import { useScrollSidebar } from '~/hooks/useScrollSidebar';

// animation styles
const sidebarAnimation = {
  visible: {
    transform: 'translateX(0)',
    transition: 'transform 0.5s ease-in-out'
  },
  hidden: {
    transform: 'translateX(-100%)',
    transition: 'transform 0.5s ease-in-out'
  }
};

const contentAnimation = {
  withSidebar: {
    paddingLeft: '18rem',
    transition: 'padding-left 0.5s ease-in-out'
  },
  fullWidth: {
    paddingLeft: '0',
    transition: 'padding-left 0.5s ease-in-out'
  }
};

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

        {/* Contact section */}
        <section id="contact" className="py-24 bg-[var(--color-background-alt)]">
          <div className="container mx-auto px-8">
            <SectionHeading 
              title="Contact" 
              subtitle="Get in touch with me"
            />
            <div className="mt-12">
              <ContactSection />
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}