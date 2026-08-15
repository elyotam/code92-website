import { HeroCopyOverlay } from './HeroCopyOverlay';
import styles from './HeroFallbackStatic.module.css';

// Structural fallback for prefers-reduced-motion and no-WebGL: the 3D
// <Canvas> is never mounted at all (no GL context, no ScrollTrigger pin
// created anywhere) — just a static gradient composition and plain
// top-to-bottom scroll, content revealed immediately.
export function HeroFallbackStatic() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <HeroCopyOverlay revealed />
    </section>
  );
}
