import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppStore } from '../../store/useAppStore';

gsap.registerPlugin(ScrollTrigger);

type RevealVariant = 'panel' | 'clip';

/**
 * The one reusable reveal primitive for the whole site — deliberately not
 * a plain fade. 'clip' wipes content into view via clip-path (reads as
 * "being constructed"), 'panel' is a subtler settle-into-place for dense
 * repeated content (lists, secondary copy). Both no-op to their final
 * state instantly under reduced-motion, not a slower simulation of motion.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'panel',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useAppStore((s) => s.reducedMotion);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(el, { clearProps: 'all' });
      return;
    }

    const ctx = gsap.context(() => {
      const scrollTrigger = { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' as const };

      if (variant === 'clip') {
        gsap.fromTo(
          el,
          { clipPath: 'inset(0 0 100% 0)' },
          { clipPath: 'inset(0 0 0% 0)', duration: 1.1, delay, ease: 'power4.out', scrollTrigger }
        );
      } else {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, delay, ease: 'power3.out', scrollTrigger }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [reducedMotion, delay, variant]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
