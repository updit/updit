import { useState, Dispatch, SetStateAction } from 'react';
import type { Language } from '@/types';

interface UseAppLanguageReturn {
  language: Language;
  sliderPosition: number;
  handleDrag: (clientX: number, containerWidth: number) => void;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

const getBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const lang = navigator.language || navigator.languages?.[0] || 'en';
  return lang.startsWith('ja') ? 'jp' : 'en';
};

export function useAppLanguage(): UseAppLanguageReturn {
  const initialLanguage = getBrowserLanguage();

  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [sliderPosition, setSliderPosition] = useState<number>(
    initialLanguage === 'jp' ? 85 : 15
  );

  const handleDrag = (clientX: number, containerWidth: number) => {
    const position = Math.min(100, Math.max(0, (clientX / containerWidth) * 100));
    setSliderPosition(position);
    setLanguage(position > 50 ? 'jp' : 'en');
  };

  return { language, sliderPosition, handleDrag, setLanguage };
}
