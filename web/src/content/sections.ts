import type { Locale } from './i18n';

export const sections: Record<
  Locale,
  {
    services: { eyebrow: string; title: string };
    projects: { eyebrow: string; title: string; placeholderNote: string; placeholderBadge: string };
    contact: { eyebrow: string; title: string; body: string; whatsapp: string; email: string };
    footer: { statement: string; rights: string };
  }
> = {
  he: {
    services: { eyebrow: 'מה אנחנו בונים', title: 'משישה תחומים, מוצר אחד שעובד' },
    projects: {
      eyebrow: 'עבודות',
      title: 'מוצרים שאנחנו בונים',
      placeholderNote: 'דוגמאות המחשה בלבד, עבודות לקוחות אמיתיות יתווספו בהמשך.',
      placeholderBadge: 'תצוגה לדוגמה',
    },
    contact: {
      eyebrow: 'בואו נדבר',
      title: 'בואו נדבר על הפרויקט שלכם',
      body: 'ספרו לנו קצת על העסק והצורך שלכם, ונחזור עם המלצה ברורה.',
      whatsapp: 'WhatsApp',
      email: 'אימייל',
    },
    footer: {
      statement: 'רעיון היום. מוצר שעובד מחר.',
      rights: 'כל הזכויות שמורות.',
    },
  },
  en: {
    services: { eyebrow: 'What We Build', title: 'Six disciplines, one product that works' },
    projects: {
      eyebrow: 'Work',
      title: 'Products We Build',
      placeholderNote: 'Illustrative examples only, real client work will be added here.',
      placeholderBadge: 'Sample preview',
    },
    contact: {
      eyebrow: "Let's Talk",
      title: "Let's Talk About Your Project",
      body: "Tell us a bit about your business and what you need, and we'll come back with a clear recommendation.",
      whatsapp: 'WhatsApp',
      email: 'Email',
    },
    footer: {
      statement: 'An idea today. A working product tomorrow.',
      rights: 'All rights reserved.',
    },
  },
};
