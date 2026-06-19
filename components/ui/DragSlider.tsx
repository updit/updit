'use client';

import { useRef, useEffect } from 'react';
import type { Language } from '@/types';

interface DragSliderProps {
  sliderPosition: number;
  onDrag: (clientX: number, containerWidth: number) => void;
  language: Language;
}

export default function DragSlider({ sliderPosition, onDrag, language }: DragSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const getClientX = (e: MouseEvent | TouchEvent) =>
    'touches' in e ? e.touches[0].clientX : e.clientX;

  const onMove = (e: MouseEvent | TouchEvent) => {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    onDrag(getClientX(e) - rect.left, rect.width);
  };

  const onEnd = () => { dragging.current = false; };

  useEffect(() => {
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onEnd);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, []);

  const isJp = language === 'jp';

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none flex items-center"
      style={{
        height: '48px',
        borderRadius: '999px',
        background: '#e0e0e0',
        boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.2)',
        padding: '4px',
        cursor: 'grab',
      }}
      onMouseDown={() => { dragging.current = true; }}
      onTouchStart={() => { dragging.current = true; }}
    >
      {/* inactive label left */}
      {isJp && (
        <span className="absolute left-5 text-sm font-bold select-none" style={{ color: '#999' }}>
          Hello!
        </span>
      )}
      {/* inactive label right */}
      {!isJp && (
        <span className="absolute right-5 text-sm font-bold select-none" style={{ color: '#999' }}>
          やっほー!
        </span>
      )}

      {/* sliding handle */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          width: '50%',
          height: 'calc(100% - 8px)',
          top: '4px',
          left: `${sliderPosition / 2}%`,
          borderRadius: '999px',
          background: isJp ? '#800202' : '#c9ef52',
          boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
          transition: 'left 0.2s ease, background 0.2s ease',
          cursor: 'grab',
        }}
      >
        <span
          className="font-bold text-sm select-none"
          style={{ color: isJp ? '#fff' : '#000' }}
        >
          {isJp ? 'こんにちは！' : 'Hello!'}
        </span>
      </div>
    </div>
  );
}
