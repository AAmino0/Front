"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useEffect, useState } from "react";

const Hero = () => {
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
        'hero.title': 'Speak & Study Smart, ',
        'hero.titleHighlight': 'Not Hard!',
        'hero.titleEnd': '',
        'hero.subtitle': 'Master languages and ace school subjects with expert mentors in real-time, 1-on-1 tailored sessions.',
        'hero.getStarted': 'Get Started',
        'hero.register': 'Register'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row
     items-center justify-between px-6 lg:px-32 py-20 bg-white dark:bg-gray-900
      text-gray-900 dark:text-white">
      {/* Texte */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 text-center lg:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {t('hero.title')} <span className="text-orange-800">{t('hero.titleHighlight')}</span>{t('hero.titleEnd')}
        </h1>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
          {t('hero.subtitle')}
        </p>
        
        {/* Boutons */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/find-a-mentor" className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 shadow-lg hover:bg-orange-600 transition">
            <span>{t('hero.getStarted')}</span>
          </Link>
          <Link href="/auth/register" className="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg flex items-center justify-center space-x-2 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            <span>{t('hero.register')}</span>
          </Link>
        </div>
      </motion.div>

      {/* Image (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:w-1/2 mt-16 lg:mt-0 hidden lg:flex ml-24"
      >
        <Image
          src="/assets/images/hero.webp"
          alt="Mentor teaching student"
          width={500}
          height={500}
          className="w-full max-w-lg rounded-md shadow-sm"
          priority
          sizes="(max-width: 1024px) 90vw, 50vw"
        />
      </motion.div>
      
      {/* Image (Mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full flex justify-center mt-10 lg:hidden"
      >
        <Image
          src="/assets/images/hero.webp"
          alt="Mentor teaching student"
          width={300}
          height={300}
          className="w-3/4 max-w-xs rounded-lg shadow-lg"
          priority
          sizes="(max-width: 1024px) 90vw, 50vw"
        />
      </motion.div>
    </section>
  );
};

export default Hero; 