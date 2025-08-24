import { ProjectStatus } from '~/data/structured/projects';

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

interface StatusCircleProps {
  status: ProjectStatus;
  size?: number; // optional diameter in px
}

export function StatusCircle({ status, size = 32 }: StatusCircleProps) {
  const statusDisplay = statusConfig[status];
  const dimension = `${size}px`;

  return (
    <span
      style={{
        width: dimension,
        height: dimension,
        lineHeight: dimension,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: statusDisplay.color,
        color: 'var(--color-background)',
        fontSize: size * 0.5,
        fontWeight: 500,
      }}
      aria-label={statusDisplay.label}
      title={statusDisplay.label}
    >
      {statusDisplay.icon}
    </span>
  );
} 