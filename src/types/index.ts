// Main barrel export for most commonly used types
// For specific domain types, import directly from their respective files

// Core data types (most commonly used)
export type {
  Project,
  ProjectStatus,
  Collaborator,
} from './projects';

export type { Experience, Education, Skill, SkillCategory } from './experience';

// Common utility types
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

// Re-export domain-specific modules for convenience
export * as ProjectTypes from './projects';
export * as ExperienceTypes from './experience';
export * as NavigationTypes from './navigation';
export * as UITypes from './ui';
export * as LayoutTypes from './layout';