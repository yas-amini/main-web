"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define the possible theme values
type Theme = "dark" | "light";

// Define what the context will provide
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context with undefined as default (we'll check for this later)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component that wraps your app
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Start with dark theme (your current design)
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // This runs once when the component mounts (loads)
  useEffect(() => {
    // Try to get saved theme from browser storage
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  // This runs whenever theme changes
  useEffect(() => {
    if (mounted) {
      // Save to browser storage so it persists
      localStorage.setItem("theme", theme);
      // Apply the theme to the document for CSS to read
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  // Function to switch between themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Prevent flash of wrong theme on page load
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook to use the theme in any component
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
