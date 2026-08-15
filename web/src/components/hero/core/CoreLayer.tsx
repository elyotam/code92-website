import type { CoreLayer as CoreLayerType } from './coreLayers';
import styles from './CoreLayer.module.css';

export function CoreLayer({ layer }: { layer: CoreLayerType }) {
  const { Icon, label, accent } = layer;
  return (
    <div className={styles.panel} data-accent={accent} aria-hidden="true">
      <Icon className={styles.icon} />
      <div className={styles.labelRow}>
        <span className={styles.tick} />
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}
