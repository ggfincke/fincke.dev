// src/components/display/StatusBadge.tsx
// project status badge w/ icons & color-coded themes
import type { StatusBadgeProps } from '~/types/ui';

// status display configurations
const statusConfig = {
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

// status badge component
  
  export function StatusBadge({ status }: StatusBadgeProps) 
{
    const statusDisplay = statusConfig[status];
    
    return (
      <span 
        className="inline-flex items-center whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium"
        style={{ 
          color: `var(${statusDisplay.colorVar})`, 
          backgroundColor: `var(${statusDisplay.bgColorVar})`
        } as React.CSSProperties}
      >
        {statusDisplay.icon} {statusDisplay.label}
      </span>
    );
  }