// src/types/components.ts

import { ReactNode } from 'react';
import { ProjectStatus, Collaborator } from './data';

// Button component types
export interface NavButtonProps {
  sectionId: string;
  label: string;
  activeSection: string;
  onClick: (sectionId: string) => void;
}

export type Variant = 'primary' | 'secondary';

export interface ButtonProps {
  variant: Variant;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

// Sidebar component types
export interface SidebarHeaderProps {
  logo: ReactNode;
}

export interface SidebarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
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

// UI component types
export interface SocialIconsProps {
  className?: string;
}

export type SkillPillSize = 'xs' | 'sm' | 'md';

export interface SkillPillProps {
  name: string;
  size?: SkillPillSize;
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
  align?: 'left' | 'center' | 'right';
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

export interface VersionBadgeProps {
  repoUrl: string;
}

export interface NavigationArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

export interface PaginationDotsProps {
  totalItems: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
  disabled?: boolean;
}

export interface StatusBadgeProps {
  status: ProjectStatus;
}

// Section component types
export interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export interface FooterProps {
  isSmallScreen?: boolean;
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