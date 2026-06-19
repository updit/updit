import type { Section } from '@/types';

export const scrollToSection = (section: Section) => {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
};
