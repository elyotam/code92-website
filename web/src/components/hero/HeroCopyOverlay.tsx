import { hero } from '../../content/hero';
import { useAppStore } from '../../store/useAppStore';
import { GlassCard } from '../ui/GlassCard';
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
            <GlassCard as="a" href="#contact" variant="button">
              {t.ctaPrimary}
            </GlassCard>
            <GlassCard as="a" href="#services" variant="button" className={styles.ctaSecondary}>
              {t.ctaSecondary}
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
