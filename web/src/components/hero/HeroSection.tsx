import { useCallback, useEffect, useRef, useState } from 'react';
import { usePointer } from '../../hooks/usePointer';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useAppStore } from '../../store/useAppStore';
import { HeroCanvas } from './HeroCanvas';
import { HeroCopyOverlay } from './HeroCopyOverlay';
import { HeroFallbackStatic } from './HeroFallbackStatic';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const webglSupported = useAppStore((s) => s.webglSupported);
  const reducedMotion = useAppStore((s) => s.reducedMotion);
  // Structural fallback: while webglSupported is still being probed (null),
  // render the static version rather than flashing the 3D one in.
  const canUse3D = webglSupported === true && !reducedMotion;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const pointerRef = usePointer();
  const [revealed, setRevealed] = useState(false);
  const [pinReady, setPinReady] = useState(false);

  const handleUpdate = useCallback((p: number) => {
    progressRef.current = p;
  }, []);

  useEffect(() => {
    if (canUse3D) setPinReady(true);
  }, [canUse3D]);

  useScrollProgress(wrapperRef.current, pinRef.current, handleUpdate, canUse3D && pinReady);

  useEffect(() => {
    if (!canUse3D) return;
    const timer = setTimeout(() => setRevealed(true), 400);
    return () => clearTimeout(timer);
  }, [canUse3D]);

  if (webglSupported === null || !canUse3D) {
    return <HeroFallbackStatic />;
  }

  return (
    <div id="top" ref={wrapperRef} className={styles.scrollWrapper}>
      <div ref={pinRef} className={styles.pin}>
        <HeroCanvas progressRef={progressRef} pointerRef={pointerRef} />
        <HeroCopyOverlay revealed={revealed} />
      </div>
    </div>
  );
}
