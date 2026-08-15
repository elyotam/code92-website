import { contact } from '../../content/contact';
import { sections } from '../../content/sections';
import { useAppStore } from '../../store/useAppStore';
import { Reveal } from '../motion/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const locale = useAppStore((s) => s.locale);
  const t = sections[locale].contact;

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />
        <Reveal variant="panel" delay={0.15}>
          <p className={styles.body}>{t.body}</p>
        </Reveal>

        <Reveal variant="panel" delay={0.25}>
          <div className={styles.links}>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.linkPrimary}>
              {t.whatsapp} · {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className={styles.linkSecondary}>
              {t.email} · {contact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
