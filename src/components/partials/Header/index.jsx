import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import ToggleMode from "../../toggle/ToggleMode";
import ToggleLanguage from "../../toggle/ToggleLanguage";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {useAuth} from "../../../contexts/AuthContext";
import useLogout from "../../../hooks/Auth/useLogout";
import toast, { Toaster } from "react-hot-toast";
import Image from 'next/image';

function Header() {
  const { user, loading } = useAuth();
  const { logout } = useLogout();
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const accountMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
        setAccountMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md bg-opacity-95 backdrop-blur-lg">
        <nav className="flex justify-between items-center px-1 lg:px-5 py-4">
          {/* Logo */}
          <Link to="/" className="text-primary dark:text-secondary py-2 px-4 rounded font-semibold text-lg">
            MyLearnia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/find-a-mentor" className="text-gray-800 dark:text-white hover:text-orange-800 transition-all">
              Find a Mentor
            </Link>
            <Link to="/plans-and-pricing" className="text-gray-800 dark:text-white hover:text-orange-800 transition-all">
              Plans
            </Link>
            <Link to="/become-a-mentor" className="text-gray-800 dark:text-white hover:text-orange-800 transition-all">
              Become a Mentor
            </Link>

            {/* Account Dropdown */}
            <div className="relative" ref={accountMenuRef}>
              <button
                onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                {loading ? <span>Loading...</span> : user ? (
                  <>
                    <Image src={user.profile || "/assets/images/default-avatar.png"} alt={user.name ? user.name + ' profile picture' : 'Profile picture'} width={24} height={24} className="w-6 h-6 rounded-full" />
                    <span>{user.name}</span>
                  </>
                ) : (
                  <span>Account</span>
                )}
                <ChevronDownIcon className="w-4 h-4 text-gray-800 dark:text-gray-300" />
              </button>

              <AnimatePresence>
                {accountMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md"
                  >
                    <ul className="flex flex-col p-2">
                      {user ? (
                        <>
                          <li>
                            <Link
                              to="/profile"
                              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                              onClick={() => setAccountMenuOpen(false)}
                            >
                              Profile
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={async () => {
                                await logout();
                                setAccountMenuOpen(false);
                              }}
                              className="block w-full text-left px-4 cursor-pointer py-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-700 dark:text-red-400 rounded"
                            >
                              Logout
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/auth/login"
                              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                            >
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/auth/register"
                              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                            >
                              Register
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu & Toggles */}
          <div className="flex items-center space-x-4">
            <ToggleLanguage />
            <ToggleMode />
            <MobileMenu />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
