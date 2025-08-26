// src/config/navSections.ts

export interface NavSection {
  readonly id: string;
  readonly label: string;
  readonly showInNav: boolean;
}

export const NAV_SECTIONS = {
  hero: { id: 'hero', label: 'Home', showInNav: false },
  about: { id: 'about', label: 'About', showInNav: true },
  experience: { id: 'experience', label: 'Experience', showInNav: true },
  projects: { id: 'projects', label: 'Projects', showInNav: true },
  contact: { id: 'contact', label: 'Contact', showInNav: false }
} as const satisfies Record<string, NavSection>;

export type SectionId = keyof typeof NAV_SECTIONS;

// Export arrays for easier consumption
export const SECTION_IDS = Object.values(NAV_SECTIONS).map(section => section.id);
export const NAV_ITEMS = Object.values(NAV_SECTIONS).filter(section => section.showInNav);
export const ALL_SECTIONS = Object.values(NAV_SECTIONS);

// Helper function to get section by id
export const getSectionById = (id: string): NavSection | undefined => 
{
  return Object.values(NAV_SECTIONS).find(section => section.id === id);
};

// Helper function to check if section should show in navigation
export const shouldShowInNav = (id: string): boolean => 
{
  const section = getSectionById(id);
  return section?.showInNav ?? false;
};