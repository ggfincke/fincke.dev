// navigation button component
interface NavButtonProps {
    sectionId: string;
    label: string;
    activeSection: string;
    onClick: (sectionId: string) => void;
  }
  
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