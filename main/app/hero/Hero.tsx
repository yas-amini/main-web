"use client";
import styled from "@emotion/styled";
import { Title, Heading, Text, Span } from "../styles";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { LinkedinIcon } from "../components/icons/Linkedin";
import { GithubIcon } from "../components/icons/Github";
import { FileTextIcon } from "../components/icons/FileText";
import ShinyText from "../components/ShinyText";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  position: relative;
  z-index: 1;
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
  max-width: 72rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const ImageSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    order: -1;
  }
`;

const ImageWrapper = styled.div`
  width: clamp(12rem, 20vw, 18rem);
  height: clamp(12rem, 20vw, 18rem);
  border-radius: 9999px;
  overflow: hidden;
  border: 3px solid var(--accent);
  box-shadow: var(--shadow-glow);
  position: relative;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-glow-accent);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    image-rendering: high-quality;
  }
`;

const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const NameRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RoleTagline = styled.span`
  font-size: var(--text-lg);
  color: var(--accent);
  font-weight: var(--font-medium);
  letter-spacing: var(--tracking-wide);
`;

const Description = styled.p`
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 32rem;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: var(--text-muted);
  font-size: var(--text-sm);

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const AvailabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 9999px;
  color: #22c55e;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);

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

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  transition: all 0.2s ease;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    background: var(--accent-muted);
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
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
  font-size: var(--text-xs);
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
  }
`;

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <Section id="hero">
      <HeroContainer>
        <ImageSide>
          <ImageWrapper>
            <img src="/barbie.png" alt="Yasamin Amini" />
          </ImageWrapper>
        </ImageSide>

        <ContentSide>
          <AvailabilityBadge>{t.badge}</AvailabilityBadge>

          <NameRow>
            <Heading cuteFont>
              <ShinyText
                text="Yasamin Amini"
                speed={4.3}
                delay={0}
                color="var(--text-primary)"
                shineColor="var(--accent)"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </Heading>
            <RoleTagline>{t.title}</RoleTagline>
          </NameRow>

          <Description>
            {t.description} {t.studying}
          </Description>

          <MetaRow>
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
          </MetaRow>

          <SocialLinks>
            <SocialLink
              href="https://github.com/yas-amini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/yasaminamini/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </SocialLink>
            <SocialLink
              href={t.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              title="Download Resume"
            >
              <FileTextIcon />
            </SocialLink>
          </SocialLinks>
        </ContentSide>
      </HeroContainer>

      <ScrollIndicator href="#about" aria-label="Scroll to about section">
        Scroll
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
