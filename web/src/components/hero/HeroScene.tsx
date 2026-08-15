import { forwardRef, useEffect, useImperativeHandle, useRef, type MutableRefObject } from 'react';
import { coreLayers } from './core/coreLayers';
import { CoreLayer } from './core/CoreLayer';
import { band, lerp } from '../../utils/band';
import styles from './HeroScene.module.css';

export type HeroSceneHandle = { setProgress: (p: number) => void };

const ASSEMBLY_START = 0.08;
const ASSEMBLY_SPAN = 0.34;
const STAGGER_STEP = 0.025;
const EXIT_START = 0.8;

// Five identical panels, one shared pivot (bottom-center). At rest (p=0)
// they're already a dramatic, sharp, fully-formed fan — no empty opening
// frame, no waiting for scroll to see something. As the user scrolls the
// fan's rotation CLOSES while a Z/Y cascade OPENS, so it reads as
// reorganizing into a structured stack, not just collapsing flat. Exit
// is one rigid transform on the whole group (scale + push + fade) so all
// five layers leave together, not five independently-timed fades.
const FAN_ROTATE = [-24, -12, 0, 12, 24];
const FAN_Z = [20, 12, 6, 12, 20];
const ALIGN_Y = [22, 6, -8, -22, -38];
const ALIGN_Z = [30, 0, -30, -60, -90];
const ALIGN_X = [-8, -3, 0, 3, 8];

export const HeroScene = forwardRef<
  HeroSceneHandle,
  { pointerRef: MutableRefObject<{ x: number; y: number }>; parallaxEnabled?: boolean }
>(function HeroScene({ pointerRef, parallaxEnabled = true }, ref) {
  const scrollGroupRef = useRef<HTMLDivElement>(null);
  const pointerGroupRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sweepRef = useRef<HTMLDivElement>(null);
  const dampedPointer = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useImperativeHandle(ref, () => ({
    setProgress(p: number) {
      coreLayers.forEach((_, i) => {
        const el = layerRefs.current[i];
        if (!el) return;
        const start = ASSEMBLY_START + i * STAGGER_STEP;
        const t = band(p, start, start + ASSEMBLY_SPAN);

        const rotateZ = lerp(FAN_ROTATE[i], 0, t);
        const z = lerp(FAN_Z[i], ALIGN_Z[i], t);
        const y = lerp(0, ALIGN_Y[i], t);
        const x = lerp(0, ALIGN_X[i], t);

        el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${rotateZ}deg)`;
      });

      const exitT = band(p, EXIT_START, 1);
      if (scrollGroupRef.current) {
        const scale = lerp(1, 1.55, exitT);
        const tz = lerp(0, 260, exitT);
        scrollGroupRef.current.style.transform = `translateZ(${tz}px) scale(${scale})`;
        scrollGroupRef.current.style.opacity = String(1 - exitT);
      }
      if (sweepRef.current) {
        const sweepT = band(p, 0.86, 0.98);
        sweepRef.current.style.opacity = String(Math.sin(sweepT * Math.PI));
      }
    },
  }));

  useEffect(() => {
    if (!parallaxEnabled) return;
    function tick() {
      const p = pointerRef.current;
      const d = dampedPointer.current;
      d.x += (p.x - d.x) * 0.05;
      d.y += (p.y - d.y) * 0.05;
      if (pointerGroupRef.current) {
        // The whole stack tilts as one rigid object — "holding it in your
        // hand," not five panels drifting independently.
        pointerGroupRef.current.style.transform = `rotateY(${d.x * 7}deg) rotateX(${d.y * -5}deg)`;
      }
      rafId.current = requestAnimationFrame(tick);
    }
    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [parallaxEnabled, pointerRef]);

  return (
    <div className={styles.stage}>
      <div ref={pointerGroupRef} className={styles.pointerGroup}>
        <div ref={scrollGroupRef} className={styles.scrollGroup}>
          {coreLayers.map((layer, i) => (
            <div
              key={layer.id}
              ref={(el) => {
                layerRefs.current[i] = el;
              }}
              className={styles.layer}
              style={{ zIndex: i }}
            >
              <CoreLayer layer={layer} />
            </div>
          ))}
        </div>
      </div>
      <div ref={sweepRef} className={styles.sweep} aria-hidden="true" />
    </div>
  );
});
