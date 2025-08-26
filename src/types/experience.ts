import { ReactNode } from 'react';

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

export type SkillCategory = 'languages' | 'frontend' | 'backend' | 'tools' | 'specialized' | 'ai-ml' | 'mobile' | 'database' | 'cloud';

export interface Skill {
  name: string;
  category: SkillCategory;
  displayName?: string;
}