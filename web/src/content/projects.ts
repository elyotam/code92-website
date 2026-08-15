import type { Locale } from './i18n';

export type DeviceType = 'browser' | 'phone';

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  tag: Record<Locale, string>;
  deviceType: DeviceType;
  /** Local short (3-6s) compressed loop clip. Undefined until real footage
   * exists — ProjectDeviceFrame shows an honestly-labeled placeholder
   * screen instead of a broken/empty video when this is unset. */
  videoSrc?: string;
  /** NOT real client work. Swap in real footage (and set videoSrc) before
   * this section is considered production-ready. */
  placeholder: true;
};

// PLACEHOLDER — no real client project footage exists yet. These entries
// must never be presented as actual client work; swap in real screen
// recordings (and set videoSrc) before shipping this section to production.
export const projects: Project[] = [
  {
    slug: 'placeholder-website',
    title: { he: 'דוגמת אתר (placeholder)', en: 'Website Example (placeholder)' },
    tag: { he: 'פיתוח אתרים', en: 'Website Development' },
    deviceType: 'browser',
    placeholder: true,
  },
  {
    slug: 'placeholder-app',
    title: { he: 'דוגמת אפליקציה (placeholder)', en: 'App Example (placeholder)' },
    tag: { he: 'אפליקציות מובייל', en: 'Mobile Applications' },
    deviceType: 'phone',
    placeholder: true,
  },
  {
    slug: 'placeholder-store',
    title: { he: 'דוגמת חנות (placeholder)', en: 'Store Example (placeholder)' },
    tag: { he: 'E-commerce', en: 'E-commerce' },
    deviceType: 'browser',
    placeholder: true,
  },
];
