'use client';

import { appCards } from '@/lib/data';
import { useAppLanguage } from '@/hooks/useAppLanguage';
import { scrollToSection } from '@/lib/utils';
import Button from '@/components/ui/Button';
import DragSlider from '@/components/ui/DragSlider';
import AppCarousel from '@/components/ui/AppCarousel';

const copy = {
  tag: {
    en: 'GENERALIST BY NATURE, SPECIALIST ON DEMAND',
    jp: '生まれつきのジェネラリスト、必要に応じてスペシャリスト',
  },
  h1: {
    en: ['words in.', 'code out.'],
    jp: ['何かを作るって、', 'やっぱり楽しいね'],
  },
  sub: {
    en: 'Culture, always in the loop. I build small apps with AI — playful, useful, and occasionally niche on purpose.',
    jp: 'もとコピーライター、エディター、ディレクター…。職歴を語るとキリのない、橋渡し的表現者。AIの力を借りながら、アプリ開発も始めました。',
  },
  cta: {
    en: [
      'Got an idea for a new app?',
      'Want a working prototype built — source code and all?',
      'Or just want to make something together?',
    ],
    jp: [
      '新しいアプリのアイデア、フィードバック、動くプロトタイプ制作、',
      '何か一緒に始めたい?',
      'どんなことでも、まずは声かけてみて!',
    ],
  },
  ctaBtn: {
    en: "Let's talk anyway",
    jp: 'ご連絡はこちら',
  },
} as const;

export default function AppSection() {
  const { language, sliderPosition, handleDrag } = useAppLanguage();
  const lang = language;

  return (
    <div className="min-h-screen flex flex-col px-[8vw] py-[60px]" style={{ backgroundColor: '#fefefe' }}>
      {/* slider full width */}
      <div className="w-full mb-8">
        <DragSlider
          sliderPosition={sliderPosition}
          onDrag={handleDrag}
          language={lang}
        />
      </div>

      {/* two columns */}
      <div className="flex flex-col lg:flex-row items-stretch flex-1 gap-8">
        {/* left column */}
        <div className="flex flex-col justify-center lg:w-2/3" style={{ color: '#000000' }}>
        <div className="mb-6">
          <span
            className="font-mono text-xs text-white px-2 py-1 rounded"
            style={{ backgroundColor: '#a270e1' }}
          >
            {copy.tag[lang]}
          </span>
        </div>

        <h1
          className="font-extrabold tracking-[-0.03em] lowercase mb-6"
          style={{
            fontSize: lang === 'jp' ? 'clamp(32px, 6.0vw, 75px)' : 'clamp(48px, 9vw, 110px)',
            lineHeight: lang === 'jp' ? 1.4 : 1,
            letterSpacing: lang === 'jp' ? '-0.04em' : undefined,
          }}
        >
          {lang === 'jp' ? (
            <>
              {copy.h1.jp[0]}
              <br />
              {copy.h1.jp[1]}
            </>
          ) : (
            <>
              {copy.h1.en[0]}
              <br />
              {copy.h1.en[1]}
            </>
          )}
        </h1>

        <p className="text-lg max-w-lg mb-12" style={{ color: '#000000', fontWeight: 600 }}>
          {copy.sub[lang]}
        </p>

        <div>
          <p className="mb-4" style={{ color: '#000000' }}>
            {copy.cta[lang].map((line, i) => (
              <span key={i}>
                {line}
                {i < copy.cta[lang].length - 1 && <br />}
              </span>
            ))}
          </p>
          <Button onClick={() => scrollToSection('contact')} variant="dark">
            {copy.ctaBtn[lang]}
          </Button>
        </div>
      </div>

        {/* right column */}
        <div className="flex flex-col justify-end lg:w-1/3">
          <AppCarousel appCards={appCards} language={lang} />
        </div>
      </div>
    </div>
  );
}
