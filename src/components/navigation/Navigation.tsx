// src/components/sidebar/Navigation.tsx

import { NavButton } from '~/components/navigation/NavigationButton';
import type { NavigationProps } from '~/types';
  
  export function Navigation({ activeSection, onSectionClick }: NavigationProps) {
    const navItems = [
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' }
    ];
  
    return (
      <nav className="flex flex-col space-y-2 my-8">
        {navItems.map(item => (
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