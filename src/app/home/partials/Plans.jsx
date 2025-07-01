"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Switch } from "@headlessui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useLanguage } from "../../../contexts/LanguageContext";

function Plans() {
  const [billingCycle, setBillingCycle] = useState("monthly");
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
        'plans.title': 'Affordable Plans for Every student',
        'plans.subtitle': 'Choose the plan that fits your learning needs.',
        'plans.annually': 'Annually',
        'plans.monthly': 'Monthly',
        'plans.mostPopular': 'Most popular',
        'plans.starter.title': 'Starter',
        'plans.professional.title': 'Professional',
        'plans.premium.title': 'Premium',
        'plans.starter.cta': 'Get Started Now !!',
        'plans.professional.cta': 'Step Up Now !!',
        'plans.premium.cta': 'Experience the Best',
        'plans.features.oneOnOne': '1-on-1 Live Sessions',
        'plans.features.tenSessions': 'Up to 10 Sessions/month',
        'plans.features.thirtyMin': 'Limited Session duration (30min)',
        'plans.features.prioritySupport': 'Priority Support',
        'plans.features.customPath': 'Custom learning path',
        'plans.features.thirtySessions': 'Up to 30 Sessions/month',
        'plans.features.sixtyMin': 'Limited Session duration (60min)',
        'plans.features.allInPro': 'All in Pro plan',
        'plans.features.unlimitedSessions': 'Unlimited Sessions',
        'plans.features.unlimitedDuration': 'Unlimited Session duration',
        'plans.features.recordings': 'Session Recordings'
      };
      return fallbacks[key] || key;
    };
  }

  return (
    <section className="py-24 px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center">
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-extrabold mb-6"
      >
        {t('plans.title')}
      </motion.h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        {t('plans.subtitle')}
      </p>

      {/* Toggle Switch Annually / Monthly */}
      <div className="flex items-center space-x-4 mb-12">
        <span
          className={`text-lg font-semibold cursor-pointer ${
            billingCycle === "annually" ? "text-orange-500" : "text-gray-500"
          }`}
          onClick={() => setBillingCycle("annually")}
        >
          {t('plans.annually')}
        </span>
        <Switch
          checked={billingCycle === "monthly"}
          onChange={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
          className={`${
            billingCycle === "monthly" ? "bg-orange-500" : "bg-gray-300"
          } relative inline-flex items-center h-6 rounded-full w-12 transition`}
        >
          <span
            className={`${
              billingCycle === "monthly" ? "translate-x-7 bg-white" : "translate-x-1 bg-gray-500"
            } inline-block w-5 h-5 transform rounded-full transition`}
          />
        </Switch>
        <span
          className={`text-lg font-semibold cursor-pointer ${
            billingCycle === "monthly" ? "text-orange-500" : "text-gray-500"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          {t('plans.monthly')}
        </span>
      </div>

      {/* Plans Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`relative bg-orange-100 dark:bg-gray-800 p-6 rounded-3xl text-center shadow-md transition-all ${
              plan.popular ? "border-4 border-blue-500" : "border border-gray-300 dark:border-gray-600"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-b-md">
                {t('plans.mostPopular')}
              </div>
            )}
            <h3 className="text-2xl font-bold">{t(plan.titleKey)}</h3>
            <p className="text-3xl font-extrabold my-4">
              ${billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnually}
              <span className="text-lg font-medium"> / {billingCycle}</span>
            </p>
            <ul className="text-left space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {feature.included ? (
                    <FaCheckCircle className="text-green-500 w-5 h-5" />
                  ) : (
                    <FaTimesCircle className="text-red-500 w-5 h-5" />
                  )}
                  <span>{t(feature.textKey)}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 transition"
            >
              {t(plan.ctaKey)}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Plans data
const plans = [
  {
    titleKey: 'plans.starter.title',
    priceMonthly: 10,
    priceAnnually: 100,
    ctaKey: 'plans.starter.cta',
    features: [
      { textKey: 'plans.features.oneOnOne', included: true },
      { textKey: 'plans.features.tenSessions', included: true },
      { textKey: 'plans.features.thirtyMin', included: true },
      { textKey: 'plans.features.prioritySupport', included: false },
    ],
  },
  {
    titleKey: 'plans.professional.title',
    priceMonthly: 25,
    priceAnnually: 250,
    ctaKey: 'plans.professional.cta',
    popular: true,
    features: [
      { textKey: 'plans.features.customPath', included: true },
      { textKey: 'plans.features.oneOnOne', included: true },
      { textKey: 'plans.features.thirtySessions', included: true },
      { textKey: 'plans.features.sixtyMin', included: true },
      { textKey: 'plans.features.prioritySupport', included: true },
    ],
  },
  {
    titleKey: 'plans.premium.title',
    priceMonthly: 50,
    priceAnnually: 500,
    ctaKey: 'plans.premium.cta',
    features: [
      { textKey: 'plans.features.allInPro', included: true },
      { textKey: 'plans.features.unlimitedSessions', included: true },
      { textKey: 'plans.features.unlimitedDuration', included: true },
      { textKey: 'plans.features.recordings', included: true },
    ],
  },
];

export default Plans;
