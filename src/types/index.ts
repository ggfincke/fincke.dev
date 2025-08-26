// src/types/index.ts
// Central export file for all type definitions

// Content and data types
export type {
  Experience,
  Education,
  Project,
  ProjectStatus,
  Collaborator,
  Skill,
  SkillCategory,
} from './data';

// Navigation-specific types
export type {
  NavButtonProps,
  SidebarHeaderProps,
  SidebarProps,
  NavigationProps,
} from './components';

// Common utility types and patterns
export type {
  Size,
  Alignment,
  Direction,
  Theme,
  BaseComponent,
  ClickableComponent,
  LinkComponent,
  AnimationProps,
  Breakpoint,
  ResponsiveValue,
  GitHubRelease,
} from './shared';

// UI component types and utilities
export type {
  Variant,
  ButtonProps,
  
  // Timeline components
  TimelineItemProps,
  TimelineContainerProps,
  MobileExperienceItemProps,
  
  // UI components
  SocialIconsProps,
  SkillPillProps,
  SkillPillSize,
  FloatingParticleProps,
  ProjectCardProps,
  SectionNavButtonProps,
  SectionHeadingProps,
  
  // UI Card components
  StatusCircleProps,
  StatusBadgeProps,
  VersionBadgeProps,
  NavigationArrowProps,
  PaginationDotsProps,
  
  // Section components
  HeroSectionProps,
  FooterProps,
} from './components';