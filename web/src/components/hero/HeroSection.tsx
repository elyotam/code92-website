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

    // Headline must be fully gone well before fragments finish assembling
    // into the same central screen zone — otherwise fading text visually
    // collides with an already-sharp fragment sitting right behind it.
    const headlineOpacity = band(p, 0, 0.12) * (1 - band(p, 0.28, 0.4));
    const headlineY = (1 - band(p, 0, 0.12)) * 24 - band(p, 0.28, 0.4) * 36;
    if (headlineRef.current) {
      headlineRef.current.style.opacity = String(headlineOpacity);
      headlineRef.current.style.transform = `translateY(${headlineY}px)`;
      headlineRef.current.style.pointerEvents = headlineOpacity > 0.4 ? 'auto' : 'none';
    }

    const ambient = (0.5 + band(p, 0, 0.4) * 0.5) * (1 - band(p, 0.82, 1) * 0.75);
    if (ambientRef.current) ambientRef.current.style.opacity = String(ambient);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setPinReady(false);
      return;
    }
    if (reducedMotion) {
      // Structural fallback: show the fully-assembled composition once,
      // statically — no pin, no parallax loop, no scroll-hijack. Must
      // explicitly un-arm the pin too: reducedMotion reads false on the
      // very first render (its own probe effect hasn't run yet), so an
      // earlier pass here may have already set pinReady(true) before we
      // learn the real value — leaving it true would let useScrollProgress
      // create a pin anyway once this effect re-runs.
      setPinReady(false);
      applyProgress(0.55);
      return;
    }
    setPinReady(true);
  }, [isMobile, reducedMotion, applyProgress]);

  useScrollProgress(wrapperRef.current, pinRef.current, applyProgress, pinReady);

  if (isMobile) {
    return <HeroMobile />;
  }

  return (
    <div id="top" ref={wrapperRef} className={reducedMotion ? styles.staticWrapper : styles.scrollWrapper}>
      <div ref={pinRef} className={styles.pin}>
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
                  {t.ctaPrimary}
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
