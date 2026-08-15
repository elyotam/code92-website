import type { Locale } from './i18n';

export const sections: Record<
  Locale,
  {
    services: { eyebrow: string; title: string };
    projects: { eyebrow: string; title: string; placeholderNote: string };
    contact: { eyebrow: string; title: string; body: string; whatsapp: string; email: string };
    footer: { blurb: string; rights: string };
  }
> = {
  he: {
    services: { eyebrow: 'מה אנחנו בונים', title: 'חמישה תחומים, צוות אחד' },
    projects: {
      eyebrow: 'עבודות',
      title: 'מוצרים שאנחנו בונים',
      placeholderNote: 'דוגמאות המחשה — עבודות לקוחות אמיתיות יתווספו בהמשך.',
    },
    contact: {
      eyebrow: 'בואו נדבר',
      title: 'בואו נדבר על הפרויקט שלכם',
      body: 'ספרו לנו קצת על העסק והצורך שלכם, ונחזור עם המלצה ברורה.',
      whatsapp: 'WhatsApp',
      email: 'אימייל',
    },
    footer: {
      blurb: 'אתרים, אפליקציות, חנויות ומוצרים דיגיטליים מותאמים אישית.',
      rights: 'כל הזכויות שמורות.',
    },
  },
  en: {
    services: { eyebrow: 'What We Build', title: 'Five Areas, One Team' },
    projects: {
      eyebrow: 'Work',
      title: 'Products We Build',
      placeholderNote: 'Illustrative examples — real client work will be added here.',
    },
    contact: {
      eyebrow: "Let's Talk",
      title: "Let's Talk About Your Project",
      body: "Tell us a bit about your business and what you need, and we'll come back with a clear recommendation.",
      whatsapp: 'WhatsApp',
      email: 'Email',
    },
    footer: {
      blurb: 'Websites, apps, online stores, and custom digital products.',
      rights: 'All rights reserved.',
    },
  },
};
