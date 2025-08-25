// src/types/index.ts
// Central export file for all type definitions

// Data types
export type {
  Experience,
  Education,
  Project,
  ProjectStatus,
  Collaborator,
  Skill,
  SkillCategory,
} from './data';

// Component prop types
export type {
  // Button components
  NavButtonProps,
  ButtonProps,
  Variant,
  
  // Sidebar components
  SidebarHeaderProps,
  SidebarProps,
  NavigationProps,
  
  // Timeline components
  TimelineItemProps,
  TimelineContainerProps,
  
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
  VersionBadgeProps,
  NavigationArrowProps,
  PaginationDotsProps,
  StatusBadgeProps,
  
  // Section components
  HeroSectionProps,
  FooterProps,
  MobileExperienceItemProps,
} from './components';

// Shared utility types
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
  EventHandler,
  ChangeHandler,
  AsyncState,
  PaginationState,
  FormField,
} from './shared';