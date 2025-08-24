// src/components/sidebar/SidebarHeader.tsx

import type { SidebarHeaderProps } from '~/types';

export function SidebarHeader({ logo }: SidebarHeaderProps) {
  return (
    <div className="mb-10 flex flex-col items-center">
      {logo}
    </div>
  );
}