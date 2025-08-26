// src/app/projects/page.tsx

'use client';

import Link from 'next/link';
import { ProjectsTable } from '~/sections/projects/ProjectsTable';
export default function ProjectsPage() 
{
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Back navigation */}
        <div className="mb-4">
          <Link 
            href="/" 
            className="text-[var(--color-primary)] hover:text-[var(--color-text-light)] transition-colors inline-flex items-center text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Garrett Fincke
          </Link>
        </div>

        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-[var(--color-text-light)] mb-4">
            All Projects
          </h1>
          <p className="text-xl text-[var(--color-text)]">
            A complete archive of things I&apos;ve built
          </p>
        </div>

        <ProjectsTable />
        
        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-[var(--color-muted)] text-sm">
            Private repositories available upon request
          </p>
        </div>
      </div>
    </div>
  );
}