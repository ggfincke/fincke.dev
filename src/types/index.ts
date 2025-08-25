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
} from './content.types';

// Navigation-specific types
export type {
  NavButtonProps,
  SidebarHeaderProps,
  SidebarProps,
  NavigationProps,
} from './navigation.types';

// UI component types and utilities
export type {
  // Common utility types
  Size,
  Alignment,
  Direction,
  Theme,
  Variant,
  
  // Common patterns
  BaseComponent,
  ClickableComponent,
  LinkComponent,
  AnimationProps,
  EventHandler,
  ChangeHandler,
  
  // Button components
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
  ScrollIndicatorProps,
  
  // UI Card components
  StatusCircleProps,
  StatusBadgeProps,
  VersionBadgeProps,
  NavigationArrowProps,
  PaginationDotsProps,
  
  // Section components
  HeroSectionProps,
  FooterProps,
  
  // External API types
  GitHubRelease,
} from './ui.types';