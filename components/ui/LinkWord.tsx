'use client';

import { useState } from 'react';
import PreviewCard from './PreviewCard';

interface LinkWordProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  isJp?: boolean;
  previewLabel?: string;
}

export default function LinkWord({ children, onClick, href, isJp = false, previewLabel }: LinkWordProps) {
  const [hovered, setHovered] = useState(false);
  const borderColor = isJp ? '#800202' : '#C9EF52';

  const sharedStyle: React.CSSProperties = {
    borderBottom: `2px solid ${borderColor}`,
    cursor: 'pointer',
  };

  const inner = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={sharedStyle}
      className="inline-block"
    >
      {children}
    </a>
  ) : (
    <span style={sharedStyle} className="inline-block" onClick={onClick}>
      {children}
    </span>
  );

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
      {hovered && previewLabel && (
        <span className="absolute left-0 z-50" style={{ top: '-130px' }}>
          <PreviewCard label={previewLabel} isJp={isJp} />
        </span>
      )}
    </span>
  );
}
