"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, AcademicCapIcon, GlobeAltIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "../../../contexts/LanguageContext";

function WhyUs() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Always call useLanguage to maintain hook order
  let t;
  try {
    const languageContext = useLanguage();
    t = languageContext.t;
  } catch (error) {
    // Fallback function if context is not available
    t = (key) => {
      const fallbacks = {
        'whyUs.title': 'Why Choose Our Platform?',
        'whyUs.quality.title': 'Expert Tutors',
        'whyUs.quality.description': 'Learn from experienced and certified tutors worldwide.',
        'whyUs.convenience.title': 'Interactive Learning',
        'whyUs.convenience.description': 'Engage in 1-on-1 video calls, quizzes, and exercises.',
        'whyUs.results.title': 'Global Access',
        'whyUs.results.description': 'Access courses from anywhere, anytime, on any device.'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <section className="py-20 px-6 lg:px-32 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Titre animé */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold mb-10"
      >
        {t('whyUs.title')}
      </motion.h2>

      {/* Avantages */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center flex flex-col items-center"
          >
            {/* Icône */}
            <feature.icon className="w-12 h-12 text-orange-500 mb-4" />

            {/* Titre */}
            <h3 className="text-xl font-semibold mb-2">{t(feature.titleKey)}</h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300">{t(feature.descriptionKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Liste des fonctionnalités
const features = [
  {
    titleKey: 'whyUs.quality.title',
    descriptionKey: 'whyUs.quality.description',
    icon: AcademicCapIcon,
  },
  {
    titleKey: 'whyUs.convenience.title',
    descriptionKey: 'whyUs.convenience.description',
    icon: LightBulbIcon,
  },
  {
    titleKey: 'whyUs.results.title',
    descriptionKey: 'whyUs.results.description',
    icon: GlobeAltIcon,
  }
];

export default WhyUs;
