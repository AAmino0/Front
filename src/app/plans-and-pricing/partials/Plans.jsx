"use client";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { Gift, Star, Crown } from "lucide-react";

const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: isYearly ? 9.99 : 19.99,
      period: isYearly ? "year" : "month",
      features: [
        "Access to basic courses",
        "Email support",
        "Mobile app access",
        "Progress tracking",
      ],
      popular: false,
      icon: <Gift className="w-8 h-8" />,
    },
    {
      name: "Pro",
      price: isYearly ? 19.99 : 39.99,
      period: isYearly ? "year" : "month",
      features: [
        "All Basic features",
        "Priority support",
        "Advanced analytics",
        "Custom learning paths",
        "Group sessions",
        "Certificate of completion",
      ],
      popular: true,
      icon: <Star className="w-8 h-8" />,
    },
    {
      name: "Premium",
      price: isYearly ? 29.99 : 59.99,
      period: isYearly ? "year" : "month",
      features: [
        "All Pro features",
        "1-on-1 mentoring",
        "Live workshops",
        "Exclusive content",
        "Career guidance",
        "Job placement assistance",
      ],
      popular: false,
      icon: <Crown className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-32 bg-white dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Choose Your <span className="text-orange-500">Plan</span>
      </motion.h2>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center mb-12">
        <span className="text-gray-600 dark:text-gray-300 mr-4">Monthly</span>
        <Switch
          checked={isYearly}
          onChange={setIsYearly}
          className={`${
            isYearly ? "bg-orange-500" : "bg-gray-300"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              isYearly ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
        <span className="text-gray-600 dark:text-gray-300 ml-4">Yearly (Save 50%)</span>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-2 ${
              plan.popular
                ? "border-orange-500 scale-105"
                : "border-gray-200 dark:border-gray-700"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                  {plan.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-orange-500">${plan.price}</span>
                <span className="text-gray-600 dark:text-gray-300">/{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 px-6 rounded-lg font-medium transition duration-300 ${
                plan.popular
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              }`}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
