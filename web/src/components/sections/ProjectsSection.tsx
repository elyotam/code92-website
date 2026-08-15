import { projects } from '../../content/projects';
import { sections } from '../../content/sections';
import { useAppStore } from '../../store/useAppStore';
import { ProjectDeviceFrame } from './ProjectDeviceFrame';
import { ProjectsAmbientBackground } from './ProjectsAmbientBackground';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './ProjectsSection.module.css';

// PLACEHOLDER content only (see content/projects.ts) — no real client
// footage exists yet. ProjectDeviceFrame shows an honestly-labeled
// placeholder screen instead of implying real client work.
export function ProjectsSection() {
  const locale = useAppStore((s) => s.locale);
  const t = sections[locale].projects;

  return (
    <section id="work" className={styles.section}>
      <ProjectsAmbientBackground />
      <div className={`container ${styles.content}`}>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} align="center" />
        <p className={styles.note}>{t.placeholderNote}</p>

        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectDeviceFrame key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
