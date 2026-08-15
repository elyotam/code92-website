import type { Locale } from './i18n';

export type Service = {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

// Draft copy — user-reviewable, not final. No invented stats/claims: every
// line describes a capability, not a fabricated outcome or number. Visual
// treatment per service is intentionally undefined here — that's a later
// phase's decision, not baked into the data model this time.
export const services: Service[] = [
  {
    slug: 'website-development',
    title: { he: 'פיתוח אתרים ודפי נחיתה', en: 'Websites & Landing Pages' },
    description: {
      he: 'אתרי תדמית ודפי נחיתה ברמה גבוהה, בנויים למהירות, לנראות בגוגל ולהמרה בפועל.',
      en: 'High-end marketing sites and landing pages, built for speed, search visibility, and real conversion.',
    },
  },
  {
    slug: 'ecommerce',
    title: { he: 'חנויות מסחר אלקטרוני', en: 'E-commerce Stores' },
    description: {
      he: 'חנויות אונליין שלמות: קטלוג, עגלה, תשלום, משלוח וניהול הזמנות, בנויות לגדול איתכם.',
      en: 'Complete online stores: catalog, cart, checkout, shipping, and order management, built to grow with your business.',
    },
  },
  {
    slug: 'web-applications',
    title: { he: 'אפליקציות ווב', en: 'Web Applications' },
    description: {
      he: 'מערכות ווב מותאמות אישית לתהליכי העבודה של העסק שלכם, מלוחות בקרה ועד פורטלים לניהול לקוחות.',
      en: 'Custom web applications built around how your business actually works, from internal dashboards to customer-facing portals.',
    },
  },
  {
    slug: 'mobile-applications',
    title: { he: 'אפליקציות מובייל', en: 'Mobile Applications' },
    description: {
      he: 'אפליקציות iOS ו-Android שמביאות את המוצר או השירות שלכם ישירות למסך של הלקוחות.',
      en: "iOS and Android apps that put your product or service directly in your customers' hands.",
    },
  },
  {
    slug: 'custom-software',
    title: { he: 'מערכות תוכנה מותאמות אישית', en: 'Custom Software Systems' },
    description: {
      he: 'פתרונות מותאמים אישית שמחברים בין מערכות, APIs, בסיסי נתונים וענן, לתשתית דיגיטלית אחת שעובדת בשבילכם.',
      en: 'Tailored solutions that connect systems, APIs, databases, and cloud infrastructure into one digital backbone that works for you.',
    },
  },
  {
    slug: 'ai-automation',
    title: { he: 'אוטומציות AI', en: 'AI Automations' },
    description: {
      he: 'סוכני AI ותהליכים אוטומטיים שחוסכים עבודה ידנית ומייעלים מכירות ושירות.',
      en: 'AI agents and automated workflows that cut manual work and streamline sales and support.',
    },
  },
];
