import { useMemo } from 'react';
import { codeMotifWords } from '../../content/codeMotif';
import styles from './CodeStream.module.css';

// Ambient only — monospace columns cycling through real dev terms.
// Always LTR (code doesn't mirror, even on the Hebrew page), low opacity,
// ignored by assistive tech. CSS-only animation so it's automatically
// killed by the global prefers-reduced-motion reset.
function useColumnWords(seed: number, count: number) {
  return useMemo(() => {
    const words: string[] = [];
    for (let i = 0; i < count; i++) {
      words.push(codeMotifWords[(seed + i * 3) % codeMotifWords.length]);
    }
    return words;
  }, [seed, count]);
}

function Column({ seed, delay }: { seed: number; delay: number }) {
  const words = useColumnWords(seed, 14);
  return (
    <div className={styles.column} style={{ animationDelay: `${delay}s` }} dir="ltr">
      {[...words, ...words].map((w, i) => (
        <span key={i}>{w}</span>
      ))}
    </div>
  );
}

export function CodeStream({ columns = 4 }: { columns?: number }) {
  return (
    <div className={styles.stream} aria-hidden="true">
      {Array.from({ length: columns }, (_, i) => (
        <Column key={i} seed={i * 2} delay={i * -3.5} />
      ))}
    </div>
  );
}
