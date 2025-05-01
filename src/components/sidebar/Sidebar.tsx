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
    </aside>
  );
}