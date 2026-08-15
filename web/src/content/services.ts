import type { Locale } from './i18n';

export type SceneId = 'website' | 'webapp' | 'ecommerce' | 'mobile' | 'custom';

export type Service = {
  slug: string;
  sceneId: SceneId;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

// Draft copy — user-reviewable, not final. No invented stats/claims: every
// line describes a capability, not a fabricated outcome or number.
export const services: Service[] = [
  {
    slug: 'website-development',
    sceneId: 'website',
    title: { he: 'פיתוח אתרים', en: 'Website Development' },
    description: {
      he: 'אתרי תדמית, נחיתה וחנות — בעיצוב ברמה גבוהה, בנויים למהירות, לנראות בגוגל ולהמרה בפועל.',
      en: 'Marketing sites, landing pages and storefronts — designed at a high level and built for speed, search visibility, and real conversion.',
    },
  },
  {
    slug: 'web-applications',
    sceneId: 'webapp',
    title: { he: 'אפליקציות ווב', en: 'Web Applications' },
    description: {
      he: 'מערכות ווב מותאמות אישית לתהליכי העבודה של העסק שלכם — מלוחות בקרה ועד פורטלים לניהול לקוחות.',
      en: 'Custom web applications built around how your business actually works — from internal dashboards to customer-facing portals.',
    },
  },
  {
    slug: 'ecommerce-platforms',
    sceneId: 'ecommerce',
    title: { he: 'חנויות מסחר אלקטרוני', en: 'E-commerce Platforms' },
    description: {
      he: 'חנויות אונליין שלמות — מקטלוג ועגלה ועד תשלום, משלוח וניהול הזמנות — בנויות לגדול איתכם.',
      en: 'Complete online stores — catalog, cart, checkout, shipping and order management — built to grow with your business.',
    },
  },
  {
    slug: 'mobile-applications',
    sceneId: 'mobile',
    title: { he: 'אפליקציות מובייל', en: 'Mobile Applications' },
    description: {
      he: 'אפליקציות iOS ו-Android שמביאות את המוצר או השירות שלכם ישירות למסך של הלקוחות.',
      en: "iOS and Android apps that put your product or service directly in your customers' hands.",
    },
  },
  {
    slug: 'custom-digital-products',
    sceneId: 'custom',
    title: { he: 'מוצרים דיגיטליים מותאמים אישית', en: 'Custom Digital Products' },
    description: {
      he: 'פתרונות מותאמים אישית שמחברים בין מערכות, APIs, בסיסי נתונים וענן — לתשתית דיגיטלית אחת שעובדת בשבילכם.',
      en: 'Tailored solutions that connect systems, APIs, databases and cloud infrastructure into one digital backbone that works for you.',
    },
  },
];
