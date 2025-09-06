// src/components/theme-provider.tsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

import { themeIds, defaultTheme } from '~/themes/config';

export function ThemeProvider({ children }: { children: React.ReactNode }) 
{
  return (
    <NextThemesProvider
      attribute="data-theme"          // <html data-theme="...">
      defaultTheme={defaultTheme}     // use default from config
      enableSystem={false}            // no system light/dark preference
      storageKey="fincke-theme"       // avoid collisions with other sites
      themes={themeIds}               // dynamically loaded theme list
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}