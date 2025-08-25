// src/types/navigation.types.ts

import { ReactNode } from 'react';

// Navigation button component types
export interface NavButtonProps {
  sectionId: string;
  label: string;
  activeSection: string;
  onClick: (sectionId: string) => void;
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