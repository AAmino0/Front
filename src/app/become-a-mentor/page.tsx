"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
// Remove the import statement for axios
// import axios from "../../api/axios";
import { useLanguage } from "../../contexts/LanguageContext";

interface FormData {
  fullName: string;
  email: string;
  experience: string;
  bio: string;
  subjects: string;
  availability: string;
  image: File | null;
  certificate: File | null;
}

const BecomeAMentor = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    experience: "",
    bio: "",
    subjects: "",
    availability: "",
    image: null,
    certificate: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Remove the axios request
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-3xl font-bold text-center text-orange-600">{t('becomeMentor.title')}</h2>
      <p className="text-center text-gray-600 mt-2">
        {t('becomeMentor.subtitle')}
      </p>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">{t('becomeMentor.fullName')}</label>
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">{t('becomeMentor.email')}</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium">{t('becomeMentor.experience')}</label>
          <input 
            type="number" 
            name="experience" 
            value={formData.experience} 
            onChange={handleChange} 
            required 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium">{t('becomeMentor.bio')}</label>
          <textarea 
            name="bio" 
            value={formData.bio} 
            onChange={handleChange} 
            required 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows={3}
          ></textarea>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium">{t('becomeMentor.subjects')}</label>
          <input 
            type="text" 
            name="subjects" 
            value={formData.subjects} 
            onChange={handleChange} 
            required 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder={t('becomeMentor.subjectsPlaceholder')}
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium">{t('becomeMentor.availability')}</label>
          <input 
            type="text" 
            name="availability" 
            value={formData.availability} 
            onChange={handleChange} 
            required 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder={t('becomeMentor.availabilityPlaceholder')}
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium">{t('becomeMentor.uploadImage')}</label>
          <input 
            type="file" 
            name="image" 
            onChange={handleFileChange} 
            required 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium">{t('becomeMentor.uploadCertificate')}</label>
          <input 
            type="file" 
            name="certificate" 
            onChange={handleFileChange} 
            required 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button 
          type="submit" 
          className="w-full mt-6 py-3 rounded-lg font-medium transition duration-300 border border-orange-600 bg-orange-500 text-white shadow-lg transform hover:scale-105"
        >
          {t('becomeMentor.applyNow')}
        </button>
      </form>
    </div>
  );
};

export default BecomeAMentor;
