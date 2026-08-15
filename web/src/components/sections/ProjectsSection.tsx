import { sections } from '../../content/sections';
import { useAppStore } from '../../store/useAppStore';
import { Reveal } from '../motion/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './ProjectsSection.module.css';

// Structural stub — the real device-frame/project showcase concept is
// future work, once it fits the new art direction. content/projects.ts
// still holds the placeholder-labeled entries for later.
export function ProjectsSection() {
  const locale = useAppStore((s) => s.locale);
  const t = sections[locale].projects;

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />
        <Reveal variant="panel" delay={0.15}>
          <p className={styles.note}>{t.placeholderNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
