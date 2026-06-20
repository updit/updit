'use client';

import Image from 'next/image';
import { scrollToSection } from '@/lib/utils';
import type { Section } from '@/types';

const navItems: { label: string; section: Section }[] = [
  { label: 'apps', section: 'app' },
  { label: 'localize', section: 'localize' },
  { label: 'contact', section: 'contact' },
];

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-14 flex justify-between items-center px-6"
      style={{ backgroundColor: '#ecebe4', overflowX: 'hidden' }}
    >
      <Image
        src="/updit.png"
        alt="updit"
        width={47}
        height={50}
        priority
        className="object-contain cursor-pointer"
        onClick={() => scrollToSection('top')}
      />

      <nav
        className="flex items-center px-6 py-2 rounded-full"
        style={{ backgroundColor: '#fefefe' }}
      >
        {navItems.map(({ label, section }, i) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`text-xs md:text-sm font-semibold text-black${i < navItems.length - 1 ? ' pr-8' : ''}`}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
