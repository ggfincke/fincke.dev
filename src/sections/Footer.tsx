// src/sections/Footer.tsx
// site footer w/ social icons & copyright info
import { SocialIcons } from "~/components/interactive/SocialIcons";
import { ThemeSelector } from "~/components/display/ThemeSelector";
import type { FooterProps } from '~/types/layout';
import { VERSION } from '~/utils/version';


// footer section component
export function Footer({ isSmallScreen = false }: FooterProps) 
{
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="w-full bg-[var(--card)] border-t border-[var(--border)] py-6">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Social icons */}
          {isSmallScreen && (
            <SocialIcons className="mb-6" />
          )}

          {/* Theme selection for small screens */}
          {isSmallScreen && (
            <div className="mb-6 flex justify-center">
              <ThemeSelector variant="inline" />
            </div>
          )}
          
          {/* Site info */}
          <div className="flex justify-center items-center mb-4">
            <div className="text-[var(--muted)] text-sm text-center max-w-lg">
              Designed on a sketchpad & in Figma. Color scheme inspired by the Visual Studio Code theme <a href="https://vscodethemes.com/e/Equinusocio.vsc-material-theme/material-theme-ocean-high-contrast" className="hover:underline" target="_blank" rel="noopener noreferrer">Material Theme - Ocean High Contrast</a>. Coded with Next.js (React) & Tailwind CSS, deployed with Vercel on Cloudflare. All text is set in the Geist typeface.
            </div>
          </div>
          
          {/* Copyright info & version */}
          <div className="flex flex-col items-center space-y-2">
            <div className="text-[var(--muted)] text-sm">
              &copy; {currentYear} Garrett Fincke. All Rights Reserved.
            </div>
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--accent)] text-[var(--bg)] border border-[var(--accent)]">
              v{VERSION}
            </div>
          </div>
        </div>
      </footer>
    );
  }
