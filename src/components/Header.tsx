"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Always call useLanguage to maintain hook order
  let t: (key: string) => string;
  try {
    const languageContext = useLanguage();
    t = languageContext.t;
  } catch (error) {
    // Fallback function if context is not available
    t = (key: string) => {
      const fallbacks: { [key: string]: string } = {
        'navigation.home': 'Home',
        'navigation.findMentor': 'Find Mentor',
        'navigation.becomeMentor': 'Become Mentor',
        'navigation.plans': 'Plans',
        'navigation.about': 'About',
        'navigation.support': 'Support',
        'navigation.login': 'Login',
        'navigation.register': 'Register'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">MyLearnia</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              {t('navigation.home')}
            </Link>
            <Link href="/find-a-mentor" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              {t('navigation.findMentor')}
            </Link>
            <Link href="/become-a-mentor" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              {t('navigation.becomeMentor')}
            </Link>
            <Link href="/plans-and-pricing" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              {t('navigation.plans')}
            </Link>
            <Link href="/about/about-us" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              {t('navigation.about')}
            </Link>
            <Link href="/support/contact" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              {t('navigation.support')}
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {isClient && <LanguageToggle />}
            <Link href="/auth/login" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              {t('navigation.login')}
            </Link>
            <Link href="/auth/register" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              {t('navigation.register')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 