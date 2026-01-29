"use client";

import styled from "@emotion/styled";
import { useTheme } from "../context/ThemeContext";

const ToggleButton = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 100;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent);
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--text-primary);
    transition: color 0.3s ease;
  }
`;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        // Sun icon - shown in dark mode, click to switch to light
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon - shown in light mode, click to switch to dark
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </ToggleButton>
  );
}
