"use client";
import React, { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FiEdit, FiLogOut, FiUser, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/Auth/useAuth";
import useLogout from "../../hooks/Auth/useLogout";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../contexts/LanguageContext";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  profile?: string;
}

const Profile = () => {
  const { t } = useLanguage();
  const { user, setUser } = useAuth();
  const { logout } = useLogout();
  const router = useRouter();
  const [image, setImage] = useState((user as User)?.profile || "/assets/images/default-avatar.png");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          setImage(result);
          updateProfilePicture(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfilePicture = async (newImage: string) => {
    setLoading(true);
    try {
      // Simulating API call (Replace with actual API request)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (user) {
        setUser({ ...(user as User), profile: newImage });
      }
      toast.success("Profile picture updated!", {
        style: { background: "#F97316", color: "white" },
      });
    } catch (error) {
      toast.error("Failed to update profile picture.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t('profile.loginPrompt')}</h2>
          <button
            onClick={() => router.push("/auth/login")}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
          >
            {t('profile.login')}
          </button>
        </div>
      </div>
    );
  }

  const userData = user as User;

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <section className="min-h-screen px-6 lg:px-32 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <div className="relative">
                <img
                  src={image}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-orange-500"
                />
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                <button className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600">
                  <FiEdit />
                </button>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{userData.email}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/profile/edit-profile")}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 flex items-center justify-center gap-2"
                  >
                    <FiEdit />
                    {t('profile.editProfile')}
                  </button>
                  <button
                    onClick={handleLogout}
                    disabled={loading}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 flex items-center justify-center gap-2 disabled:bg-gray-400"
                  >
                    <FiLogOut />
                    {loading ? t('profile.loggingOut') : t('profile.logout')}
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiUser className="text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('profile.fullName')}</p>
                    <p className="font-medium">{userData.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('profile.email')}</p>
                    <p className="font-medium">{userData.email}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiPhone className="text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('profile.phone')}</p>
                    <p className="font-medium">{userData.phone || t('profile.notProvided')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('profile.location')}</p>
                    <p className="font-medium">{userData.location || t('profile.notProvided')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Profile;
