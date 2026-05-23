import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('lang');
      if (savedLang === 'en' || savedLang === 'fr') {
        setCurrentLang(savedLang);
      }
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let value = translations[currentLang];
      for (const k of keys) {
        if (value == null) return key;
        value = value[k];
      }
      return value ?? key;
    },
    [currentLang]
  );

  const toggleLang = useCallback(() => {
    setCurrentLang((prev) => {
      const next = prev === 'en' ? 'fr' : 'en';
      try {
        localStorage.setItem('lang', next);
      } catch {
        /* noop */
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ t, currentLang, toggleLang }),
    [t, currentLang, toggleLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
