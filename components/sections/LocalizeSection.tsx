'use client';

import { stats, services } from '@/lib/data';

export default function LocalizeSection() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center px-6 md:px-[8vw] py-[60px]"
      style={{ backgroundColor: '#193654', color: '#fefefe' }}
    >
      <div className="flex flex-col md:flex-row gap-16 items-stretch">
        {/* left column */}
        <div className="w-full md:w-3/5">
          <h1
            className="font-mono font-bold leading-tight"
            style={{ fontSize: 'clamp(32px, 6vw, 72px)' }}
          >
            <div style={{ color: '#fefefe' }}>translation</div>
            <div style={{ color: '#c9ef52' }}>!=</div>
            <div style={{ color: '#fefefe' }}>localization</div>
          </h1>

          <p className="text-lg max-w-xl mt-6" style={{ color: '#fefefe', opacity: 0.85 }}>
            Thinking about entering the Japanese market? Updit helps with strategy and creative
            grounded in 10 years of Japanese advertising and promotional work — not just word-for-word
            translation.
          </p>

          <div className="flex gap-12 mt-16">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col">
                <span className="text-4xl font-bold" style={{ color: '#c9ef52' }}>{stat.value}</span>
                <span className="text-sm mt-1" style={{ color: '#fefefe', opacity: 0.6 }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* right column: services */}
        <div className="w-full md:w-2/5 flex flex-col justify-end md:max-w-[320px]">
          <div
            className="text-xs font-mono mb-6"
            style={{ color: '#c9ef52', letterSpacing: '0.1em' }}
          >
            Services
          </div>
          {services.map((service) => (
            <div
              key={service.name}
              className="flex justify-between items-center py-4"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}
            >
              <span className="text-sm" style={{ color: '#fefefe' }}>{service.name}</span>
              <span className="font-mono text-xs" style={{ color: '#fefefe', opacity: 0.4 }}>{service.lang}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
