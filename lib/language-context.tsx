'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { DEFAULT_LANGUAGE } from '@/lib/constants';
import { getTranslations, type Translations, type Language } from '@/lib/translations';

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: DEFAULT_LANGUAGE as Language,
  t: getTranslations(DEFAULT_LANGUAGE),
  setLang: () => {},
});

export function LanguageProvider({ children, defaultLang }: { children: ReactNode, defaultLang?: Language }) {
  const [lang, setLang] = useState<Language>(defaultLang || DEFAULT_LANGUAGE as Language);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get('lang');
    if (paramLang === 'vi' || paramLang === 'en') {
      setLang(paramLang);
    } else if (defaultLang) {
      // If a specific default is provided for this route but no param exists, stick to it
      setLang(defaultLang);
    }
  }, [defaultLang]);

  const t = getTranslations(lang);

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
