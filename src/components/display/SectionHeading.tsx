// src/components/display/SectionHeading.tsx
// section heading w/ title, subtitle & alignment options
import type { SectionHeadingProps } from '~/types/ui';

// section heading component
export function SectionHeading({
  title,
  subtitle,
  subsubtitle,
  align = 'left',
  className = ''
}: SectionHeadingProps) 
{
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  
  return (
    <div className={`${alignmentClasses[align]} ${className}`}>
      <h2 className="text-3xl font-bold text-[var(--color-text-light)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-xl text-[var(--color-text)]">
          {subtitle}
        </p>
      )}
      {subsubtitle && (
        <p className="mt-2 text-md text-[var(--color-text)]">
          {subsubtitle}
        </p>
      )}
    </div>
  );
}