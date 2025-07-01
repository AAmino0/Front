"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Video, ShieldCheck, CalendarCheck, BrainCircuit, MoreHorizontal } from "lucide-react"; // Icônes modernes
import { Button } from "@headlessui/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../../../contexts/LanguageContext";

function Benefits() {
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
        'benefits.title': 'Benefits of Online Tutoring',
        'benefits.subtitle': 'Experience the advantages of personalized online learning with our expert tutors.',
        'benefits.personalizedLearning.title': 'Personalized Learning',
        'benefits.personalizedLearning.description': 'One-on-one sessions tailored to your specific needs and learning style.',
        'benefits.flexibleSchedule.title': 'Flexible Scheduling',
        'benefits.flexibleSchedule.description': 'Book sessions at your convenience, 24/7 availability to fit your schedule.',
        'benefits.expertMentors.title': 'Expert Tutors',
        'benefits.expertMentors.description': 'Learn from qualified and experienced educators in your chosen subject.',
        'benefits.affordablePricing.title': 'Affordable Pricing',
        'benefits.affordablePricing.description': 'Competitive rates with various plans to suit different budgets and needs.',
        'benefits.progressTracking.title': 'Progress Tracking',
        'benefits.progressTracking.description': 'Monitor your learning progress with detailed feedback and assessments.',
        'benefits.safeEnvironment.title': 'Safe Environment',
        'benefits.safeEnvironment.description': 'Secure platform with verified tutors and protected payment system.',
        'benefits.readyToStart.title': 'Ready to Start Learning?',
        'benefits.readyToStart.description': 'Join thousands of students who have already improved their skills with our expert tutors.',
        'common.findYourTutor': 'Find Your Tutor'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <section className="py-24 px-6 lg:px-32 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            {t('benefits.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Benefits List */}
          <div>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <FaCheckCircle className="text-orange-500 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t(benefit.titleKey)}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t(benefit.descriptionKey)}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold mb-4">{t('benefits.readyToStart.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('benefits.readyToStart.description')}
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className="mt-8">
              <a
                href="/find-a-mentor"
                className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
              >
                {t('common.findYourTutor')} <FaArrowRight className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Liste des avantages avec icônes
const benefits = [
  {
    titleKey: 'benefits.personalizedLearning.title',
    descriptionKey: 'benefits.personalizedLearning.description',
  },
  {
    titleKey: 'benefits.flexibleSchedule.title',
    descriptionKey: 'benefits.flexibleSchedule.description',
  },
  {
    titleKey: 'benefits.expertMentors.title',
    descriptionKey: 'benefits.expertMentors.description',
  },
  {
    titleKey: 'benefits.affordablePricing.title',
    descriptionKey: 'benefits.affordablePricing.description',
  },
  {
    titleKey: 'benefits.progressTracking.title',
    descriptionKey: 'benefits.progressTracking.description',
  },
  {
    titleKey: 'benefits.safeEnvironment.title',
    descriptionKey: 'benefits.safeEnvironment.description',
  },
];

export default Benefits; 
