"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaSearch, FaQuestionCircle, FaBook, FaPhone, FaEnvelope } from "react-icons/fa";

function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const router = useRouter();

  const categories = [
    { id: "all", name: "All Questions", icon: FaQuestionCircle },
    { id: "account", name: "Account & Billing", icon: FaBook },
    { id: "technical", name: "Technical Support", icon: FaPhone },
    { id: "general", name: "General Questions", icon: FaEnvelope },
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I book a session with a tutor?",
      answer: "To book a session, simply browse our tutor directory, select a tutor that matches your needs, and click on 'Book Session'. You can then choose your preferred time slot and complete the booking process.",
      category: "general",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
      category: "account",
    },
    {
      id: 3,
      question: "Can I cancel or reschedule a session?",
      answer: "Yes, you can cancel or reschedule a session up to 24 hours before the scheduled time. Cancellations within 24 hours may be subject to our cancellation policy.",
      category: "account",
    },
    {
      id: 4,
      question: "How do I become a tutor on your platform?",
      answer: "To become a tutor, visit our 'Become a Mentor' page and fill out the application form. We'll review your qualifications and get back to you within 48 hours.",
      category: "general",
    },
    {
      id: 5,
      question: "What if I have technical issues during a session?",
      answer: "If you experience technical issues, try refreshing your browser or checking your internet connection. You can also contact our technical support team for immediate assistance.",
      category: "technical",
    },
    {
      id: 6,
      question: "Are the sessions recorded?",
      answer: "Sessions are not automatically recorded, but you can request recording if your tutor agrees. Recorded sessions are stored securely and can be accessed for review.",
      category: "general",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      (activeCategory === "all" || faq.category === activeCategory) &&
      (searchQuery === "" || faq.question.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-24 px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          How Can We <span className="text-orange-500">Help You?</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Find answers to common questions and get the support you need.
        </p>
      </motion.div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
              activeCategory === category.id
                ? "bg-orange-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <category.icon className="mr-2" />
            {category.name}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">No questions found matching your search.</p>
          </div>
        )}
      </div>

      {/* Contact Support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Can't find what you're looking for? Our support team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/support/contact")}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Contact Support
          </button>
          <button
            onClick={() => router.push("/auth/login")}
            className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition"
          >
            Live Chat
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default HelpCenter;
