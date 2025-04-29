// sidebar header
import { ReactNode } from 'react';

// props for sidebar header
interface SidebarHeaderProps {
  logo: ReactNode;
}

export function SidebarHeader({ logo }: SidebarHeaderProps) {
  return (
    <div className="mb-8 flex flex-col items-center">
      {logo}
      <h1 className="text-3xl font-bold text-[var(--color-text-light)] text-center">
        Garrett Fincke
      </h1>
      <h2 className="text-xl font-medium text-[var(--color-primary)] mt-2 text-center">
        Software Engineer
      </h2>
      <p className="mt-4 text-[var(--color-text)] text-sm text-center">
        I build accessible, pixel-perfect digital experiences for the web.
      </p>
    </div>
  );
}
  