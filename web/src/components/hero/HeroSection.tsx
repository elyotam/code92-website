import { useCallback, useEffect, useRef, useState } from 'react';
import { hero } from '../../content/hero';
import { useAppStore } from '../../store/useAppStore';
import { useIsMobileViewport } from '../../hooks/useIsMobileViewport';
import { usePointer } from '../../hooks/usePointer';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { band } from '../../utils/band';
import { HeroScene, type HeroSceneHandle } from './HeroScene';
import { HeroMobile } from './HeroMobile';
import styles from './HeroSection.module.css';

const REST_PROGRESS = 0.5; // reduced-motion: show the fully-aligned "constructed" state, not the raw fan

export function HeroSection() {
  const locale = useAppStore((s) => s.locale);
  const reducedMotion = useAppStore((s) => s.reducedMotion);
  const isMobile = useIsMobileViewport();
  const t = hero[locale];

  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HeroSceneHandle>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const pointerRef = usePointer();
  const [pinReady, setPinReady] = useState(false);

  const applyProgress = useCallback((p: number) => {
    sceneRef.current?.setProgress(p);

    // Headline is fully visible from the very first frame (p=0) — there is
    // no scroll-tied entrance to wait for, the opening frame must already
    // look complete. It only leaves together with the construction object
    // at the very end, no separate fade timeline to drift out of sync.
    const exit = band(p, 0.82, 0.98);
    if (headlineRef.current) {
      headlineRef.current.style.opacity = String(1 - exit);
      headlineRef.current.style.transform = `translateY(${-exit * 22}px)`;
    }

    if (ambientRef.current) {
      ambientRef.current.style.opacity = String(0.85 * (1 - exit * 0.7));
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      setPinReady(false);
      return;
    }
    if (reducedMotion) {
      setPinReady(false);
      applyProgress(REST_PROGRESS);
      return;
    }
    setPinReady(true);
    applyProgress(0);
  }, [isMobile, reducedMotion, applyProgress]);

  useScrollProgress(wrapperRef.current, pinRef.current, applyProgress, pinReady);

  if (isMobile) {
    return <HeroMobile />;
  }

  return (
    <div id="top" ref={wrapperRef} className={reducedMotion ? styles.staticWrapper : styles.scrollWrapper}>
      <div ref={pinRef} className={styles.pin}>
        <div className={styles.grid} aria-hidden="true" />
        <div ref={ambientRef} className={styles.ambient} aria-hidden="true" />

        <HeroScene ref={sceneRef} pointerRef={pointerRef} parallaxEnabled={!reducedMotion} />

        <div ref={headlineRef} className={styles.headline} style={reducedMotion ? { opacity: 1 } : undefined}>
          <div className="container">
            <div className={styles.headlineInner}>
              <span className="eyebrow">{t.badge}</span>
              <h1 className={styles.title}>
                {t.titleLine1}
                <br />
                <span className={styles.titleAccent}>{t.titleLine2}</span>
              </h1>
              <p className={styles.subline}>{t.subline}</p>
              <div className={styles.actions}>
                <a href="#contact" className={styles.ctaPrimary}>
                  <span>{t.ctaPrimary}</span>
                  <svg viewBox="0 0 24 24" className={styles.ctaIcon} aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#work" className={styles.ctaSecondary}>
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
