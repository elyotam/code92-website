import type { Locale } from './i18n';

export const nav: Record<Locale, { services: string; work: string; contact: string; cta: string }> = {
  he: {
    services: 'שירותים',
    work: 'עבודות',
    contact: 'צור קשר',
    cta: 'בואו נדבר',
  },
  en: {
    services: 'Services',
    work: 'Work',
    contact: 'Contact',
    cta: "Let's Talk",
  },
};
