import { hero } from '../../content/hero';
import { useAppStore } from '../../store/useAppStore';
import { Reveal } from '../motion/Reveal';
import { coreLayers } from './core/coreLayers';
import { CoreLayer } from './core/CoreLayer';
import styles from './HeroMobile.module.css';

// Same "Construction Core" concept, a dedicated composition — not the
// desktop scene scaled down. Three of the five layers, arranged as a
// small static fan, revealed once via the shared Reveal primitive
// (natural, non-pinned entrance). No continuous rAF loop on mobile.
const MOBILE_LAYERS = [coreLayers[0], coreLayers[2], coreLayers[4]];
const FAN_ROTATE = [-16, 0, 16];

export function HeroMobile() {
  const locale = useAppStore((s) => s.locale);
  const t = hero[locale];

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.ambient} aria-hidden="true" />

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
      </div>

      <div className={styles.fan}>
        {MOBILE_LAYERS.map((layer, i) => (
          <Reveal
            key={layer.id}
            variant="panel"
            delay={0.35 + i * 0.1}
            className={styles.fanSlot}
          >
            <div className={styles.fanCard} style={{ rotate: `${FAN_ROTATE[i]}deg` }}>
              <CoreLayer layer={layer} />
            </div>
          </Reveal>
        ))}
      </div>

      <div className="container">
        <Reveal variant="panel" delay={0.6}>
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
