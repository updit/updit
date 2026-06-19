import { useState, Dispatch, SetStateAction } from 'react';
import type { Language } from '@/types';

interface UseAppLanguageReturn {
  language: Language;
  sliderPosition: number;
  handleDrag: (clientX: number, containerWidth: number) => void;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

export function useAppLanguage(): UseAppLanguageReturn {
  const [language, setLanguage] = useState<Language>('en');
  const [sliderPosition, setSliderPosition] = useState<number>(15);

  const handleDrag = (clientX: number, containerWidth: number) => {
    const position = Math.min(100, Math.max(0, (clientX / containerWidth) * 100));
    setSliderPosition(position);
    setLanguage(position > 50 ? 'jp' : 'en');
  };

  return { language, sliderPosition, handleDrag, setLanguage };
}
