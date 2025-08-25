// src/types/content.types.ts

import { ReactNode } from 'react';

// Experience-related types
export interface Experience {
  id: string;
  date: string;
  title: string;
  company: string;
  companyUrl: string;
  technologies: string[];
  companyLogos: ReactNode;
  content: ReactNode;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

// Project-related types
export type ProjectStatus = 'in-development' | 'complete' | 'paused' | 'experimental' | 'planned' | 'live';

export interface Collaborator {
  name: string;
  url?: string;
}

export interface Project {
  title: string;
  collaborators?: string | string[] | Collaborator | Collaborator[];
  dateRange: string;
  status: ProjectStatus;
  bulletPoints: (string | ReactNode)[];
  technologies: string[];
  madeFor?: string;
  featured: boolean;
  imagePath?: string; 
  imageAlt?: string;
  repoUrl?: string;
  liveUrl?: string;
}

// Skills-related types
export type SkillCategory = 'languages' | 'frontend' | 'backend' | 'tools' | 'specialized' | 'ai-ml' | 'mobile' | 'database' | 'cloud';

export interface Skill {
  name: string;
  category: SkillCategory;
  displayName?: string; // For cases where display differs from internal name
}