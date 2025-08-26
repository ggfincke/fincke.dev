// src/components/display/StatusCircle.tsx
// circular status indicator w/ icon & color-coded themes

import type { ProjectStatus } from '~/types/projects';
import type { StatusCircleProps } from '~/types/ui';

// status display configurations
const statusConfig: Record<ProjectStatus, { icon: string; label: string; colorVar: string; bgColorVar: string }> = {
  'in-development': {
    icon: '🛠',
    label: 'In Development',
    colorVar: '--status-in-development',
    bgColorVar: '--status-in-development-bg'
  },
  'complete': {
    icon: '✅',
    label: 'Complete',
    colorVar: '--status-complete',
    bgColorVar: '--status-complete-bg'
  },
  'paused': {
    icon: '⏸',
    label: 'Paused',
    colorVar: '--status-paused',
    bgColorVar: '--status-paused-bg'
  },
  'experimental': {
    icon: '🧪',
    label: 'Experimenting',
    colorVar: '--status-experimental',
    bgColorVar: '--status-experimental-bg'
  },
  'planned': {
    icon: '🕓',
    label: 'Planned',
    colorVar: '--status-planned',
    bgColorVar: '--status-planned-bg'
  },
  'live': {
    icon: '🚀',
    label: 'Live',
    colorVar: '--status-live',
    bgColorVar: '--status-live-bg'
  }
};


// status circle component
export function StatusCircle({ status, size = 32 }: StatusCircleProps) 
{
  const statusDisplay = statusConfig[status];

  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-medium text-[var(--color-background)]"
      style={{
        '--status-size': `${size}px`,
        '--status-font-size': `${size * 0.5}px`,
        width: 'var(--status-size)',
        height: 'var(--status-size)',
        backgroundColor: `var(${statusDisplay.colorVar})`,
        fontSize: 'var(--status-font-size)',
      } as React.CSSProperties}
      aria-label={statusDisplay.label}
      title={statusDisplay.label}
    >
      {statusDisplay.icon}
    </span>
  );
} 