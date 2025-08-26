// src/sections/projects/ProjectsTable.tsx

'use client';

import { useTableResponsive } from '~/hooks/useResponsiveSection';
import { useExpandableRows } from '~/hooks/useSectionNavigation';
import Image from 'next/image';
import { getAllProjects } from '~/data/structured/projects';
import type { Collaborator } from '~/types/projects';
import { StatusBadge } from '~/components/display/StatusBadge';
import { StatusCircle } from '~/components/display/StatusCircle';
import { VersionBadge } from '~/components/display/VersionBadge';
import { SkillPill } from '~/components/display/SkillPill';

export function ProjectsTable() 
{
  const { shouldShowTable, shouldShowCards } = useTableResponsive();
  const { toggleRow, isExpanded } = useExpandableRows<number>();
  
  const projects = getAllProjects();

  // Sort projects in reverse chronological order (newest first)
  const sortedProjects = [...projects].sort((a, b) => 
{
    // Extract the most recent year from each project's dateRange
    const getLatestYear = (dateRange: string): number => 
{
      const years = dateRange.match(/\d{4}/g);
      if (!years) return 0;
      return Math.max(...years.map(year => parseInt(year, 10)));
    };

    // Get the latest month from the most recent year
    const getLatestMonth = (dateRange: string): number => 
{
      const latestYear = getLatestYear(dateRange);
      const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
      
      // Find all month mentions in the dateRange
      const monthMatches = dateRange.toLowerCase().match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*/g);
      if (!monthMatches) return 0;
      
      // Find the latest month that appears with the latest year
      const yearContext = dateRange.toLowerCase();
      let latestMonth = 0;
      
      for (const monthMatch of monthMatches) 
{
        const monthIndex = months.findIndex(m => monthMatch.startsWith(m));
        if (monthIndex !== -1) 
{
          // Check if this month appears near the latest year
          const monthPos = yearContext.indexOf(monthMatch);
          const yearPos = yearContext.indexOf(latestYear.toString());
          
          // If they're close or if this is the latest month we've seen
          if (Math.abs(monthPos - yearPos) < 50 || monthIndex > latestMonth) 
{
            latestMonth = monthIndex;
          }
        }
      }
      
      return latestMonth;
    };

    const yearA = getLatestYear(a.dateRange);
    const yearB = getLatestYear(b.dateRange);
    
    // First sort by year (descending)
    if (yearA !== yearB) 
{
      return yearB - yearA;
    }
    
    // If years are equal, sort by month (descending)
    const monthA = getLatestMonth(a.dateRange);
    const monthB = getLatestMonth(b.dateRange);
    
    return monthB - monthA;
  });


  // Helper to choose appropriate label for live links
  const getLiveLabel = (url: string): string => 
{
    return url.toLowerCase().endsWith('.pdf') ? 'View Report' : 'View Live Site';
  };

  const renderCollaborators = (collaborators: string | string[] | Collaborator | Collaborator[]) => 
{
    if (typeof collaborators === 'string') 
{
      return collaborators;
    }
    
    if (Array.isArray(collaborators) && typeof collaborators[0] === 'string') 
{
      return (collaborators as string[]).join(', ');
    }
    
    if (!Array.isArray(collaborators) && typeof collaborators === 'object') 
{
      const collab = collaborators as Collaborator;
      return collab.url ? (
        <a 
          href={collab.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--color-primary)] hover:underline"
        >
          {collab.name}
        </a>
      ) : collab.name;
    }
    
    if (Array.isArray(collaborators) && typeof collaborators[0] === 'object') 
{
      return (collaborators as Collaborator[]).map((collab, index, arr) => (
        <span key={collab.name}>
          {collab.url ? (
            <a 
              href={collab.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              {collab.name}
            </a>
          ) : collab.name}
          {index < arr.length - 1 ? ', ' : ''}
        </span>
      ));
    }
    
    return null;
  };

  return (
    <div className="overflow-x-auto">
      {/* Mobile layout - simplified view with only year and project name/contributors */}
      {shouldShowCards && (
        <div className="block md:hidden">
          <div className="space-y-4">
            {sortedProjects.map((project, index) => 
{
              const year = project.dateRange.match(/\d{4}/)?.[0] || 'TBD';
              const isRowExpanded = isExpanded(index);
            
            return (
              <div key={`mobile-project-${index}`}>
                <div 
                  className="border border-[var(--color-border)] rounded-lg p-4 bg-[var(--color-background-alt)]/30 hover:bg-[var(--color-background-alt)]/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Year */}
                    <div className="text-[var(--color-muted)] font-mono text-sm font-medium min-w-[3rem]">
                      {year}
                    </div>
                    
                    {/* Project info */}
                    <div className="flex-1">
                      <div className="font-semibold text-[var(--color-text-light)] text-lg mb-1">
                        {project.title}
                      </div>
                      {project.collaborators && (
                        <div className="text-sm text-[var(--color-text)]">
                          {typeof project.collaborators === 'string' 
                            ? `with ${project.collaborators}`
                            : Array.isArray(project.collaborators)
                              ? `with ${project.collaborators.map((c: string | Collaborator) => typeof c === 'string' ? c : c.name).join(', ')}`
                              : `with ${typeof project.collaborators === 'object' ? (project.collaborators as Collaborator).name : project.collaborators}`
                          }
                        </div>
                      )}
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleRow(index)}
                      className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors p-1 rounded hover:bg-[var(--color-sidebar)] flex-shrink-0"
                      aria-label={isRowExpanded ? 'Collapse project details' : 'Expand project details'}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className={`transform transition-transform duration-200 ${isRowExpanded ? 'rotate-90' : ''}`}
                      >
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Expanded content for mobile */}
                {isRowExpanded && (
                  <div className="mt-2 border border-[var(--color-border)] rounded-lg p-4 bg-[var(--color-background-alt)]/50">
                    <div className="space-y-4">
                      {/* Status Badge and Date */}
                      <div className="flex items-center gap-4">
                        <StatusBadge status={project.status} />
                        <span className="text-[var(--color-muted)] text-sm italic">
                          {project.repoUrl && (
                            <>
                              <VersionBadge repoUrl={project.repoUrl} />
                              {' • '}
                            </>
                          )}
                          {project.dateRange}
                        </span>
                      </div>

                      {/* Collaborators (if any) */}
                      {project.collaborators && (
                        <div>
                          <h4 className="text-sm font-semibold text-[var(--color-primary)] mb-2">
                            Collaborators
                          </h4>
                          <p className="text-[var(--color-text)]">
                            {renderCollaborators(project.collaborators)}
                          </p>
                        </div>
                      )}

                      {/* Description */}
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--color-primary)] mb-2">
                          Description
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {project.bulletPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-[var(--color-text)] text-sm">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--color-primary)] mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: string, techIndex: number) => (
                            <SkillPill 
                              key={techIndex}
                              name={tech}
                              size="xs"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      {(project.repoUrl || project.liveUrl) && (
                        <div>
                          <h4 className="text-sm font-semibold text-[var(--color-primary)] mb-2">
                            Links
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.repoUrl && (
                              <a 
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-sidebar)] text-[var(--color-text)] rounded-lg hover:bg-[var(--color-border)] hover:shadow-md transition-all duration-200 text-sm"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                                Repository
                              </a>
                            )}
                            
                            {project.liveUrl && (
                              <a 
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg hover:bg-opacity-90 hover:shadow-md transition-all duration-200 text-sm"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  <polyline points="15 3 21 3 21 9"></polyline>
                                  <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                {getLiveLabel(project.liveUrl)}
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
            })}
          </div>
        </div>
      )}

      {/* Desktop layout - full table */}
      {shouldShowTable && (
        <table className="w-full table-fixed hidden md:table">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-4 pl-6 pr-6 text-sm font-medium text-[var(--color-text)] uppercase tracking-wider w-8">
                {/* Empty header for expand button */}
              </th>
              <th className="text-left py-4 pl-4 pr-4 w-[8%] text-sm font-medium text-[var(--color-text)] uppercase tracking-wider">
                Year
              </th>
              <th className="text-left py-4 pl-4 pr-2 w-[20%] text-sm font-medium text-[var(--color-text)] uppercase tracking-wider">
                Project
              </th>
              <th className="text-center py-4 px-4 w-[10%] text-sm font-medium text-[var(--color-text)] uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-4 pl-4 pr-4 w-[15%] text-sm font-medium text-[var(--color-text)] uppercase tracking-wider">
                Made for
              </th>
              <th className="text-left py-4 pl-4 pr-4 text-sm font-medium text-[var(--color-text)] uppercase tracking-wider">
                Built with
              </th>
              <th className="text-left py-4 pl-4 pr-4 w-[10%] text-sm font-medium text-[var(--color-text)] uppercase tracking-wider">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProjects.map((project, index) => 
{
              const year = project.dateRange.match(/\d{4}/)?.[0] || 'TBD';
              const isRowExpanded = isExpanded(index);
            
            return [
              <tr 
                key={`project-${index}`}
                className="border-b border-[var(--color-border)] hover:bg-[var(--color-background-alt)] transition-colors"
              >
                {/* Expand/Collapse Button */}
                <td className="py-6 pl-6 pr-2">
                  <button
                    onClick={() => toggleRow(index)}
                    className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors p-1 rounded hover:bg-[var(--color-sidebar)]"
                    aria-label={isRowExpanded ? 'Collapse project details' : 'Expand project details'}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`transform transition-transform duration-200 ${isRowExpanded ? 'rotate-90' : ''}`}
                    >
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </td>

                {/* Year */}
                <td className="py-6 pl-4 pr-4 text-[var(--color-muted)] font-mono text-sm">
                  {year}
                </td>

                {/* Project name */}
                <td className="py-6 pl-4 pr-2">
                  <div className="font-semibold text-[var(--color-text-light)] text-lg mb-1">
                    {project.title}
                  </div>
                  {project.collaborators && (
                    <div className="text-sm text-[var(--color-text)]">
                      {typeof project.collaborators === 'string' 
                        ? `with ${project.collaborators}`
                        : Array.isArray(project.collaborators)
                          ? `with ${project.collaborators.map((c: string | Collaborator) => typeof c === 'string' ? c : c.name).join(', ')}`
                          : `with ${typeof project.collaborators === 'object' ? (project.collaborators as Collaborator).name : project.collaborators}`
                      }
                    </div>
                  )}
                </td>

                {/* Status */}
                <td className="py-6 px-4 text-center">
                  <StatusCircle status={project.status} />
                </td>

                {/* Made for */}
                <td className="py-6 pl-4 pr-4 text-[var(--color-text)]">
                  {project.madeFor}
                </td>

                {/* Built with */}
                <td className="py-6 pl-4 pr-4">
                  <div className="flex flex-wrap gap-2 items-center max-w-xs">
                    {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                      <SkillPill 
                        key={techIndex}
                        name={tech}
                        size="xs"
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[var(--color-muted)] text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
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
                        aria-label={getLiveLabel(project.liveUrl)}
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
              </tr>,

              // Expanded Row - only render if expanded
              ...(isRowExpanded ? [
                <tr key={`expanded-${index}`}>
                  <td colSpan={7} className="p-0">
                    <div 
                      className={`px-6 pb-8 bg-[var(--color-background-alt)]/50 border-b border-[var(--color-border)] transition-all duration-300 ${
                        isRowExpanded ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="space-y-6 pt-6">
                        {/* Status Badge and Date */}
                        <div className="flex items-center gap-4">
                          <StatusBadge status={project.status} />
                          <span className="text-[var(--color-muted)] text-sm italic">
                            {project.repoUrl && (
                              <>
                                <VersionBadge repoUrl={project.repoUrl} />
                                {' • '}
                              </>
                            )}
                            {project.dateRange}
                          </span>
                        </div>

                        {/* Collaborators (if any) */}
                        {project.collaborators && (
                          <div>
                            <h4 className="text-sm font-semibold text-[var(--color-primary)] mb-2">
                              Collaborators
                            </h4>
                            <p className="text-[var(--color-text)]">
                              {renderCollaborators(project.collaborators)}
                            </p>
                          </div>
                        )}

                        {/* Description and Image side by side */}
                        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                          {/* Left side - Project Description */}
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-[var(--color-primary)] mb-3">
                              Description
                            </h4>
                            <ul className="list-disc pl-5 space-y-2">
                              {project.bulletPoints.map((point, pointIndex) => (
                                <li key={pointIndex} className="text-[var(--color-text)]">
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Right side - Project Image */}
                          {project.imagePath && (
                            <div className="lg:w-1/3 flex-shrink-0">
                              <div className="rounded-lg p-4 w-full group relative hover:shadow-lg transition-all duration-300">
                                <Image
                                  src={project.imagePath}
                                  alt={project.imageAlt || `${project.title} screenshot`}
                                  width={400}
                                  height={300}
                                  className="w-full h-full rounded-lg object-contain hover:scale-105 hover:z-50 transition-all duration-300"
                                  sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Technologies - Full Width */}
                        <div>
                          <h4 className="text-sm font-semibold text-[var(--color-primary)] mb-3">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-x-3 gap-y-2">
                            {project.technologies.map((tech: string, techIndex: number) => (
                              <SkillPill 
                                key={techIndex}
                                name={tech}
                                size="md"
                              />
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        {(project.repoUrl || project.liveUrl) && (
                          <div>
                            <h4 className="text-sm font-semibold text-[var(--color-primary)] mb-3">
                              Links
                            </h4>
                            <div className="flex flex-wrap gap-4">
                              {project.repoUrl && (
                                <a 
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-sidebar)] text-[var(--color-text)] rounded-lg hover:bg-[var(--color-border)] hover:shadow-md transition-all duration-200"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                  </svg>
                                  View Repository
                                </a>
                              )}
                              
                              {project.liveUrl && (
                                <a 
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg hover:bg-opacity-90 hover:shadow-md transition-all duration-200"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                  </svg>
                                  {getLiveLabel(project.liveUrl)}
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ] : [])
            ];
            }).flat()}
          </tbody>
        </table>
      )}
    </div>
  );
}