// src/components/display/StatusCircle.tsx
// circular status indicator w/ icon & color-coded themes

import type { StatusCircleProps } from '~/types/ui';
import { statusConfig } from '~/utils/statusConfig';


// status circle component
export function StatusCircle({ status, size = 32 }: StatusCircleProps) 
{
  const statusDisplay = statusConfig[status];

  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-medium text-[var(--bg)]"
      style={{
        '--status-size': `${size}px`,
        '--status-font-size': `${size * 0.5}px`,
        width: 'var(--status-size)',
        height: 'var(--status-size)',
        backgroundColor: `var(${statusDisplay.colorVar})`,
        fontSize: 'var(--status-font-size)',
      } as React.CSSProperties}
      aria-label={statusDisplay.label}
      title={statusDisplay.label}
    >
      {statusDisplay.icon}
    </span>
  );
} 