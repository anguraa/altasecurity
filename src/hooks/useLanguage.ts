import { useState, useEffect } from 'react';
import { Language, getTranslation, Translation } from '../config/translations';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Get saved language from localStorage or default to Georgian
    const saved = localStorage.getItem('alta-security-language') as Language;
    return saved && ['ka', 'en', 'ru'].includes(saved) ? saved : 'ka';
  });

  const [translation, setTranslation] = useState<Translation>(() => 
    getTranslation(currentLanguage)
  );

  useEffect(() => {
    // Update translation when language changes
    setTranslation(getTranslation(currentLanguage));
    // Save to localStorage
    localStorage.setItem('alta-security-language', currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  return {
    currentLanguage,
    translation,
    changeLanguage
  };
};