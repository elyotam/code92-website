import { Reveal } from '../motion/Reveal';
import styles from './SectionHeading.module.css';

export function SectionHeading({
  eyebrow,
  title,
  align = 'start',
}: {
  eyebrow?: string;
  title: string;
  align?: 'start' | 'center';
}) {
  return (
    <div className={`${styles.heading} ${align === 'center' ? styles.center : ''}`}>
      {eyebrow && (
        <Reveal variant="panel">
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal variant="clip" delay={0.08}>
        <h2 className={styles.title}>{title}</h2>
      </Reveal>
    </div>
  );
}
