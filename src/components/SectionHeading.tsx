// src/components/SectionHeading.tsx

// props for section heading
interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
  }
  
  export function SectionHeading({
    title,
    subtitle,
    align = 'left',
    className = ''
  }: SectionHeadingProps) {
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
      </div>
    );
  }