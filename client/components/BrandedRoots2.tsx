import React from 'react';

interface BrandedRoots2Props {
  size?: 'inherit' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  inherit: '',
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl',
  xl: 'text-5xl',
};

export function BrandedRoots2({ size = 'inherit', className = '' }: BrandedRoots2Props) {
  const baseSizeClass = sizeClasses[size];

  return (
    <span
      className={`${baseSizeClass} font-bold font-serif text-white inline-block tracking-widest antialiased ${className}`}
      style={{
        letterSpacing: '0.15em',
        fontVariantLigatures: 'common-ligatures',
      }}
    >
      <span>Roots</span>
      <span className="text-accent" style={{ color: '#d4a853' }}>2</span>
    </span>
  );
}
