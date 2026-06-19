import type { AppCard, Stat, Service } from '@/types';

export const appCards: AppCard[] = [
  {
    id: 'fotomenu',
    name: 'fotomenu',
    description: {
      en: 'Photo-based multilingual menu builder for restaurants. 16 languages, QR share.',
      jp: '飲食店向け、写真ベースの多言語メニュービルダー。16言語対応、QRコード共有。',
    },
    url: 'https://fotomenu.app',
  },
  {
    id: 'extanou',
    name: 'ExtaNou',
    description: {
      en: 'An external brain. Type freely — memos become bubbles, bubbles grow.',
      jp: '外付けの脳。自由に書くと、メモがバブルになって広がっていく。',
    },
    url: 'https://extanou.app',
  },
  {
    id: 'titbit',
    name: 'titbit',
    description: {
      en: 'Life hacks in English, learned through puzzles. Turn boredom into knowledge.',
      jp: '英語で学ぶライフハック、パズル形式で。退屈を知識に変えよう。',
    },
    url: 'https://titbit.app',
  },
];

export const stats: Stat[] = [
  { value: '10+', label: 'Years in JP ad & promo' },
  { value: 'EN⇄JP', label: 'Native-level localization' },
  { value: '1:1', label: 'Direct, generalist support' },
];

export const services: Service[] = [
  { name: 'Market-entry copy & messaging', lang: 'JA / EN' },
  { name: 'Inbound & tourism-facing content', lang: 'JA / EN' },
  { name: 'UI/UX localization review', lang: 'JA / EN' },
  { name: 'Brand voice adaptation', lang: 'JA / EN' },
];
