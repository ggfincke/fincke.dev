// src/types/theme.ts
// Theme type definitions

export interface ThemeDefinition
{
  id: string;
  name: string;
  description?: string;
  colors: {
    bg: string;
    fg: string;
    muted: string;
    border: string;
    card: string;
    card2?: string;
    accent: string;
    accentContrast?: string;
    secondary?: string;
    secondaryContrast?: string;
    ring: string;
    link?: string;
    linkHover?: string;
    selection?: string;
    badgeBg?: string;
    codeBg?: string;
    shadow: string;
    scrollbarThumbColor: string;
    scrollbarThumbHover: string;
  };
  colorScheme: 'dark' | 'light';
}