import type { Locale } from './i18n';

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  tag: Record<Locale, string>;
  /** Local placeholder loop clip — NOT real client work. Swap in real
   * footage before this section is considered production-ready. */
  placeholder: true;
};

// PLACEHOLDER — no real client project footage exists yet. These entries
// must never be presented as actual client work; swap in real screen
// recordings before shipping this section to production.
export const projects: Project[] = [
  {
    slug: 'placeholder-website',
    title: { he: 'דוגמת אתר (placeholder)', en: 'Website Example (placeholder)' },
    tag: { he: 'פיתוח אתרים', en: 'Website Development' },
    placeholder: true,
  },
  {
    slug: 'placeholder-app',
    title: { he: 'דוגמת אפליקציה (placeholder)', en: 'App Example (placeholder)' },
    tag: { he: 'אפליקציות מובייל', en: 'Mobile Applications' },
    placeholder: true,
  },
  {
    slug: 'placeholder-store',
    title: { he: 'דוגמת חנות (placeholder)', en: 'Store Example (placeholder)' },
    tag: { he: 'E-commerce', en: 'E-commerce' },
    placeholder: true,
  },
];
