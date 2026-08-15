import { contact } from '../../content/contact';
import { sections } from '../../content/sections';
import { useAppStore } from '../../store/useAppStore';
import { CodeStream } from '../code-motif/CodeStream';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const locale = useAppStore((s) => s.locale);
  const t = sections[locale].contact;

  return (
    <section id="contact" className={styles.section}>
      <CodeStream columns={3} />
      <div className={`container ${styles.content}`}>
        <GlassCard variant="card" className={styles.card} tilt={false}>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} align="center" />
          <p className={styles.body}>{t.body}</p>

          <div className={styles.links}>
            <GlassCard
              as="a"
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="button"
            >
              {t.whatsapp} · {contact.phoneDisplay}
            </GlassCard>
            <GlassCard as="a" href={`mailto:${contact.email}`} variant="button" className={styles.secondaryLink}>
              {t.email} · {contact.email}
            </GlassCard>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
