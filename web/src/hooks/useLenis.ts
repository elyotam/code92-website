import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useAppStore } from '../store/useAppStore';

gsap.registerPlugin(ScrollTrigger);

/**
 * Smooth-scroll foundation for the whole site, wired into GSAP's ticker so
 * every ScrollTrigger-driven animation reads Lenis's scroll position
 * instead of the raw (unsmoothed) native scroll. Skipped entirely under
 * reduced-motion — plain native scroll, not a "lighter" simulation of one.
 */
export function useLenis() {
  const reducedMotion = useAppStore((s) => s.reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    // gsap.ticker's `time` is in seconds; Lenis expects milliseconds
    // (performance.now()-style). Without the *1000 conversion, Lenis's
    // internal clock runs ~1000x too slow and scroll barely moves.
    function raf(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [reducedMotion]);
}
