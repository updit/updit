'use client';

import { useEffect, useRef, useState } from 'react';
import { annotate } from 'rough-notation';
import PreviewCard from '@/components/ui/PreviewCard';

interface AnimatedLinkWordProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant: 'circle' | 'marker';
  delay?: number;
  padding?: number | [number, number];
  previewLabel?: string;
  imageSrc?: string;
  isJp?: boolean;
}

export default function AnimatedLinkWord({
  children,
  onClick,
  href,
  variant,
  delay,
  padding,
  previewLabel,
  imageSrc,
  isJp,
}: AnimatedLinkWordProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const actualDelay = delay !== undefined ? delay : variant === 'circle' ? 500 : 800;

  useEffect(() => {
    if (!spanRef.current) return;

    const annotation =
      variant === 'circle'
        ? annotate(spanRef.current, {
            type: 'circle',
            color: '#800202',
            strokeWidth: 2,
            padding: 8,
            animationDuration: 1200,
          })
        : annotate(spanRef.current, {
            type: 'highlight',
            color: '#c9ef52',
            animationDuration: 1000,
            ...(padding !== undefined && { padding }),
          });

    const timer = setTimeout(() => annotation.show(), actualDelay);

    return () => {
      clearTimeout(timer);
      annotation.remove();
    };
  }, [variant, actualDelay]);

  const innerContent = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {children}
    </a>
  ) : (
    <span onClick={onClick} style={{ cursor: 'pointer' }}>
      {children}
    </span>
  );

  return (
    <span
      ref={spanRef}
      style={{ display: 'inline-block', position: 'relative', maxWidth: '100%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {innerContent}
      {isHovered && imageSrc && (
        <div
          style={{
            position: 'absolute',
            top: '-130px',
            left: 0,
            zIndex: 50,
            pointerEvents: 'none',
          }}
        >
          <PreviewCard imageSrc={imageSrc} isJp={isJp} label={previewLabel ?? ''} />
        </div>
      )}
    </span>
  );
}
