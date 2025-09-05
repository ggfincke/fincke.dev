// src/components/display/StatusBadge.tsx
// project status badge w/ icons & color-coded themes
import type { StatusBadgeProps } from '~/types/ui';
import { statusConfig } from '~/utils/statusConfig';

// status badge component
  
  export function StatusBadge({ status }: StatusBadgeProps) 
{
    const statusDisplay = statusConfig[status];
    
    return (
      <span 
        className="inline-flex items-center whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium"
        style={{ 
          color: `var(${statusDisplay.colorVar})`, 
          backgroundColor: `var(${statusDisplay.bgColorVar})`
        } as React.CSSProperties}
      >
        {statusDisplay.icon} {statusDisplay.label}
      </span>
    );
  }