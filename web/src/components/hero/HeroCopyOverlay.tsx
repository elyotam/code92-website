import { hero } from '../../content/hero';
import { useAppStore } from '../../store/useAppStore';
import styles from './HeroCopyOverlay.module.css';

export function HeroCopyOverlay({ revealed }: { revealed: boolean }) {
  const locale = useAppStore((s) => s.locale);
  const t = hero[locale];

  return (
    <div className={`${styles.overlay} ${revealed ? styles.revealed : ''}`}>
      <div className="container">
        <div className={styles.inner}>
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
      </div>
    </div>
  );
}
