// src/app/page.tsx

// use client
'use client';

// import components
import { Sidebar } from '~/components/sidebar/Sidebar';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { ThemeButton } from '~/components/buttons/ThemeButton';
import { AboutSection } from '~/components/sections/AboutSection';
import { ExperienceSection } from '~/components/sections/ExperienceSection';
import { ProjectsSection } from '~/components/sections/ProjectsSection';
import { ContactSection } from '~/components/sections/ContactSection';
import { Footer } from '~/components/sections/Footer';

// home page
export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* sidebar (left side) */}
      <Sidebar />
      
      {/* main content area (right side) */}
      <main className="w-full pl-72">
        {/* hero section */}
        <section id="hero" className="min-h-screen flex items-center bg-[var(--color-background)] py-24">
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
                <ThemeButton variant="outline" onClick={() => document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'})}>
                  View Experience
                </ThemeButton>
              </div>
            </div>
          </div>
        </section>

        {/* about section */}
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

        {/* experience section */}
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

        {/* projects section */}
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

        {/* contact section */}
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
        
        {/* footer */}
        <Footer />
      </main>
    </div>
  );
}