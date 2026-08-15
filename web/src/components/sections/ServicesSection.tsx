import { sections } from '../../content/sections';
import { services } from '../../content/services';
import { useAppStore } from '../../store/useAppStore';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceShowcase } from './ServiceShowcase';
import styles from './ServicesSection.module.css';

export function ServicesSection() {
  const locale = useAppStore((s) => s.locale);
  const t = sections[locale].services;

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} align="center" />

        <div className={styles.grid}>
          {services.map((s) => (
            <ServiceShowcase key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
