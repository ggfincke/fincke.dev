// src/components/layout/SidebarHeader.tsx
// sidebar header w/ logo display

import type { SidebarHeaderProps } from '~/types/navigation';

// sidebar header component
export function SidebarHeader({ logo }: SidebarHeaderProps) 
{
  return (
    <div className="mb-10 flex flex-col items-center">
      {logo}
    </div>
  );
}