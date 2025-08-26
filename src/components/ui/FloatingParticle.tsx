// src/components/ui/FloatingParticle.tsx
import React from 'react';
import type { FloatingParticleProps } from '~/types';

const FloatingParticle = ({ delay = 0, left = 0, top = 0, duration = 24 }: FloatingParticleProps) => {
  return (
    <div 
      className="absolute w-2 h-2 bg-[var(--color-primary)] rounded-full opacity-10 animate-float"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  );
};

export default FloatingParticle; 