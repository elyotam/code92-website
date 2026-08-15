import { contact } from '../../content/contact';
import { sections } from '../../content/sections';
import { useAppStore } from '../../store/useAppStore';
import { Reveal } from '../motion/Reveal';
import styles from './Footer.module.css';

export function Footer() {
  const locale = useAppStore((s) => s.locale);
  const t = sections[locale].footer;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <Reveal variant="clip">
          <h2 className={styles.statement}>{t.statement}</h2>
        </Reveal>

        <div className={styles.row}>
          <div className={styles.logo}>
            CODE<span className={styles.logoMark}>92</span>
          </div>

          <div className={styles.contactBlock}>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
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
