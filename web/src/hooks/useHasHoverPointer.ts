import { useEffect, useState } from 'react';

/** True only for real mouse/trackpad input — tilt is meaningless (and often accidental) on touch. */
export function useHasHoverPointer() {
  const [hasHover, setHasHover] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
    setHasHover(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setHasHover(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return hasHover;
}
