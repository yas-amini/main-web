"use client";

import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const ToggleButton = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 6rem;
  z-index: 100;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 9999px;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  font-family: inherit;

  &:hover {
    border-color: var(--accent);
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;

const LanguageLabel = styled.span<{ $isActive: boolean }>`
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};
  transition: opacity 0.3s ease;
`;

const Separator = styled.span`
  color: var(--text-muted);
`;

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"en" | "sv">("en");

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem("language") as "en" | "sv";
    if (saved === "en" || saved === "sv") {
      setLanguage(saved);
    }
  }, []);

  // Save language when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
    window.dispatchEvent(
      new CustomEvent("languageChange", { detail: language }),
    );
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "sv" : "en"));
  };

  return (
    <ToggleButton
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === "en" ? "Swedish" : "English"}`}
      title={`Switch to ${language === "en" ? "Swedish" : "English"}`}
    >
      <LanguageLabel $isActive={language === "en"}>EN</LanguageLabel>
      <Separator>/</Separator>
      <LanguageLabel $isActive={language === "sv"}>SV</LanguageLabel>
    </ToggleButton>
  );
}
