import { hero } from '../../content/hero';
import { useAppStore } from '../../store/useAppStore';
import styles from './HeroSection.module.css';

// Phase 1: static DOM placeholder only. The cinematic particle/scroll scene
// (heroDriver.ts, HeroScene.tsx) replaces this canvas-less version in Phase 2.
export function HeroSection() {
  const locale = useAppStore((s) => s.locale);
  const t = hero[locale];

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <span className={styles.badge}>
          <span className={styles.badgeDot} />
          {t.badge}
        </span>

        <h1 className={styles.title}>
          {t.titleLine1}
          <br />
          <span className={styles.titleAccent}>{t.titleLine2}</span>
        </h1>

        <p className={styles.subline}>{t.subline}</p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.ctaPrimary}>
            {t.ctaPrimary}
          </a>
          <a href="#services" className={styles.ctaSecondary}>
            {t.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
