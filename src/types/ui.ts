// src/types/ui.ts
// UI component prop types for buttons, cards, badges & interactive elements

import { ReactNode } from 'react';

import { ProjectStatus, Collaborator } from '~/types/projects';

export type Variant = 'primary' | 'secondary';
export type SkillPillSize = 'xs' | 'sm' | 'md';

export interface ButtonProps {
  variant: Variant;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface SkillPillProps {
  name: string;
  size?: SkillPillSize;
  className?: string;
  showProjectsOnHover?: boolean;
  hoverDelay?: number;
}

export interface FloatingParticleProps {
  delay?: number;
  left?: number;
  top?: number;
  duration?: number;
}

export interface ProjectCardProps {
  title: string;
  dateRange: string;
  bulletPoints: (string | ReactNode)[];
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  contentComponent?: ReactNode;
  status: ProjectStatus;
  collaborators?: string | string[] | Collaborator | Collaborator[];
}

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  subsubtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export interface StatusCircleProps {
  status: ProjectStatus;
  size?: number;
}

export interface StatusBadgeProps {
  status: ProjectStatus;
}

export interface VersionBadgeProps {
  repoUrl: string;
}

export interface SocialIconsProps {
  className?: string;
}

export interface ThemeSelectorProps {
  show?: boolean;
  variant?: 'floating' | 'inline';
  className?: string;
}
