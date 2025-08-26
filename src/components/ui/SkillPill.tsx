// src/components/ui/SkillPill.tsx

// skillpill component
interface SkillPillProps {
  name: string;
}

export function SkillPill({ name }: SkillPillProps) {
  return (
    <span className="bg-[var(--color-sidebar)] text-[var(--color-text)] px-2 py-1 md:px-3 md:py-1 rounded-full text-xs sm:text-sm inline-flex items-center justify-center whitespace-nowrap">
      {name}
    </span>
  );
}