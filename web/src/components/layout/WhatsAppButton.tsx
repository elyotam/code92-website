import { contact } from '../../content/contact';
import { useAppStore } from '../../store/useAppStore';
import styles from './WhatsAppButton.module.css';

const prefill: Record<'he' | 'en', string> = {
  he: 'היי! ראיתי את האתר, אשמח לקבל פרטים.',
  en: "Hi! I saw the site, I'd love to get some details.",
};

export function WhatsAppButton({ className }: { className?: string }) {
  const locale = useAppStore((s) => s.locale);
  const href = `${contact.whatsapp}?text=${encodeURIComponent(prefill[locale])}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className={`${styles.button} ${className ?? ''}`}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
