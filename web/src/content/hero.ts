import type { Locale } from './i18n';

export const hero: Record<
  Locale,
  { badge: string; titleLine1: string; titleLine2: string; subline: string; ctaPrimary: string; ctaSecondary: string }
> = {
  he: {
    badge: 'אתרים · חנויות · אפליקציות · מערכות · AI',
    titleLine1: 'אנחנו לא רק בונים אתרים.',
    titleLine2: 'אנחנו בונים מוצרים דיגיטליים שעובדים.',
    subline: 'אתרים, חנויות, אפליקציות, מערכות ואוטומציות, מאפיון ועד מוצר שעובד בעולם האמיתי.',
    ctaPrimary: 'בואו נבנה משהו יוצא דופן',
    ctaSecondary: 'צפו בעבודות',
  },
  en: {
    badge: 'Websites · Commerce · Apps · Systems · AI',
    titleLine1: "We don't just build websites.",
    titleLine2: 'We build digital products that work.',
    subline: 'Websites, stores, apps, systems, and automations, from spec to a product that works in the real world.',
    ctaPrimary: "Let's build something exceptional",
    ctaSecondary: 'See the work',
  },
};
