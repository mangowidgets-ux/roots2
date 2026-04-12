import React from 'react';
import { BrandedRoots2 } from './BrandedRoots2';

interface LogoIconProps {
  size?: number;
  className?: string;
}

function LogoIcon({ size = 32, className = '' }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Roots2 - Adventure & Travel Logo"
    >
      {/* Outer Circle */}
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Compass Rose - Cardinal Directions */}
      <g fill="currentColor">
        {/* North */}
        <polygon points="32,8 35,16 29,16" />
        
        {/* South */}
        <polygon points="32,56 35,48 29,48" />
        
        {/* East */}
        <polygon points="56,32 48,35 48,29" />
        
        {/* West */}
        <polygon points="8,32 16,35 16,29" />
      </g>
      
      {/* Mountain/Peak Element - represents trekking/hiking */}
      <g fill="currentColor" opacity="0.8">
        <path d="M32 22 L40 35 L24 35 Z" />
        <path d="M38 28 L44 38 L32 38 Z" opacity="0.6" />
      </g>
      
      {/* Map Marker - represents destinations */}
      <g fill="currentColor" opacity="0.7">
        <circle cx="32" cy="32" r="3" />
        <circle cx="32" cy="32" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      </g>
      
      {/* Inner decorative elements - waves/nature */}
      <path
        d="M22 38 Q24 36 26 38 T30 38"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M34 40 Q36 38 38 40 T42 40"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function Logo({ size = 32, className = '', showText = false }: LogoProps) {
  if (showText) {
    return (
      <div className="flex items-center gap-2">
        <LogoIcon size={size} className={className} />
        <BrandedRoots2 size="lg" />
      </div>
    );
  }

  return <LogoIcon size={size} className={className} />;
}
