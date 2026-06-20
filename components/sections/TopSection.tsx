'use client';

import { scrollToSection } from '@/lib/utils';
import AnimatedLinkWord from '@/components/ui/AnimatedLinkWord';

export default function TopSection() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center px-6 md:px-[8vw] py-24"
      style={{ backgroundColor: '#ecebe4' }}
    >
      <div style={{ color: '#000000', lineHeight: 1.1 }}>
        <div style={{ fontSize: 'clamp(94px, 17vw, 156px)', fontWeight: 900 }}>
          Hello,
        </div>
        <div style={{ fontSize: 'clamp(58px, 8vw, 77px)', fontWeight: 900 }}>
          <AnimatedLinkWord href="#" variant="circle" previewLabel="美字工房 — iljos.com" imageSrc="/sc_biji.png">
            こんにちは！
          </AnimatedLinkWord>
        </div>
      </div>

      <div
        style={{
          fontSize: 'clamp(17px, 3vw, 28px)',
          fontWeight: 600,
          color: '#000000',
          marginTop: '24px',
          lineHeight: 1.6,
        }}
      >
        I am Mari from updit,{' '}
        <AnimatedLinkWord
          onClick={() => scrollToSection('app')}
          variant="marker"
          delay={800}
          padding={[2, 4]}
          previewLabel="/app — fotomenu / ExtaNou / titbit"
          imageSrc="/sc_apps.png"
        >
          a web app creator
        </AnimatedLinkWord>
        ,
        <br />
        <AnimatedLinkWord
          onClick={() => scrollToSection('localize')}
          variant="marker"
          delay={1800}
          padding={[4, 4]}
          previewLabel="/localize — TRANSLATION != LOCALIZATION"
          imageSrc="/sc_localize.png"
        >
          English↔︎日本語 localizer
        </AnimatedLinkWord>
        .
        <br />
        Making things make sense, whatever the language.
      </div>

      <div style={{ marginTop: '80px', color: '#666' }} className="text-xs">
        Around since the '90s. Paused. Now quietly back in 2026.
      </div>
    </div>
  );
}
