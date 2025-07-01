"use client";
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Always call useLanguage to maintain hook order
  let language: 'en' | 'fr';
  let setLanguage: (lang: 'en' | 'fr') => void;
  
  try {
    const languageContext = useLanguage();
    language = languageContext.language;
    setLanguage = languageContext.setLanguage;
  } catch (error) {
    // Fallback values if context is not available
    language = 'en';
    setLanguage = () => {}; // No-op function
  }

  const handleLanguageChange = (newLanguage: 'en' | 'fr') => {
    if (isClient) {
      setLanguage(newLanguage);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('fr')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'fr'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageToggle; 