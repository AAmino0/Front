"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";

function Beneficiaries() {
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
        'beneficiaries.title': 'Who Can Benefit from MyLearnia?',
        'beneficiaries.speaking.title': 'In Speaking',
        'beneficiaries.studying.title': 'In Studying',
        'beneficiaries.speaking.teenagers.title': 'Teenagers',
        'beneficiaries.speaking.teenagers.description': 'Speak fluently and confidently in your language of choice.',
        'beneficiaries.speaking.professionals.title': 'Professionals',
        'beneficiaries.speaking.professionals.description': 'Learn new language skills to enhance career opportunities.',
        'beneficiaries.speaking.travelers.title': 'Travel Enthusiasts',
        'beneficiaries.speaking.travelers.description': 'Pick up essential phrases for your next adventure.',
        'beneficiaries.studying.students.title': 'Students',
        'beneficiaries.studying.students.description': 'Master tough subjects like Math, Science, or History with ease.',
        'beneficiaries.studying.parents.title': 'Parents',
        'beneficiaries.studying.parents.description': 'Give your child the extra support they need to excel.',
        'beneficiaries.studying.examTakers.title': 'High School Exam Takers',
        'beneficiaries.studying.examTakers.description': 'Boost your grades with expert guidance.',
        'beneficiaries.startSpeaking': 'Start Speaking',
        'beneficiaries.boostGrades': 'Boost Your Grades'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <section className="py-24 px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center">
      {/* Titre principal */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-extrabold mb-10"
      >
        {t('beneficiaries.title')}
      </motion.h2>

      {/* Conteneur en flex pour bien aligner les colonnes */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl relative">
        
        {/* Colonne Speaking */}
        <div className="flex flex-col items-center space-y-6 w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            {t('beneficiaries.speaking.title')}
          </h3>
          {speaking.map((item, index) => (
            <BenefitCard key={index} title={t(item.titleKey)} description={t(item.descriptionKey)} />
          ))}
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}
            className="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 transition"
          >
            {t('beneficiaries.startSpeaking')}
          </motion.button>
        </div>

        {/* Séparateur - Trait vertical */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-600 h-full"></div>

        {/* Colonne Studying */}
        <div className="flex flex-col items-center space-y-6 w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-700 mt-5 lg:mt-0 dark:text-gray-300">
            {t('beneficiaries.studying.title')}
          </h3>
          {studying.map((item, index) => (
            <BenefitCard key={index} title={t(item.titleKey)} description={t(item.descriptionKey)} highlight />
          ))}
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}
            className="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 transition"
          >
            {t('beneficiaries.boostGrades')}
          </motion.button>
        </div>
      </div>
    </section>
  );
}

// Composant pour une carte de bénéfice
function BenefitCard({ title, description, highlight = false }) {
  return (
    <motion.div
      className={`p-6 rounded-2xl w-full max-w-md text-center shadow-md transition-all ${
        highlight
          ? "bg-orange-500 text-white"
          : "bg-orange-100 dark:bg-gray-800 text-gray-900 dark:text-white"
      }`}
    >
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="mt-2 text-sm">{description}</p>
    </motion.div>
  );
}

// Données des bénéficiaires
const speaking = [
  { titleKey: 'beneficiaries.speaking.teenagers.title', descriptionKey: 'beneficiaries.speaking.teenagers.description' },
  { titleKey: 'beneficiaries.speaking.professionals.title', descriptionKey: 'beneficiaries.speaking.professionals.description' },
  { titleKey: 'beneficiaries.speaking.travelers.title', descriptionKey: 'beneficiaries.speaking.travelers.description' },
];

const studying = [
  { titleKey: 'beneficiaries.studying.students.title', descriptionKey: 'beneficiaries.studying.students.description' },
  { titleKey: 'beneficiaries.studying.parents.title', descriptionKey: 'beneficiaries.studying.parents.description' },
  { titleKey: 'beneficiaries.studying.examTakers.title', descriptionKey: 'beneficiaries.studying.examTakers.description' },
];

export default Beneficiaries;
