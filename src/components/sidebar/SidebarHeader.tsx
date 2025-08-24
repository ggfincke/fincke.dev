// src/components/sidebar/SidebarHeader.tsx

import { ReactNode } from 'react';
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