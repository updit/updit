export type Language = 'en' | 'jp';

export type Section = 'top' | 'app' | 'localize' | 'contact';

export interface AppCard {
  id: string;
  name: string;
  description: { en: string; jp: string };
  url: string;
  isPlaceholder?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  name: string;
  lang: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
