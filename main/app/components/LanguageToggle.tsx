"use client";

import styled from "@emotion/styled";
import { useLanguage } from "../context/LanguageContext";

const ToggleButton = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 5rem; /* Positioned to the left of the theme toggle */
  z-index: 100;
  height: 2rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  transition: all 0.3s ease;
  font-size: 0.75rem;
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

const LanguageLabel = styled.span<{ isActive: boolean }>`
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  transition: opacity 0.3s ease;
`;

const Separator = styled.span`
  color: var(--text-muted);
`;

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <ToggleButton
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === "en" ? "Swedish" : "English"}`}
      title={`Switch to ${language === "en" ? "Swedish" : "English"}`}
    >
      <LanguageLabel isActive={language === "en"}>EN</LanguageLabel>
      <Separator>/</Separator>
      <LanguageLabel isActive={language === "sv"}>SV</LanguageLabel>
    </ToggleButton>
  );
}
