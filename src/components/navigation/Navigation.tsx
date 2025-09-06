// src/components/navigation/Navigation.tsx
// * main navigation component w/ section buttons

import { NavButton } from '~/components/navigation/NavButton';
import { NAV_ITEMS } from '~/constants/navigation';
import type { NavProps } from '~/types/navigation';
  
// * navigation menu component
export function Navigation({ activeSection, onSectionClick }: NavProps) 
{
  
    return (
      <nav className="flex flex-col space-y-2 my-8">
        {NAV_ITEMS.map(item => (
          <NavButton
            key={item.id}
            sectionId={item.id}
            label={item.label}
            activeSection={activeSection}
            onClick={onSectionClick}
          />
        ))}
      </nav>
    );
  }