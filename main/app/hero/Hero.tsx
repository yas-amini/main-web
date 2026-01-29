"use client";
import styled from "@emotion/styled";
import { Title, Heading, Text, Span } from "../styles";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  min-height: 100vh;
  text-align: center;
  padding: 6rem 2rem 4rem;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
`;

const ImageWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 9999px;
  overflow: hidden;
  border: 3px solid var(--accent);
  box-shadow: var(--shadow-glow);
  position: relative;

  img {
    image-rendering: high-quality;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
`;

const AvailabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 9999px;
  color: #22c55e;
  font-size: 0.875rem;
  font-weight: 500;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    background: #22c55e;
    border-radius: 9999px;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.875rem;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const LinksRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  background: var(--bg-secondary);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--accent-light);
    transition: color 0.3s ease;
  }

  &:hover {
    background: var(--accent-dark);
    border-color: var(--accent);
    box-shadow: var(--shadow-glow);

    svg {
      color: var(--text-primary);
    }
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.75rem;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(8px);
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <Section id="hero">
      <AvailabilityBadge>{t.badge}</AvailabilityBadge>

      <Title>{t.title}</Title>
      <Heading>Yasamin Amini</Heading>

      <ImageWrapper>
        <img
          src="/barbie.png"
          alt="Yasamin Amini"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageWrapper>

      <Text>
        {t.description}
        <br />
        {t.studying}
      </Text>

      <Location>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {t.location}
      </Location>

      <LinksRow>
        <Link
          href="https://github.com/yas-amini"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <Icon>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Icon>
          <Span>{t.github}</Span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/yasaminamini/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          <Icon>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Icon>
          <Span>{t.linkedin}</Span>
        </Link>

        <Link
          href={t.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download my resume PDF"
        >
          <Icon>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </Icon>
          <Span>{t.resume}</Span>
        </Link>
      </LinksRow>
    </Section>
  );
}
