import { CodeStream } from '../code-motif/CodeStream';
import { HeroCopyOverlay } from './HeroCopyOverlay';
import styles from './HeroFallbackStatic.module.css';

// Structural fallback for prefers-reduced-motion and no-WebGL: the 3D
// <Canvas> is never mounted at all (no GL context, no ScrollTrigger pin
// created anywhere) — just a static gradient composition and plain
// top-to-bottom scroll, content revealed immediately. CodeStream here is
// CSS-only, so it stays governed by the same reduced-motion CSS reset
// that already collapses page transitions/animations globally.
export function HeroFallbackStatic() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <CodeStream columns={3} />
      <HeroCopyOverlay revealed />
    </section>
  );
}
