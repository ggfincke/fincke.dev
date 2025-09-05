// src/components/navigation/NavButton.tsx
// * sidebar navigation button w/ active state styling
import type { NavButtonProps } from '~/types/navigation';
  
  export function NavButton({ sectionId, label, activeSection, onClick }: NavButtonProps) 
{
    return (
      <button 
        onClick={() => onClick(sectionId)}
        className={`text-center px-4 py-2 border-l-2 transition-colors duration-200 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] ${
          activeSection === sectionId 
            ? 'border-[var(--accent)] text-[var(--accent)]' 
            : 'border-transparent text-[var(--muted)] hover:text-[var(--secondary)]'
        }`}
      >
        {label}
      </button>
    );
  }
