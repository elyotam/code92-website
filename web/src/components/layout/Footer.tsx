import { contact } from '../../content/contact';
import { sections } from '../../content/sections';
import { useAppStore } from '../../store/useAppStore';
import styles from './Footer.module.css';

export function Footer() {
  const locale = useAppStore((s) => s.locale);
  const t = sections[locale].footer;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <div className={styles.logo}>
            CODE<span className={styles.logoAccent}>92</span>
          </div>
          <p className={styles.blurb}>{t.blurb}</p>
        </div>

        <div className={styles.contactBlock}>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          © {new Date().getFullYear()} Code92. {t.rights}
        </div>
      </div>
    </footer>
  );
}
