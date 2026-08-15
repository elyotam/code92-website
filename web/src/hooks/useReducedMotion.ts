import { useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';

/** Syncs prefers-reduced-motion into the shared store, live (listens for OS/browser changes mid-session). */
export function useReducedMotion() {
  const reducedMotion = useAppStore((s) => s.reducedMotion);
  const setReducedMotion = useAppStore((s) => s.setReducedMotion);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [setReducedMotion]);

  return reducedMotion;
}
