// src/components/buttons/NavigationButton.tsx

// navigation button component
import type { NavButtonProps } from '~/types';
  
  export function NavButton({ sectionId, label, activeSection, onClick }: NavButtonProps) {
    return (
      <button 
        onClick={() => onClick(sectionId)}
        className={`text-center px-4 py-2 border-l-2 transition-colors duration-200 w-full ${
          activeSection === sectionId 
            ? 'border-[var(--color-primary)] text-[var(--color-primary)]' 
            : 'border-transparent text-[var(--color-text)] hover:text-[var(--color-text-light)]'
        }`}
      >
        {label}
      </button>
    );
  }