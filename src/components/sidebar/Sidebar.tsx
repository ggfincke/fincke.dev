// src/components/sidebar/Sidebar.tsx

// use client   
'use client';

// imports
import Image from 'next/image';
import { SidebarHeader } from './SidebarHeader';
import { Navigation } from './Navigation';

// interface for sidebar props
interface SidebarProps {
  // active section (from hook)
  activeSection: string;
  // scroll handler (from hook)
  onSectionClick: (sectionId: string) => void;
}

// main sidebar component
export function Sidebar({ activeSection, onSectionClick }: SidebarProps) {
  return (
    <aside className="h-screen w-72 flex flex-col bg-[var(--color-background-alt)] border-r border-[var(--color-border)]">
      {/* top section w/ logo */}
      <div className="pt-12 px-6">
        <SidebarHeader 
          logo={
            <Image 
              src="/fincke-logo-alt.svg"
              alt="Fincke Logo"
              width={600}
              height={200}
              className="mb-4"
            />
          } 
        />
      </div>
      
      {/* spacer to push nav up */}
      <div className="flex-1 flex flex-col justify-center w-full mt-[-180px]">
        <Navigation activeSection={activeSection} onSectionClick={onSectionClick} />
      </div>

      {/* Social icons at bottom */}
      <div className="px-6 pb-8">
        <div className="flex justify-center gap-6 py-4">
          <a 
            href="mailto:garrettfincke@gmail.com"
            className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          
          <a 
            href="tel:7247777186"
            className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            aria-label="Phone"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
          
          <a 
            href="https://github.com/ggfincke" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/garrett-fincke/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}