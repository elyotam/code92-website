import { projects } from '../../content/projects';
import { sections } from '../../content/sections';
import { useAppStore } from '../../store/useAppStore';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './ProjectsSection.module.css';

// Phase 1-4: static placeholder cards, clearly labeled. Phase 5 replaces
// these with glass device frames + looping video, still placeholder
// content until real client footage is supplied — see content/projects.ts.
export function ProjectsSection() {
  const locale = useAppStore((s) => s.locale);
  const t = sections[locale].projects;

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} align="center" />
        <p className={styles.note}>{t.placeholderNote}</p>

        <div className={styles.grid}>
          {projects.map((p) => (
            <GlassCard key={p.slug} variant="card" className={styles.card}>
              <div className={styles.frame} aria-hidden="true" />
              <span className={styles.tag}>{p.tag[locale]}</span>
              <h3 className={styles.title}>{p.title[locale]}</h3>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
