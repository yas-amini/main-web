"use client";
import styled from "@emotion/styled";
import { Title, Heading, Text, Span } from "../styles";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { LinkedinIcon } from "../components/icons/Linkedin";
import { GithubIcon } from "../components/icons/Github";
import { FileTextIcon } from "../components/icons/FileText";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  min-height: 100vh;
  text-align: center;
  padding: 6rem 2rem 4rem;
  /* Background removed so particles show through */
  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
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
    color: var(--text-secondary);
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

const ScrollIndicator = styled.a`
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
  text-decoration: none;
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
      <HeroContent>
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
              <GithubIcon />
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
              <LinkedinIcon />
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
              <FileTextIcon />
            </Icon>
            <Span>{t.resume}</Span>
          </Link>
        </LinksRow>
      </HeroContent>
      <ScrollIndicator href="#about" aria-label="Scroll to about section">
        Scroll Down
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </ScrollIndicator>
    </Section>
  );
}
