// src/components/layout/Sidebar.tsx
// * fixed sidebar w/ logo, navigation & social links

'use client';

import Image from 'next/image';

import { SocialIcons } from '~/components/interactive/SocialIcons';
import { SidebarHeader } from '~/components/layout/SidebarHeader';
import { Navigation } from '~/components/navigation/Navigation';
import type { SidebarProps } from '~/types/navigation';

// * main sidebar component
export function Sidebar({ activeSection, onSectionClick }: SidebarProps) 
{
  return (
    <aside className="h-screen w-72 flex flex-col bg-[var(--color-background-alt)] border-r border-[var(--color-border)]">
      {/* Top Section (w/ logo) */}
      <div className="pt-12 px-6">
        <SidebarHeader 
          logo={
            <Image 
              src="/assets/logos/brand/fincke-logo-alt.svg"
              alt="Fincke Logo"
              width={600}
              height={200}
              className="mb-4"
            />
          } 
        />
      </div>
      
      {/* Spacer */}
      <div className="flex-1 flex flex-col justify-center w-full mt-[-180px]">
        <Navigation activeSection={activeSection} onSectionClick={onSectionClick} />
      </div>

      {/* Social Icons at bottom */}
      <div className="px-6 pb-8">
        <SocialIcons className="py-4" />
      </div>
    </aside>
  );
}