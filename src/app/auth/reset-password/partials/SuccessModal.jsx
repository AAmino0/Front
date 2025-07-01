"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import { FaCheckCircle } from "react-icons/fa";

const SuccessModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4 text-center"
      >
        <div className="text-green-500 text-4xl mb-4 flex justify-center">
          <FaCheckCircle />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Success!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
        <Button
          onClick={onClose}
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition cursor-pointer"
        >
          Close
        </Button>
      </motion.div>
    </div>
  );
};

export default SuccessModal;
