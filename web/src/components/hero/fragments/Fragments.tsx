import styles from './Fragments.module.css';

// Six decorative interface fragments — real filled/shadowed surfaces, not
// wireframe outlines. Each stands in for one thing CODE92 builds; content
// inside is generic UI (bars, blocks, nodes), not literal fabricated copy.

export function BrowserFragment() {
  return (
    <div className={`${styles.surface} ${styles.browser}`} aria-hidden="true">
      <div className={styles.chromeBar}>
        <span className={styles.chromeDot} />
        <span className={styles.chromeDot} />
        <span className={styles.chromeDot} />
        <span className={styles.chromeBarLine} />
      </div>
      <div className={styles.browserBody}>
        <div className={styles.navRow}>
          <span className={styles.pill} />
          <span className={styles.pill} />
          <span className={styles.pill} />
        </div>
        <div className={styles.heroBlock} />
        <span className={styles.textBar} />
        <span className={`${styles.textBar} ${styles.short}`} />
      </div>
    </div>
  );
}

export function MobileFragment() {
  return (
    <div className={`${styles.surface} ${styles.mobile}`} aria-hidden="true">
      <span className={styles.statusBar} />
      {[0, 1, 2].map((i) => (
        <div key={i} className={styles.appRow}>
          <span className={styles.appIcon} />
          <div className={styles.appLines}>
            <span className={styles.appLine} />
            <span className={`${styles.appLine} ${styles.short}`} />
          </div>
        </div>
      ))}
      <div className={styles.navDotsRow}>
        <span className={`${styles.navDot} ${styles.active}`} />
        <span className={styles.navDot} />
        <span className={styles.navDot} />
        <span className={styles.navDot} />
      </div>
    </div>
  );
}

export function CommerceFragment() {
  return (
    <div className={`${styles.surface} ${styles.commerce}`} aria-hidden="true">
      <div className={styles.productImage} />
      <span className={styles.commerceTitle} />
      <span className={styles.textBar} style={{ height: 7, width: '40%' }} />
      <div className={styles.addButton} />
    </div>
  );
}

export function DataFragment() {
  return (
    <div className={`${styles.surface} ${styles.data}`} aria-hidden="true">
      <span className={styles.dataTitle} />
      <div className={styles.barChart}>
        {[38, 62, 45, 80, 55, 70].map((h, i) => (
          <span key={i} className={styles.bar} style={{ height: `${h}%` }} />
        ))}
      </div>
      {[0, 1, 2].map((i) => (
        <div key={i} className={styles.dataRow}>
          <span className={styles.dataDot} />
          <span className={styles.dataLine} />
        </div>
      ))}
    </div>
  );
}

export function AutomationFragment() {
  return (
    <div className={`${styles.surface} ${styles.automation}`} aria-hidden="true">
      <div className={styles.flowRow}>
        <span className={styles.flowNode}>IN</span>
        <span className={styles.flowLine} />
        <span className={`${styles.flowNode} ${styles.accent}`}>AI</span>
        <span className={styles.flowLine} />
        <span className={styles.flowNode}>OUT</span>
      </div>
      <div className={styles.automationLabel}>automation · active</div>
    </div>
  );
}

export function TypeAccentFragment({ glyph = '92' }: { glyph?: string }) {
  return (
    <div className={styles.typeAccent} aria-hidden="true">
      {glyph}
    </div>
  );
}
