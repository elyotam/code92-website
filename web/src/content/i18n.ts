export const locales = ['he', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'he';

export function otherLocale(locale: Locale): Locale {
  return locale === 'he' ? 'en' : 'he';
}

export const dir: Record<Locale, 'rtl' | 'ltr'> = { he: 'rtl', en: 'ltr' };
