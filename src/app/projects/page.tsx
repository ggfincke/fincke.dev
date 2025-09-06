// src/app/projects/page.tsx
// dedicated projects archive page w/ navigation & table view

'use client';

import Link from 'next/link';

import { ThemeSelector } from '~/components/display/ThemeSelector';
import { ProjectsTable } from '~/sections/projects/ProjectsTable';

// * projects page component w/ table view & navigation
export default function ProjectsPage() 
{
  return (
    <div className="relative min-h-screen text-[var(--muted)] overflow-hidden">
      {/* Global gradient overlay for projects page (no particles) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--accent)]/8 via-transparent to-transparent z-0" />
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Back navigation */}
        <div className="mb-4">
          <Link 
            href="/" 
            className="transition-colors inline-flex items-center text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Garrett Fincke
          </Link>
        </div>

        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-[var(--fg)] mb-4">
            All Projects
          </h1>
          <p className="text-xl text-[var(--muted)]">
            A complete archive of things I&apos;ve built
          </p>
        </div>

        <ProjectsTable />
        
        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-[var(--muted)] text-sm">
            Private repositories available upon request
          </p>
        </div>
      </div>

      {/* Theme Selector - always show on projects page */}
      <ThemeSelector />
    </div>
  );
}
