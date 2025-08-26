import { ReactNode } from 'react';

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

export interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export interface FooterProps {
  isSmallScreen?: boolean;
}

