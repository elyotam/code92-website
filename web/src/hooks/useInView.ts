import { useEffect, useState, type RefObject } from 'react';

/** Mounts (and keeps mounted) a section's canvas once it's scrolled near view — cheap to check, not re-triggered per scroll pixel. */
export function useInView(ref: RefObject<Element>, rootMargin = '200px') {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return inView;
}
