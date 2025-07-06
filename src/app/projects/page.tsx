// src/app/projects/page.tsx

'use client';

import Link from 'next/link';
import { projects } from '~/data/structured/all_projects';
import type { Project } from '~/data/structured/all_projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-6xl mx-auto px-8 py-16">
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
            A complete archive of things I've built
          </p>
        </div>

        {/* Projects table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left py-4 pl-6 pr-6 text-sm font-medium text-[var(--color-text)] uppercase tracking-wider">
                  Year
                </th>
                <th className="text-left py-4 pl-4 pr-4 text-sm font-medium text-[var(--color-text)] uppercase tracking-wider">
                  Project
                </th>
                <th className="text-left py-4 pl-4 pr-4 text-sm font-medium text-[var(--color-text)] uppercase tracking-wider">
                  Made for
                </th>
                <th className="text-left py-4 pl-4 pr-4 text-sm font-medium text-[var(--color-text)] uppercase tracking-wider">
                  Built with
                </th>
                <th className="text-left py-4 pl-4 pr-4 text-sm font-medium text-[var(--color-text)] uppercase tracking-wider">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => {
                // Extract year from date range (e.g., "May 2025 - Present" -> "2025")
                const year = project.dateRange.match(/\d{4}/)?.[0] || 'TBD';
                
                return (
                  <tr 
                    key={index}
                    className="border-b border-[var(--color-border)] hover:bg-[var(--color-background-alt)] transition-colors"
                  >
                    {/* Year */}
                    <td className="py-6 pl-6 pr-6 text-[var(--color-muted)] font-mono text-sm">
                      {year}
                    </td>

                    {/* Project name */}
                    <td className="py-6 pl-4 pr-4">
                      <div className="font-semibold text-[var(--color-text-light)] text-lg mb-1">
                        {project.title}
                      </div>
                      {project.collaborators && (
                        <div className="text-sm text-[var(--color-text)]">
                          {typeof project.collaborators === 'string' 
                            ? `with ${project.collaborators}`
                            : Array.isArray(project.collaborators)
                              ? `with ${project.collaborators.map(c => typeof c === 'string' ? c : c.name).join(', ')}`
                              : `with ${typeof project.collaborators === 'object' ? project.collaborators.name : project.collaborators}`
                          }
                        </div>
                      )}
                    </td>

                    {/* Made for */}
                    <td className="py-6 pl-4 pr-4 text-[var(--color-text)]">
                      {project.madeFor}
                    </td>

                    {/* Built with */}
                    <td className="py-6 pl-4 pr-4">
                      <div className="flex flex-wrap gap-2 items-center max-w-xs">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-[var(--color-sidebar)] text-[var(--color-text)] px-2 py-1 rounded-full text-xs whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Links */}
                    <td className="py-6 pl-4 pr-4">
                      <div className="flex space-x-4">
                        {project.repoUrl && (
                          <a 
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </a>
                        )}
                        
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                            aria-label="Live Site"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-[var(--color-muted)] text-sm">
            Private repositories can be shared upon request
          </p>
        </div>
      </div>
    </div>
  );
}