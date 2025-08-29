// src/components/display/SkillPill.tsx
// skill badge w/ size variants & hover effects
'use client';

import { useState, useRef, useEffect } from 'react';
import { SkillTooltip } from '~/components/display/SkillTooltip';
import { getProjectsBySkill } from '~/data/structured/projects';
import type { SkillPillProps } from '~/types/ui';
import type { Project } from '~/types/projects';

// skill pill component
export function SkillPill({ 
  name, 
  size = 'sm', 
  className = '',
  showProjectsOnHover = false,
  hoverDelay = 150
}: SkillPillProps) 
{
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2 py-1 md:px-3 md:py-1 text-xs sm:text-sm',
    md: 'px-3 py-1 text-sm'
  };

  useEffect(() => {
    if (showProjectsOnHover && isHovered) {
      // fetch related projects when hovered
      const projects = getProjectsBySkill(name);
      setRelatedProjects(projects);
      
      // show tooltip after delay
      hoverTimeoutRef.current = setTimeout(() => {
        setShowTooltip(true);
      }, hoverDelay);
    } else {
      // clear timeout and hide tooltip
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      setShowTooltip(false);
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [isHovered, name, showProjectsOnHover, hoverDelay]);

  const handleMouseEnter = () => {
    if (showProjectsOnHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <span 
        ref={pillRef}
        className={`
          bg-[var(--color-sidebar)] text-[var(--color-text)] 
          rounded-full inline-flex items-center justify-center 
          whitespace-nowrap hover:bg-[var(--color-border)] 
          transition-colors duration-200 
          ${showProjectsOnHover ? 'cursor-help hover:underline decoration-dotted underline-offset-2' : ''}
          ${sizeClasses[size]} ${className}
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {name}
      </span>
      {showProjectsOnHover && (
        <SkillTooltip
          projects={relatedProjects}
          isVisible={showTooltip}
          targetRef={pillRef}
        />
      )}
    </>
  );
}