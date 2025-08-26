// src/components/buttons/ThemeButton.tsx

// use client
'use client';

// import dependencies
import { ReactNode } from 'react';

// define variant type
type Variant = 'primary' | 'secondary' | 'outline';

// props for button
interface ButtonProps {
  variant: Variant;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

// theme button component
export function ThemeButton({ 
  variant = 'primary', 
  children, 
  href, 
  onClick,
  className = ''
}: ButtonProps) {
  // define styles based on variant
  const baseStyles = "rounded-md px-5 py-3 text-base font-medium transition-all";
  
  const variantStyles = {
    primary: "bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-opacity-90",
    secondary: "bg-[var(--color-accent)] text-[var(--color-background)] hover:bg-opacity-90",
    outline: "border border-[var(--color-border)] text-[var(--color-text-light)] hover:bg-[var(--color-sidebar)]"
  };
  
  const buttonStyle = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  // render as anchor or button based on href/onClick props
  if (href) {
    return (
      <a href={href} className={buttonStyle}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
}