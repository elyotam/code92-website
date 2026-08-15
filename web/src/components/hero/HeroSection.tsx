import { hero } from '../../content/hero';
import { useAppStore } from '../../store/useAppStore';
import { Reveal } from '../motion/Reveal';
import styles from './HeroSection.module.css';

// Structural foundation only. This is a normal viewport-height section with
// the new editorial typography and a marked mount point for the real
// "construction engine" WebGL scene — that scene, the scroll choreography,
// and the final headline treatment are next phase's work, not this one.
export function HeroSection() {
  const locale = useAppStore((s) => s.locale);
  const t = hero[locale];

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.canvasMount} data-hero-canvas-mount aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Reveal variant="panel" className={styles.badgeSlot}>
          <span className="eyebrow">{t.badge}</span>
        </Reveal>

        <Reveal variant="clip" delay={0.1} className={styles.titleSlot}>
          <h1 className={styles.title}>
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h1>
        </Reveal>

        <Reveal variant="panel" delay={0.3} className={styles.sublineSlot}>
          <p className={styles.subline}>{t.subline}</p>
        </Reveal>

        <Reveal variant="panel" delay={0.4} className={styles.actionsSlot}>
          <div className={styles.actions}>
            <a href="#contact" className={styles.ctaPrimary}>
              {t.ctaPrimary}
            </a>
            <a href="#services" className={styles.ctaSecondary}>
              {t.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
