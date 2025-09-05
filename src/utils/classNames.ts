// src/utils/classNames.ts
// common CSS class combinations for consistent styling

// base button layout
export const baseButtonClasses = "inline-flex items-center gap-2 rounded-lg transition-all duration-200";

// button size variants
export const buttonSizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2"
} as const;

// button color variants
export const buttonColors = {
  secondary: "bg-[var(--card)] text-[var(--muted)] hover:bg-[var(--border)] hover:shadow-md",
  primary: "bg-[var(--accent)] text-[var(--bg)] hover:bg-opacity-90 hover:shadow-md"
} as const;

// common layout patterns
export const layoutClasses = {
  flexCenter: "flex items-center",
  flexCenterJustify: "flex items-center justify-center",
  inlineFlex: "inline-flex items-center"
} as const;

// utility function to combine button classes
export function getButtonClasses(
  size: keyof typeof buttonSizes = 'md',
  variant: keyof typeof buttonColors = 'secondary'
): string 
{
  return `${baseButtonClasses} ${buttonSizes[size]} ${buttonColors[variant]}`;
}