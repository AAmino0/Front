"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

// Créer le contexte
const ThemeContext = createContext();

// Provider du contexte
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only access localStorage on the client side
    if (typeof window !== 'undefined') {
      const storedMode = localStorage.getItem("darkMode");
      const initialMode = storedMode === "true";
      
      setIsDarkMode(initialMode);
      
      // Apply theme to document
      if (initialMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined') return;
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode, isLoaded]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le thème
export const useTheme = () => useContext(ThemeContext);
