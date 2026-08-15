import { create } from 'zustand';
import { defaultLocale, type Locale } from '../content/i18n';

type AppState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  reducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
  webglSupported: boolean | null;
  setWebglSupported: (value: boolean) => void;
};

export const useAppStore = create<AppState>((set) => ({
  locale: defaultLocale,
  setLocale: (locale) => set({ locale }),
  reducedMotion: false,
  setReducedMotion: (value) => set({ reducedMotion: value }),
  webglSupported: null,
  setWebglSupported: (value) => set({ webglSupported: value }),
}));
