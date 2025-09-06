// src/components/display/FloatingParticle.tsx
// animated floating particle w/ customizable position & timing
import type { FloatingParticleProps } from '~/types/ui';

// floating particle component w/ animation
const FloatingParticle = ({ delay = 0, left = 0, top = 0, duration = 24 }: FloatingParticleProps) => 
{
  return (
    <div 
      className="absolute w-2 h-2 bg-[var(--accent)] rounded-full opacity-10 animate-float"
      style={{
        '--particle-left': `${left}%`,
        '--particle-top': `${top}%`,
        '--particle-delay': `${delay}s`,
        '--particle-duration': `${duration}s`,
        left: 'var(--particle-left)',
        top: 'var(--particle-top)',
        animationDelay: 'var(--particle-delay)',
        animationDuration: 'var(--particle-duration)'
      } as React.CSSProperties & { [key: string]: string | number }}
    />
  );
};

export default FloatingParticle; 