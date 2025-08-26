// src/types/projects.ts
// project data types w/ status, collaborators & display info

import { ReactNode } from 'react';

export type ProjectStatus = 'in-development' | 'complete' | 'paused' | 'experimental' | 'planned' | 'live';

export interface Collaborator {
  name: string;
  url?: string;
}

export interface Project {
  title: string;
  collaborators?: Collaborator[];
  dateRange: string;
  status: ProjectStatus;
  bulletPoints: (string | ReactNode)[];
  technologies: string[];
  madeFor?: string;
  imagePath?: string; 
  imageAlt?: string;
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}