import { useEffect } from 'react';
import { dir } from '../content/i18n';
import { useAppStore } from '../store/useAppStore';

/** Reads/writes the shared locale and keeps <html lang/dir> in sync. */
export function useLocale() {
  const locale = useAppStore((s) => s.locale);
  const setLocale = useAppStore((s) => s.setLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir[locale];
  }, [locale]);

  return { locale, setLocale };
}
