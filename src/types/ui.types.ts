// src/types/ui.types.ts

import { ReactNode } from 'react';
import { ProjectStatus, Collaborator } from './content.types';

// Common utility types
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Alignment = 'left' | 'center' | 'right';
export type Direction = 'left' | 'right' | 'up' | 'down';
export type Theme = 'light' | 'dark';
export type Variant = 'primary' | 'secondary';

// Common component patterns
export interface BaseComponent {
  className?: string;
  children?: ReactNode;
}

export interface ClickableComponent {
  onClick?: () => void;
  disabled?: boolean;
}

export interface LinkComponent {
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

// Animation and transition types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  easing?: string;
}

// Button component types
export interface ButtonProps {
  variant: Variant;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

// Timeline component types
export interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  children: ReactNode;
  technologies?: string[];
  companyUrl?: string;
  isLast?: boolean;
  companyLogos?: ReactNode;
}

export interface TimelineContainerProps {
  children: ReactNode;
  className?: string;
}

export interface MobileExperienceItemProps {
  date: string;
  title: string;
  company: string;
  children: ReactNode;
  technologies?: string[];
  companyUrl?: string;
  companyLogos?: ReactNode;
  isLast?: boolean;
}

// UI component types
export interface SocialIconsProps {
  className?: string;
}

export type SkillPillSize = 'xs' | 'sm' | 'md';

export interface SkillPillProps {
  name: string;
  size?: SkillPillSize; // Specific to SkillPill component constraints
  className?: string;
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

export interface SectionNavButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  subsubtitle?: string;
  align?: Alignment;
  className?: string;
}

export interface ScrollIndicatorProps {
  onClick?: () => void;
}

// UI Cards component types
export interface StatusCircleProps {
  status: ProjectStatus;
  size?: number; // optional diameter in px
}

export interface StatusBadgeProps {
  status: ProjectStatus;
}

export interface VersionBadgeProps {
  repoUrl: string;
}

export interface NavigationArrowProps {
  direction: Direction;
  onClick: () => void;
  disabled?: boolean;
}

export interface PaginationDotsProps {
  totalItems: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
  disabled?: boolean;
}

// External API types for components
export interface GitHubRelease {
  tag_name: string;
  published_at: string;
}

// Section component types
export interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export interface FooterProps {
  isSmallScreen?: boolean;
}

// Event handlers
export type EventHandler<T = void> = (event?: Event) => T;
export type ChangeHandler<T> = (value: T) => void;