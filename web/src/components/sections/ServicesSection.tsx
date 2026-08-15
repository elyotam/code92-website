import { sections } from '../../content/sections';
import { services } from '../../content/services';
import { useAppStore } from '../../store/useAppStore';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './ServicesSection.module.css';

// Phase 1: plain glass-flavored DOM cards, one per service, no WebGL yet.
// Each becomes its own mini 3D scene in Phase 3.
export function ServicesSection() {
  const locale = useAppStore((s) => s.locale);
  const t = sections[locale].services;

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} align="center" />

        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.slug} className={styles.card}>
              <h3 className={styles.cardTitle}>{s.title[locale]}</h3>
              <p className={styles.cardDesc}>{s.description[locale]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
