// src/components/display/ThemeSelector.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { themeIds, formatThemeName, defaultTheme } from '~/themes/config';
import { ThemeSelectorProps } from '~/types/ui';

export function ThemeSelector({ show = true, variant = 'floating', className = '' }: ThemeSelectorProps) 
{
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || !show) 
{
    return null;
  }

  const currentTheme = theme ?? resolvedTheme ?? defaultTheme;

  // Floating (default) selector used on desktop
  if (variant === 'floating') 
{
    return (
      <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg px-3 py-2 shadow-lg">
          <label htmlFor="theme-select" className="text-xs text-[var(--muted)] block mb-1">
            Theme
          </label>
          <select
            id="theme-select"
            value={currentTheme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-[var(--bg)] text-[var(--fg)] border border-[var(--border)] rounded px-2 py-1 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
          >
            {themeIds.map((themeId) => (
              <option key={themeId} value={themeId}>
                {formatThemeName(themeId)}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  // Inline selector used in footer on small screens
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <label htmlFor="theme-select-inline" className="text-xs text-[var(--muted)]">
        Theme
      </label>
      <select
        id="theme-select-inline"
        value={currentTheme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-[var(--bg)] text-[var(--fg)] border border-[var(--border)] rounded px-2 py-1 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
      >
        {themeIds.map((themeId) => (
          <option key={themeId} value={themeId}>
            {formatThemeName(themeId)}
          </option>
        ))}
      </select>
    </div>
  );
}
