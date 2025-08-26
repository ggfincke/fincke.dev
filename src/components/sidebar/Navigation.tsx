// src/components/sidebar/Navigation.tsx

// imports
import { NavButton } from '../buttons/NavigationButton';

// navigation component
interface NavigationProps {
    activeSection: string;
    onSectionClick: (sectionId: string) => void;
  }
  
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