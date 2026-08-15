import { otherLocale } from '../../content/i18n';
import { useLocale } from '../../hooks/useLocale';
import styles from './LangToggle.module.css';

export function LangToggle() {
  const { locale, setLocale } = useLocale();
  const next = otherLocale(locale);

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setLocale(next)}
      aria-label={next === 'en' ? 'Switch to English' : 'עבור לעברית'}
    >
      {next === 'en' ? 'EN' : 'עב'}
    </button>
  );
}
