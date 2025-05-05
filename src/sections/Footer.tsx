// src/sections/Footer.tsx

// footer component
import { SocialIcons } from "../components/ui/SocialIcons";


// footer section
interface FooterProps {
  isSmallScreen?: boolean;
}
export function Footer({ isSmallScreen = false }: FooterProps) {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="w-full bg-[var(--color-background-alt)] border-t border-[var(--color-border)] py-6">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Social icons */}
          {isSmallScreen && (
            <SocialIcons className="mb-6" />
          )}
          
          {/* Site info */}
          <div className="flex justify-center items-center mb-4">
            <div className="text-[var(--color-text)] text-sm text-center max-w-lg">
              Designed on a sketchpad & in Figma. Coded with Next.js (React) and Tailwind CSS, deployed with Vercel on Cloudflare. All text is set in the Geist typeface.
            </div>
          </div>
          
          {/* Copyright info */}
          <div className="flex justify-center items-center">
            <div className="text-[var(--color-text)] text-sm">
              &copy; {currentYear} Garrett Fincke. All Rights Reserved. 
            </div>
          </div>
        </div>
      </footer>
    );
  }