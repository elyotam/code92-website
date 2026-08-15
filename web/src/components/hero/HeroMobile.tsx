import { hero } from '../../content/hero';
import { useAppStore } from '../../store/useAppStore';
import { Reveal } from '../motion/Reveal';
import { BrowserFragment, AutomationFragment } from './fragments/Fragments';
import styles from './HeroMobile.module.css';

// Dedicated mobile composition — not the desktop scene at a smaller
// width. Two fragments, a simple natural (non-pinned) entrance via the
// shared Reveal primitive, and a light CSS-only float once settled. No
// continuous rAF parallax loop and no scroll-hijacking on touch devices.
export function HeroMobile() {
  const locale = useAppStore((s) => s.locale);
  const t = hero[locale];

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.ambient} aria-hidden="true" />

      <div className={styles.cluster}>
        <Reveal variant="panel" delay={0.1} className={`${styles.piece} ${styles.pieceBack}`}>
          <AutomationFragment />
        </Reveal>
        <Reveal variant="panel" delay={0.2} className={`${styles.piece} ${styles.pieceFront}`}>
          <BrowserFragment />
        </Reveal>
      </div>

      <div className="container">
        <Reveal variant="panel">
          <span className="eyebrow">{t.badge}</span>
        </Reveal>
        <Reveal variant="clip" delay={0.1}>
          <h1 className={styles.title}>
            {t.titleLine1}
            <br />
            <span className={styles.titleAccent}>{t.titleLine2}</span>
          </h1>
        </Reveal>
        <Reveal variant="panel" delay={0.25}>
          <p className={styles.subline}>{t.subline}</p>
        </Reveal>
        <Reveal variant="panel" delay={0.35}>
          <div className={styles.actions}>
            <a href="#contact" className={styles.ctaPrimary}>
              {t.ctaPrimary}
            </a>
            <a href="#work" className={styles.ctaSecondary}>
              {t.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
