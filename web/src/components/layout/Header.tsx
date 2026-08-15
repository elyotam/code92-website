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
          <LangToggle />
          <WhatsAppButton />
          <a href="#contact" className={styles.cta}>
            {t.cta}
            <span className={styles.ctaArrow}>&rarr;</span>
          </a>
        </div>
      </div>
    </header>
  );
}
