// skill pill component
interface SkillPillProps {
    name: string;
  }
  
  export function SkillPill({ name }: SkillPillProps) {
    return (
      <span className="bg-[var(--color-sidebar)] text-[var(--color-text)] px-3 py-1 rounded-full text-sm">
        {name}
      </span>
    );
  }