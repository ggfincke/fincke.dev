// src/constants/durations.ts
// Animation duration constants w/ CSS variable mapping
// Note: Related CSS variables are defined in src/styles/design-tokens.css.
// Keep values synchronized with --duration-*-ms tokens.

export const DURATIONS = {
  FAST: 200,        // --duration-fast-ms
  NORMAL: 300,      // --duration-normal-ms  
  SLOW: 500,        // --duration-slow-ms
  EXTRA_SLOW: 1000, // --duration-extra-slow-ms
} as const;

export type Duration = keyof typeof DURATIONS;

// get duration value in milliseconds
export function getDuration(duration: Duration): number 
{
  return DURATIONS[duration];
}

// map common duration names to standard values
export const DURATION_MAP = {
  fast: DURATIONS.FAST,
  normal: DURATIONS.NORMAL,
  slow: DURATIONS.SLOW,
  'extra-slow': DURATIONS.EXTRA_SLOW,
} as const;

// default duration for animations
export const DEFAULT_DURATION = DURATIONS.NORMAL;
