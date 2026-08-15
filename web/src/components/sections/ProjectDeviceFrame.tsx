import type { Project } from '../../content/projects';
import { sections } from '../../content/sections';
import { useAppStore } from '../../store/useAppStore';
import { GlassCard } from '../ui/GlassCard';
import styles from './ProjectDeviceFrame.module.css';

export function ProjectDeviceFrame({ project }: { project: Project }) {
  const locale = useAppStore((s) => s.locale);
  const t = sections[locale].projects;

  return (
    <GlassCard variant="card" className={styles.card}>
      <div className={`${styles.device} ${styles[project.deviceType]}`}>
        {project.deviceType === 'browser' && (
          <div className={styles.chromeBar} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
        {project.deviceType === 'phone' && <div className={styles.notch} aria-hidden="true" />}

        <div className={styles.screen}>
          {project.videoSrc ? (
            <video src={project.videoSrc} muted loop autoPlay playsInline className={styles.video} />
          ) : (
            <div className={styles.placeholderScreen}>
              <span className={styles.placeholderBadge}>{t.placeholderBadge}</span>
              <div className={styles.placeholderSweep} aria-hidden="true" />
            </div>
          )}
        </div>
      </div>

      <span className={styles.tag}>{project.tag[locale]}</span>
      <h3 className={styles.title}>{project.title[locale]}</h3>
    </GlassCard>
  );
}
