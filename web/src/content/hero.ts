import type { Locale } from './i18n';

// Placeholder copy for the structural Hero shell built this phase — the
// full Hero (real headline treatment, the construction-engine visual) is
// next phase's work. Kept honest and simple rather than over-written for
// a component that's about to be redesigned around it.
export const hero: Record<
  Locale,
  { badge: string; titleLine1: string; titleLine2: string; subline: string; ctaPrimary: string; ctaSecondary: string }
> = {
  he: {
    badge: 'אתרים · מסחר · אפליקציות · תוכנה · AI',
    titleLine1: 'הרעיון שלכם.',
    titleLine2: 'הופך למוצר שעובד.',
    subline: 'אתרים, חנויות, אפליקציות, תוכנה מותאמת אישית ואוטומציות AI, נבנים כאן.',
    ctaPrimary: 'בואו נדבר',
    ctaSecondary: 'מה אנחנו בונים',
  },
  en: {
    badge: 'Websites · Commerce · Apps · Software · AI',
    titleLine1: 'Your idea.',
    titleLine2: 'Turned into a product that works.',
    subline: 'Websites, stores, apps, custom software, and AI automations. Built here.',
    ctaPrimary: "Let's Talk",
    ctaSecondary: 'What We Build',
  },
};
