// src/components/ui/cards/StatusBadge.tsx
import type { StatusBadgeProps } from '~/types';

// status display configurations
const statusConfig = {
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

// status badge component
  
  export function StatusBadge({ status }: StatusBadgeProps) {
    const statusDisplay = statusConfig[status];
    
    return (
      <span style={{ 
        color: statusDisplay.color, 
        backgroundColor: statusDisplay.bgColor,
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: '500',
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap'
      }}>
        {statusDisplay.icon} {statusDisplay.label}
      </span>
    );
  }