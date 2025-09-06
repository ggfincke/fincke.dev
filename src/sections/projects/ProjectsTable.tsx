// src/sections/projects/ProjectsTable.tsx

'use client';

import Image from 'next/image';

import { renderCollaborators } from '~/components/display/Collaborators';
import { ProjectLinks } from '~/components/display/ProjectLinks';
import { SkillPill } from '~/components/display/SkillPill';
import { StatusBadge } from '~/components/display/StatusBadge';
import { StatusCircle } from '~/components/display/StatusCircle';
import { VersionBadge } from '~/components/display/VersionBadge';
import { getImageSizes } from '~/constants/breakpoints';
import { getAllProjects } from '~/data/structured/projects';
import { useTableResponsive } from '~/hooks/useBreakpoint';
import { useExpandableRows } from '~/hooks/useSectionNavigation';
import type { Collaborator } from '~/types/projects';

// all projects table w/ expandable rows & responsive design
export function ProjectsTable() 
{
  const { shouldShowTable, shouldShowCards } = useTableResponsive();
  const { toggleRow, isExpanded } = useExpandableRows<number>();
  
  const projects = getAllProjects();

  // sort projects by date (descending) to show newest first
  const sortedProjects = [...projects].sort((a, b) => 
{
    // extract most recent year from dateRange
    const getLatestYear = (dateRange: string): number => 
{
      const years = dateRange.match(/\d{4}/g);
      if (!years) return 0;
      return Math.max(...years.map(year => parseInt(year, 10)));
    };

    // get latest month from most recent year
    const getLatestMonth = (dateRange: string): number => 
{
      const latestYear = getLatestYear(dateRange);
      const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
      
      // find all month mentions in dateRange
      const monthMatches = dateRange.toLowerCase().match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*/g);
      if (!monthMatches) return 0;
      
      // find latest month that appears w/ latest year
      const yearContext = dateRange.toLowerCase();
      let latestMonth = 0;
      
      for (const monthMatch of monthMatches) 
{
        const monthIndex = months.findIndex(m => monthMatch.startsWith(m));
        if (monthIndex !== -1) 
{
          // check if month appears near latest year
          const monthPos = yearContext.indexOf(monthMatch);
          const yearPos = yearContext.indexOf(latestYear.toString());
          
          // if close or latest month seen
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
    
    // first sort by year (descending)
    if (yearA !== yearB) 
{
      return yearB - yearA;
    }
    
    // if years equal, sort by month (descending)
    const monthA = getLatestMonth(a.dateRange);
    const monthB = getLatestMonth(b.dateRange);
    
    return monthB - monthA;
  });


  // choose appropriate label for live links
  const getLiveLabel = (url: string): string => 
{
    return url.toLowerCase().endsWith('.pdf') ? 'View Report' : 'View Live Site';
  };

  // collaborators renderer imported from shared util

  return (
    <div className="overflow-x-auto">
      {/* mobile layout - simplified view w/ year & project name/contributors */}
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
                  className="border border-[var(--border)] rounded-lg p-4 bg-[var(--card)]/30 hover:bg-[var(--card)]/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* year */}
                    <div className="text-[var(--muted)] font-mono text-sm font-medium min-w-[3rem]">
                      {year}
                    </div>
                    
                    {/* Project info */}
                    <div className="flex-1">
                      <div className="font-semibold text-[var(--fg)] text-lg mb-1">
                        {project.title}
                      </div>
                      {project.collaborators && (
                        <div className="text-sm text-[var(--muted)]">
                          {typeof project.collaborators === 'string' 
                            ? `with ${project.collaborators}`
                            : Array.isArray(project.collaborators)
                              ? `with ${project.collaborators.map((c: string | Collaborator) => typeof c === 'string' ? c : c.name).join(', ')}`
                              : `with ${typeof project.collaborators === 'object' ? (project.collaborators as Collaborator).name : project.collaborators}`
                          }
                        </div>
                      )}
                    </div>

                    {/* expand/collapse button */}
                    <button
                      onClick={() => toggleRow(index)}
                      className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors p-1 rounded hover:bg-[var(--card)] flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
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

                {/* expanded content for mobile */}
                {isRowExpanded && (
                  <div className="mt-2 border border-[var(--border)] rounded-lg p-4 bg-[var(--card)]/50">
                    <div className="space-y-4">
                      {/* Status Badge and Date */}
                      <div className="flex items-center gap-4">
                        <StatusBadge status={project.status} />
                        <span className="text-[var(--muted)] text-sm italic">
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
                          <h4 className="text-sm font-semibold text-[var(--accent)] mb-2">
                            Collaborators
                          </h4>
                          <p className="text-[var(--muted)]">
                            {renderCollaborators(project.collaborators)}
                          </p>
                        </div>
                      )}

                      {/* Description */}
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--accent)] mb-2">
                          Description
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {project.bulletPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-[var(--muted)] text-sm">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--accent)] mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: string, techIndex: number) => (
                            <SkillPill 
                              key={techIndex}
                              name={tech}
                              size="xs"
                              showProjectsOnHover={true}
                            />
                          ))}
                        </div>
                      </div>

                      {/* links */}
                      {(project.repoUrl || project.liveUrl) && (
                        <div>
                          <h4 className="text-sm font-semibold text-[var(--accent)] mb-2">
                            Links
                          </h4>
                          <ProjectLinks
                            repoUrl={project.repoUrl}
                            liveUrl={project.liveUrl}
                            variant="button"
                            size="sm"
                            liveLabel={project.liveUrl ? getLiveLabel(project.liveUrl) : undefined}
                          />
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

      {/* desktop layout - full table */}
      {shouldShowTable && (
        <table className="w-full table-fixed hidden md:table">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left py-4 pl-6 pr-6 text-sm font-medium text-[var(--muted)] uppercase tracking-wider w-8">
                {/* Empty header for expand button */}
              </th>
              <th className="text-left py-4 pl-4 pr-4 w-[8%] text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
                Year
              </th>
              <th className="text-left py-4 pl-4 pr-2 w-[20%] text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
                Project
              </th>
              <th className="text-center py-4 px-4 w-[10%] text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-4 pl-4 pr-4 w-[15%] text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
                Made for
              </th>
              <th className="text-left py-4 pl-4 pr-4 text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
                Built with
              </th>
              <th className="text-left py-4 pl-4 pr-4 w-[10%] text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
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
                className="border-b border-[var(--border)] hover:bg-[var(--card)] transition-colors"
              >
                {/* expand/collapse button */}
                <td className="py-6 pl-6 pr-2">
                  <button
                    onClick={() => toggleRow(index)}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors p-1 rounded hover:bg-[var(--card)]"
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

                {/* year */}
                <td className="py-6 pl-4 pr-4 text-[var(--muted)] font-mono text-sm">
                  {year}
                </td>

                {/* project name */}
                <td className="py-6 pl-4 pr-2">
                  <div className="font-semibold text-[var(--fg)] text-lg mb-1">
                    {project.title}
                  </div>
                  {project.collaborators && (
                    <div className="text-sm text-[var(--muted)]">
                      {typeof project.collaborators === 'string' 
                        ? `with ${project.collaborators}`
                        : Array.isArray(project.collaborators)
                          ? `with ${project.collaborators.map((c: string | Collaborator) => typeof c === 'string' ? c : c.name).join(', ')}`
                          : `with ${typeof project.collaborators === 'object' ? (project.collaborators as Collaborator).name : project.collaborators}`
                      }
                    </div>
                  )}
                </td>

                {/* status */}
                <td className="py-6 px-4 text-center">
                  <StatusCircle status={project.status} />
                </td>

                {/* made for */}
                <td className="py-6 pl-4 pr-4 text-[var(--muted)]">
                  {project.madeFor}
                </td>

                {/* built w/ technologies */}
                <td className="py-6 pl-4 pr-4">
                  <div className="flex flex-wrap gap-2 items-center max-w-xs">
                    {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                      <SkillPill 
                        key={techIndex}
                        name={tech}
                        size="xs"
                        showProjectsOnHover={true}
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[var(--muted)] text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </td>

                {/* links */}
                <td className="py-6 pl-4 pr-4">
                  <ProjectLinks
                    repoUrl={project.repoUrl}
                    liveUrl={project.liveUrl}
                    variant="icon"
                    liveLabel={project.liveUrl ? getLiveLabel(project.liveUrl) : undefined}
                    className="flex space-x-4"
                  />
                </td>
              </tr>,

              // expanded row - only render if expanded
              ...(isRowExpanded ? [
                <tr key={`expanded-${index}`}>
                  <td colSpan={7} className="p-0">
                    <div 
                      className={`px-6 pb-8 bg-[var(--card)]/50 border-b border-[var(--border)] transition-all duration-300 ${
                        isRowExpanded ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="space-y-6 pt-6">
                        {/* Status Badge and Date */}
                        <div className="flex items-center gap-4">
                          <StatusBadge status={project.status} />
                          <span className="text-[var(--muted)] text-sm italic">
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
                            <h4 className="text-sm font-semibold text-[var(--accent)] mb-2">
                              Collaborators
                            </h4>
                            <p className="text-[var(--muted)]">
                              {renderCollaborators(project.collaborators)}
                            </p>
                          </div>
                        )}

                        {/* Description and Image side by side */}
                        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                          {/* Left side - Project Description */}
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-[var(--accent)] mb-3">
                              Description
                            </h4>
                            <ul className="list-disc pl-5 space-y-2">
                              {project.bulletPoints.map((point, pointIndex) => (
                                <li key={pointIndex} className="text-[var(--muted)]">
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
                                  sizes={getImageSizes('100vw', '100vw', '33vw')}
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Technologies - Full Width */}
                        <div>
                          <h4 className="text-sm font-semibold text-[var(--accent)] mb-3">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-x-3 gap-y-2">
                            {project.technologies.map((tech: string, techIndex: number) => (
                              <SkillPill 
                                key={techIndex}
                                name={tech}
                                size="md"
                                showProjectsOnHover={true}
                                />
                            ))}
                          </div>
                        </div>

                        {/* links */}
                        {(project.repoUrl || project.liveUrl) && (
                          <div>
                            <h4 className="text-sm font-semibold text-[var(--accent)] mb-3">
                              Links
                            </h4>
                            <ProjectLinks
                              repoUrl={project.repoUrl}
                              liveUrl={project.liveUrl}
                              variant="button"
                              size="md"
                              liveLabel={project.liveUrl ? getLiveLabel(project.liveUrl) : undefined}
                              className="flex flex-wrap gap-4"
                            />
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
