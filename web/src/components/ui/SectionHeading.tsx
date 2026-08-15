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
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
