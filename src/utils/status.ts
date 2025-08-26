import type { ProjectStatus } from '~/types/projects';

export interface StatusConfig {
  icon: string;
  label: string;
  colorVar: string;
  bgColorVar: string;
}

export const statusConfig: Record<ProjectStatus, StatusConfig> = {
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

export const getStatusConfig = (status: ProjectStatus): StatusConfig => 
{
  return statusConfig[status];
};