"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Button } from "@headlessui/react";
import { AiOutlineMail } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import SuccessModal from "./SuccessModal";
import ProcessingModal from "./ProcessingModal";

// Validation Schema avec Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

function ForgotPassword() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Formik Hook
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: async(values) => {
      setIsProcessing(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSuccessOpen(true);
        toast.success("Password reset link sent to your email!");
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsProcessing(false);
      }
    },
  });

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Toaster position="top-center" reverseOrder={false} />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-800"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Forgot Password</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        {/* Formulaire */}
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
              <span className="p-3">
                <AiOutlineMail className="text-gray-500 dark:text-gray-400 w-5 h-5" />
              </span>
              <Input
                type="email"
                name="email"
                className="w-full px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" className="w-full cursor-pointer bg-orange-500 text-white py-3 rounded-md shadow-md hover:bg-orange-600 transition">
              Send Reset Link
            </Button>
          </motion.div>
        </form>

        {/* Back to Login */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Remember your password?{" "}
          <Link href="/auth/login" className="text-orange-500 hover:underline">
            Back to Login
          </Link>
        </p>
      </motion.div>

      {/* Modals */}
      <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} message="A password reset link has been sent to your email." />
      <ProcessingModal isOpen={isProcessing} message="Processing..." />
    </section>
  );
}

export default ForgotPassword;
