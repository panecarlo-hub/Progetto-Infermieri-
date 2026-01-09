'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale } from '@/types';
import { getTranslation } from '@/data/translations';
interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('it');
  useEffect(() => {
    const savedLocale = localStorage.getItem('medlinker-locale') as Locale;
    if (savedLocale && (savedLocale === 'it' || savedLocale === 'es')) {
      setLocale(savedLocale);
    }
  }, []);
  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('medlinker-locale', newLocale);
  };
  const t = (key: string): string => {
    return getTranslation(locale, key);
  };
  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}