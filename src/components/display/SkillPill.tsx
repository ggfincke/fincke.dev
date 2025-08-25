// src/components/ui/SkillPill.tsx

// skillpill component with size variants
import type { SkillPillProps } from '~/types';

export function SkillPill({ name, size = 'sm', className = '' }: SkillPillProps) {
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2 py-1 md:px-3 md:py-1 text-xs sm:text-sm',
    md: 'px-3 py-1 text-sm'
  };

  return (
    <span 
      className={`bg-[var(--color-sidebar)] text-[var(--color-text)] rounded-full inline-flex items-center justify-center whitespace-nowrap hover:bg-[var(--color-border)] transition-colors duration-200 ${sizeClasses[size]} ${className}`}
    >
      {name}
    </span>
  );
}