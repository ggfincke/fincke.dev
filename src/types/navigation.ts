import { ReactNode } from 'react';

export interface NavButtonProps {
  sectionId: string;
  label: string;
  activeSection: string;
  onClick: (sectionId: string) => void;
}

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

export interface SectionNavButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
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