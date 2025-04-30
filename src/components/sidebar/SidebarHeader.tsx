// src/components/sidebar/SidebarHeader.tsx

// imports
import { ReactNode } from 'react';

// sidebar header component
interface SidebarHeaderProps {
  logo: ReactNode;
}

export function SidebarHeader({ logo }: SidebarHeaderProps) {
  return (
    <div className="mb-10 flex flex-col items-center">
      {logo}
    </div>
  );
}