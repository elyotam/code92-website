import { forwardRef, useEffect, useImperativeHandle, useRef, type MutableRefObject } from 'react';
import { fragments } from './fragmentConfig';
import { band, lerp } from '../../utils/band';
import styles from './HeroScene.module.css';

export type HeroSceneHandle = { setProgress: (p: number) => void };

const ASSEMBLY_START = 0.16;
const ASSEMBLY_SPAN = 0.42; // each fragment's own sub-band fits inside [start, start+span], offset by staggerOffset
const EXIT_START = 0.82;
const EXIT_END = 1;

/**
 * The fragment "stage" — a CSS 3D space (perspective + preserve-3d), not
 * WebGL. Real DOM gives crisp typography and genuine backdrop-blur glass,
 * which reads far more "designed" than trying to fake UI detail inside a
 * WebGL texture. Scroll choreography is applied imperatively (setProgress,
 * called from the pinned ScrollTrigger in HeroSection) directly as inline
 * transforms — cheap, and avoids a GSAP timeline fighting hand-authored
 * per-fragment stagger math. Pointer parallax runs as a separate rAF loop
 * on a nested wrapper per fragment, composing additively with the
 * scroll-driven transform instead of fighting it.
 */
export const HeroScene = forwardRef<
  HeroSceneHandle,
  { pointerRef: MutableRefObject<{ x: number; y: number }>; parallaxEnabled?: boolean }
>(function HeroScene({ pointerRef, parallaxEnabled = true }, ref) {
    const orbitRefs = useRef<(HTMLDivElement | null)[]>([]);
    const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);
    const dampedPointer = useRef({ x: 0, y: 0 });
    const rafId = useRef<number | null>(null);

    useImperativeHandle(ref, () => ({
      setProgress(p: number) {
        fragments.forEach((f, i) => {
          const el = orbitRefs.current[i];
          if (!el) return;

          const start = ASSEMBLY_START + f.staggerOffset;
          const buildT = band(p, start, start + ASSEMBLY_SPAN);
          const exitT = band(p, EXIT_START, EXIT_END);

          const x = lerp(f.scattered.x, f.assembled.x, buildT);
          const y = lerp(f.scattered.y, f.assembled.y, buildT) - exitT * 60;
          const z = lerp(f.scattered.z, f.assembled.z, buildT) - exitT * 220;
          const rotateX = lerp(f.scattered.rotateX, f.assembled.rotateX, buildT);
          const rotateY = lerp(f.scattered.rotateY, f.assembled.rotateY, buildT);
          const rotateZ = lerp(f.scattered.rotateZ, f.assembled.rotateZ, buildT);
          const scale = lerp(f.scattered.scale, f.assembled.scale, buildT) * (1 + exitT * 0.3);
          const opacity = lerp(f.scattered.opacity, f.assembled.opacity, buildT) * (1 - exitT);
          const blur = lerp(f.scattered.blur, f.assembled.blur, buildT) + exitT * 14;

          el.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
          el.style.opacity = String(opacity);
          el.style.filter = blur > 0.05 ? `blur(${blur}px)` : 'none';
        });
      },
    }));

    useEffect(() => {
      if (!parallaxEnabled) return;
      function tick() {
        const p = pointerRef.current;
        const d = dampedPointer.current;
        d.x += (p.x - d.x) * 0.06;
        d.y += (p.y - d.y) * 0.06;

        fragments.forEach((f, i) => {
          const el = parallaxRefs.current[i];
          if (!el) return;
          // Deeper (more negative z) fragments drift less — classic
          // multi-layer parallax depth cue, not a per-card tilt.
          const depthFactor = 1 - Math.min(1, Math.max(0, (f.assembled.z + 100) / 300));
          const strength = 10 + depthFactor * 18;
          el.style.transform = `translate3d(${d.x * strength}px, ${d.y * strength * -1}px, 0)`;
        });

        rafId.current = requestAnimationFrame(tick);
      }
      rafId.current = requestAnimationFrame(tick);
      return () => {
        if (rafId.current) cancelAnimationFrame(rafId.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [parallaxEnabled]);

    return (
      <div className={styles.stage}>
        {fragments.map((f, i) => (
          <div
            key={f.id}
            ref={(el) => {
              orbitRefs.current[i] = el;
            }}
            className={styles.orbit}
          >
            <div
              ref={(el) => {
                parallaxRefs.current[i] = el;
              }}
              className={styles.parallax}
            >
              <f.Component />
            </div>
          </div>
        ))}
      </div>
    );
  }
);
