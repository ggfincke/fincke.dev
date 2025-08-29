// src/components/display/SkillTooltip.tsx
// interactive tooltip for skill pills showing related projects
import { useEffect, useRef, useState } from 'react';
import { StatusCircle } from '~/components/display/StatusCircle';
import type { Project } from '~/types/projects';

interface SkillTooltipProps {
  projects: Project[];
  isVisible: boolean;
  targetRef: React.RefObject<HTMLElement | null>;
}

export function SkillTooltip({ projects, isVisible, targetRef }: SkillTooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [adjustedPosition, setAdjustedPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isVisible || !targetRef.current || !tooltipRef.current) return;

    const targetRect = targetRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    // Calculate initial position (centered above target, very close)
    let top = targetRect.top - tooltipRect.height - 3;
    let left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
    
    // Adjust if tooltip goes off screen
    const padding = 8;
    
    // Check if tooltip goes off the top
    if (top < padding) {
      // Position below instead
      top = targetRect.bottom + 3;
    }
    
    // Check if tooltip goes off the left
    if (left < padding) {
      left = padding;
    }
    
    // Check if tooltip goes off the right
    if (left + tooltipRect.width > window.innerWidth - padding) {
      left = window.innerWidth - tooltipRect.width - padding;
    }
    
    setAdjustedPosition({ top, left });
  }, [isVisible, targetRef, projects]);

  if (!isVisible || projects.length === 0) return null;

  return (
    <div
      ref={tooltipRef}
      className={`
        fixed z-50 
        bg-[var(--color-background)] 
        border border-[var(--color-border)]
        rounded-lg shadow-xl
        p-3 max-w-xs
        opacity-0 animate-fadeIn
        pointer-events-none
      `}
      style={{
        top: `${adjustedPosition.top}px`,
        left: `${adjustedPosition.left}px`,
        animation: 'fadeIn 0.2s ease-in-out forwards'
      }}
    >
      <div className="text-xs font-medium text-[var(--color-text-secondary)] mb-2">
        Related Projects ({projects.length})
      </div>
      <div className="space-y-1.5">
        {projects.slice(0, 5).map((project) => (
          <div key={project.title} className="flex items-center gap-2">
            <StatusCircle status={project.status} size={16} />
            <span className="text-xs text-[var(--color-text)] truncate">
              {project.title}
            </span>
          </div>
        ))}
        {projects.length > 5 && (
          <div className="text-xs text-[var(--color-text-secondary)] italic">
            +{projects.length - 5} more
          </div>
        )}
      </div>
      <div 
        className="absolute w-2 h-2 bg-[var(--color-background)] border-l border-b border-[var(--color-border)] transform rotate-45"
        style={{
          bottom: '-5px',
          left: '50%',
          marginLeft: '-4px'
        }}
      />
    </div>
  );
}