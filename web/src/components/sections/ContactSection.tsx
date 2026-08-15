import { contact } from '../../content/contact';
import { sections } from '../../content/sections';
import { useAppStore } from '../../store/useAppStore';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const locale = useAppStore((s) => s.locale);
  const t = sections[locale].contact;

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.card}`}>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} align="center" />
        <p className={styles.body}>{t.body}</p>

        <div className={styles.links}>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.linkPrimary}>
            {t.whatsapp} · {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`} className={styles.linkSecondary}>
            {t.email} · {contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
