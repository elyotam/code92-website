import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Pins `pinEl` while `triggerEl` scrolls through, calling `onUpdate(progress)`
 * every tick. `onUpdate` should write into a ref, not React state, to avoid
 * a re-render per scroll tick.
 */
export function useScrollProgress(
  triggerEl: HTMLElement | null,
  pinEl: HTMLElement | null,
  onUpdate: (progress: number) => void,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled || !triggerEl || !pinEl) return;

    const st = ScrollTrigger.create({
      trigger: triggerEl,
      pin: pinEl,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
      onUpdate: (self) => onUpdate(self.progress),
    });

    return () => st.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, triggerEl, pinEl]);
}
