'use client';

import type { CSSProperties } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import type { AppCard, Language } from '@/types';

interface AppCarouselProps {
  appCards: AppCard[];
  language: Language;
}

const cardBg = ['#c9ef52', '#a270e1', '#ecebe4'];

export default function AppCarousel({ appCards, language }: AppCarouselProps) {
  return (
    <div style={{ height: '480px', overflow: 'hidden' }}>
    <Splide
      options={{
        type: 'loop',
        direction: 'ttb',
        height: '480px',
        perPage: 1,
        wheel: true,
        wheelSleep: 400,
        pagination: true,
        arrows: true,
        gap: '16px',
      }}
    >
      {appCards.map((card, i) => {
        const bg = cardBg[i % 3];
        const textColor = bg === '#a270e1' ? '#ffffff' : '#000000';
        const mockupSrc = `/apps/${card.id}_mockup_${language}.png`;
        const logoSrc = `/apps/${card.id}_Logo.png`;

        const cardStyle: CSSProperties = {
          position: 'relative',
          backgroundColor: bg,
          color: textColor,
          borderRadius: '16px',
          overflow: 'hidden',
          padding: '20px',
          height: '100%',
          boxSizing: 'border-box',
          display: 'block',
        };

        const cardContent = (
          <>
            {/* hover overlay */}
            {!card.isPlaceholder && (
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-black pointer-events-none"
                style={{ zIndex: 4 }}
              />
            )}
              {/* logo: top-left, fixed */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  width: '80px',
                  height: '80px',
                  background: 'white',
                  borderRadius: '12px',
                  padding: '4px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  zIndex: 2,
                  overflow: 'hidden',
                }}
              >
                <img
                  src={logoSrc}
                  alt={`${card.name} logo`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>

              {/* mockup: below logo, top-aligned, clipped by overflow */}
              {card.isPlaceholder ? (
                <div
                  style={{
                    position: 'absolute',
                    top: '55px',
                    left: '-40%',
                    right: '-40%',
                    bottom: '80px',
                    overflow: 'hidden',
                    zIndex: 1,
                  }}
                />
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    top: '55px',
                    left: '-40%',
                    right: '-40%',
                    bottom: '80px',
                    overflow: 'hidden',
                    zIndex: 1,
                  }}
                >
                  <Image
                    src={mockupSrc}
                    alt={`${card.name} mockup`}
                    width={900}
                    height={600}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>
              )}

              {/* description: bottom fixed, covers mockup */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '48px',
                  left: '20px',
                  right: '20px',
                  background: 'inherit',
                  paddingTop: '8px',
                  zIndex: 3,
                }}
              >
                <p style={{ fontSize: '0.875rem', opacity: 0.85 }}>
                  {card.description[language]}
                </p>
              </div>

              {/* url: bottom fixed */}
              {!card.isPlaceholder && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '20px',
                    zIndex: 3,
                    fontFamily: 'monospace',
                    fontSize: '0.75rem',
                    opacity: 0.55,
                  }}
                >
                  {card.url}
                </span>
              )}
          </>
        );

        return (
          <SplideSlide key={card.id} style={{ height: '100%' }}>
            {card.isPlaceholder ? (
              <div style={cardStyle}>{cardContent}</div>
            ) : (
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                style={{ ...cardStyle, cursor: 'pointer' }}
              >
                {cardContent}
              </a>
            )}
          </SplideSlide>
        );
      })}
    </Splide>
    </div>
  );
}
