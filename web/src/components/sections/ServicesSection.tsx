import { services } from '../../content/services';
import { sections } from '../../content/sections';
import { useAppStore } from '../../store/useAppStore';
import { Reveal } from '../motion/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './ServicesSection.module.css';

// Structural stub — a clean typographic manifest, not the final visual
// treatment (that's a later phase, once the Hero's art direction is
// locked). Deliberately not a card grid: the old service-card visuals
// were explicitly rejected, so this doesn't reach for a new card either
// until there's a real concept behind it.
export function ServicesSection() {
  const locale = useAppStore((s) => s.locale);
  const t = sections[locale].services;

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <ol className={styles.list}>
          {services.map((s, i) => (
            <Reveal key={s.slug} variant="panel" delay={i * 0.05}>
              <li className={styles.row}>
                <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.rowTitle}>{s.title[locale]}</h3>
                <p className={styles.rowDesc}>{s.description[locale]}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
