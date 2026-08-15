import type { Locale } from './i18n';

export const hero: Record<
  Locale,
  { badge: string; titleLine1: string; titleLine2: string; subline: string; ctaPrimary: string; ctaSecondary: string }
> = {
  he: {
    badge: 'אתרים · אפליקציות · E-commerce · מובייל · פיתוח מותאם אישית',
    titleLine1: 'אנחנו לא בונים אתרים.',
    titleLine2: 'אנחנו מהנדסים חוויות דיגיטליות.',
    subline: 'אתרים, אפליקציות, חנויות ומוצרים דיגיטליים מותאמים אישית — מהרעיון הראשוני ועד למערכת שרצה בפועל.',
    ctaPrimary: 'בואו נדבר על הפרויקט',
    ctaSecondary: 'לכל השירותים',
  },
  en: {
    badge: 'Websites · Web Apps · E-commerce · Mobile · Custom Development',
    titleLine1: "We don't just build websites.",
    titleLine2: 'We engineer digital experiences.',
    subline: 'Websites, apps, online stores, and custom digital products — from the first idea to a system that actually runs.',
    ctaPrimary: "Let's Talk About Your Project",
    ctaSecondary: 'See All Services',
  },
};
