import { NavButton } from '../buttons/NavigationButton';

// navigation component
interface NavigationProps {
    activeSection: string;
    onSectionClick: (sectionId: string) => void;
  }
  
  export function Navigation({ activeSection, onSectionClick }: NavigationProps) {
    const navItems = [
      { id: 'about', label: 'About' },
      { id: 'resume', label: 'Resume' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' }
    ];
  
    return (
      <nav className="flex flex-col space-y-4 my-8 items-center">
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