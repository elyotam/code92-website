import { useEffect, useState } from 'react';
import { nav } from '../../content/nav';
import { useAppStore } from '../../store/useAppStore';
import { LangToggle } from './LangToggle';
import { WhatsAppButton } from './WhatsAppButton';
import styles from './Header.module.css';

export function Header() {
  const locale = useAppStore((s) => s.locale);
  const t = nav[locale];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} aria-label="Code92">
          CODE<span className={styles.logoMark}>92</span>
        </a>

        <nav className={styles.nav} aria-label={t.services}>
          <a href="#services">{t.services}</a>
          <a href="#work">{t.work}</a>
          <a href="#contact">{t.contact}</a>
        </nav>

        <div className={styles.actions}>
          <div className={styles.iconGroup}>
            <LangToggle />
            <WhatsAppButton />
          </div>
          <a href="#contact" className={styles.cta}>
            <span>{t.cta}</span>
            <svg viewBox="0 0 24 24" className={styles.ctaArrow} aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
