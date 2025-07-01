"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our trusted payment partners."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You'll continue to have access to your plan until the end of your current billing period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service within the first 30 days, we'll provide a full refund, no questions asked."
    },
    {
      question: "Can I switch between plans?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. When you upgrade, you'll be charged the prorated difference. When you downgrade, the new rate will apply at your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 7-day free trial for all paid plans. You can explore all features and decide if our platform is right for you before committing to a subscription."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "If you exceed your plan limits, we'll notify you and give you the option to upgrade to a higher tier or purchase additional credits. We won't cut off your access without warning."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 lg:px-32 bg-gray-50 dark:bg-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Frequently Asked <span className="text-orange-500">Questions</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="text-lg font-medium text-gray-900 dark:text-white">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-orange-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-orange-500" />
              )}
            </button>
            
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-4"
              >
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
