"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define the possible language values
type Language = "en" | "sv";

// Define what the context will provide
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

// Create the context with undefined as default (we'll check for this later)
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Provider component that wraps your app
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start with English as default
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // This runs once when the component mounts (loads)
  useEffect(() => {
    // Try to get saved language from browser storage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "sv")) {
      setLanguage(savedLanguage);
    }
    setMounted(true);
  }, []);

  // This runs whenever language changes
  useEffect(() => {
    if (mounted) {
      // Save to browser storage so it persists
      localStorage.setItem("language", language);
      // Update the html lang attribute for accessibility/SEO
      document.documentElement.setAttribute("lang", language);
    }
  }, [language, mounted]);

  // Function to switch between languages
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "sv" : "en"));
  };

  // Prevent flash of wrong language on page load
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use the language in any component
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
