// src/app/page.tsx

// use client
'use client';

// import components
import { Sidebar } from '~/components/sidebar/Sidebar';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { ThemeButton } from '~/components/buttons/ThemeButton';
import { AboutSection } from '~/components/sections/AboutSection';
import { ResumeSection } from '~/components/sections/ResumeSection';
import { ProjectsSection } from '~/components/sections/ProjectsSection';
import { ContactSection } from '~/components/sections/ContactSection';
import { Footer } from '~/components/sections/Footer';

// home page
export default function Home() {
  return (
    <div className="flex">
      {/* Main Content Area (Left Side) */}
      <main className="w-full pr-72 min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center bg-[var(--color-background)] py-32">
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
              <div className="mt-10 flex gap-4">
                <ThemeButton variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                  Get in Touch
                </ThemeButton>
                <ThemeButton variant="outline" onClick={() => document.getElementById('resume')?.scrollIntoView({behavior: 'smooth'})}>
                  View Resume
                </ThemeButton>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center bg-[var(--color-background)] py-24">
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

        {/* Resume Section */}
        <section id="resume" className="min-h-screen flex items-center bg-[var(--color-background-alt)] py-24">
          <div className="container mx-auto px-8">
            <SectionHeading 
              title="Resume" 
              subtitle="My professional background"
            />
            <div className="mt-8">
              <ResumeSection />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center bg-[var(--color-background)] py-24">
          <div className="container mx-auto px-8">
            <SectionHeading 
              title="Projects" 
              subtitle="Some things I've built"
            />
            <div className="mt-8">
              <ProjectsSection />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center bg-[var(--color-background-alt)] py-24">
          <div className="container mx-auto px-8">
            <SectionHeading 
              title="Contact" 
              subtitle="Get in touch with me"
            />
            <div className="mt-8">
              <ContactSection />
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <Footer />
      </main>

      {/* Sidebar (Right Side) */}
      <Sidebar />
    </div>
  );
}