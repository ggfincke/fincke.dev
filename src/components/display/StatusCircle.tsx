// src/components/ui/cards/StatusCircle.tsx

import type { StatusCircleProps, ProjectStatus } from '~/types';

// status display configurations (duplicated from StatusBadge to avoid circular deps)
const statusConfig: Record<ProjectStatus, { icon: string; label: string; color: string; bgColor: string }> = {
  'in-development': {
    icon: '🛠',
    label: 'In Development',
    color: '#82AAFF',
    bgColor: 'rgba(130, 170, 255, 0.15)'
  },
  'complete': {
    icon: '✅',
    label: 'Complete',
    color: '#C3E88D',
    bgColor: 'rgba(195, 232, 141, 0.15)'
  },
  'paused': {
    icon: '⏸',
    label: 'Paused',
    color: '#F78C6C',
    bgColor: 'rgba(247, 140, 108, 0.15)'
  },
  'experimental': {
    icon: '🧪',
    label: 'Experimenting',
    color: '#C792EA',
    bgColor: 'rgba(199, 146, 234, 0.15)'
  },
  'planned': {
    icon: '🕓',
    label: 'Planned',
    color: '#FFCB6B',
    bgColor: 'rgba(255, 203, 107, 0.15)'
  },
  'live': {
    icon: '🚀',
    label: 'Live',
    color: '#80CBC4',
    bgColor: 'rgba(128, 203, 196, 0.15)'
  }
};


export function StatusCircle({ status, size = 32 }: StatusCircleProps) 
{
  const statusDisplay = statusConfig[status];

  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-medium text-[var(--color-background)]"
      style={{
        '--status-size': `${size}px`,
        '--status-font-size': `${size * 0.5}px`,
        '--status-color': statusDisplay.color,
        width: 'var(--status-size)',
        height: 'var(--status-size)',
        backgroundColor: 'var(--status-color)',
        fontSize: 'var(--status-font-size)',
      } as React.CSSProperties}
      aria-label={statusDisplay.label}
      title={statusDisplay.label}
    >
      {statusDisplay.icon}
    </span>
  );
} 