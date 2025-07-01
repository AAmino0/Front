"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaClock, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import { useLanguage } from "../../../contexts/LanguageContext";
import Image from 'next/image';

function Teachers() {
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
        'teachers.title': 'Teach, Impact, and Get Paid for Your Knowledge.',
        'teachers.subtitle': 'Your guidance can change lives, start making an impact today.',
        'teachers.features.oneToOne': 'One-to-one live video lessons',
        'teachers.features.flexible': 'Flexible scheduling',
        'teachers.features.support': 'Dedicated Support Team',
        'teachers.features.payment': 'Transparent Payment System',
        'teachers.features.more': 'And More ...',
        'teachers.joinNow': 'Join Now',
        'teachers.learnHow': 'Learn How It Works!'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <section className="py-20 px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col lg:flex-row items-center justify-between">
      
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <Image
          src="/assets/images/teacher.webp"
          alt="Online Teacher"
          width={400}
          height={400}
          className="w-full max-w-md mx-auto shadow-sm rounded-md"
        />
      </motion.div>

      {/* Texte & Contenu */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          {t('teachers.title')}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {t('teachers.subtitle')}
        </p>

        {/* Liste des avantages */}
        <ul className="space-y-4 text-lg">
          <li className="flex items-center space-x-3">
            <FaChalkboardTeacher className="w-6 h-6 text-orange-500" />
            <span>{t('teachers.features.oneToOne')}</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaClock className="w-6 h-6 text-orange-500" />
            <span>{t('teachers.features.flexible')}</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaUsers className="w-6 h-6 text-orange-500" />
            <span>{t('teachers.features.support')}</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaMoneyBillWave className="w-6 h-6 text-orange-500" />
            <span>{t('teachers.features.payment')}</span>
          </li>
          <li className="flex items-center space-x-3">
            <span>{t('teachers.features.more')}</span>
          </li>
        </ul>

        {/* CTA Bouton */}
        <motion.button
          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}
          className="mt-6 bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 transition"
        >
          {t('teachers.joinNow')}
        </motion.button>

        {/* Lien secondaire */}
        <p className="mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            {t('teachers.learnHow')}
          </a>
        </p>
      </motion.div>
    </section>
  );
}

export default Teachers;
