"use client";

import { useState, useRef } from "react";
import styled from "@emotion/styled";
import { Experience, experiences } from "./timelineData";
import Modal from "./Modal";
import { Title, Heading, Text } from "../styles";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { useGsap } from "../hooks/useGsap";

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  z-index: 1;
  padding: 6rem 2rem;
`;

const Container = styled.div`
  max-width: 48rem;
  width: 100%;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const TimelineWrapper = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0.5rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      var(--accent),
      var(--accent-secondary),
      transparent
    );
    border-radius: 1px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2.5rem;
  cursor: pointer;

  &:last-of-type {
    padding-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: -1.5rem;
    top: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: var(--accent);
    border: 2px solid var(--bg-primary);
    box-shadow: 0 0 0 3px var(--accent-muted);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  &:hover::before {
    transform: scale(1.2);
    box-shadow: 0 0 0 4px var(--accent-muted);
  }
`;

const ItemContent = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  padding: 1.25rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    box-shadow: var(--shadow-md);
    transform: translateX(4px);
  }
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ItemTitleGroup = styled.div`
  flex: 1;
  min-width: 0;
`;

const ItemTitle = styled.h3`
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
  line-height: var(--leading-tight);
`;

const ItemCompany = styled.span`
  font-size: var(--text-sm);
  color: var(--text-muted);
`;

const ItemMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
`;

const Period = styled.span`
  font-size: var(--text-sm);
  color: var(--accent);
  font-weight: var(--font-medium);
  font-family: var(--mono);
`;

interface TypeBadgeProps {
  type: "education" | "work";
}

const TypeBadge = styled.span<TypeBadgeProps>`
  font-size: var(--text-xs);
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: var(--font-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${(props) =>
    props.type === "education"
      ? `
    background: rgba(99, 102, 241, 0.15);
    color: #818cf8;
  `
      : `
    background: rgba(34, 197, 94, 0.15);
    color: #4ade80;
  `}
`;

const ItemDescription = styled.p`
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin: 0 0 1rem 0;
`;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;

const SkillTag = styled.span`
  font-size: var(--text-xs);
  padding: 0.25rem 0.5rem;
  background: var(--bg-secondary);
  color: var(--text-muted);
  border-radius: 0.375rem;
  border: 1px solid var(--border-subtle);
  transition: all 0.15s ease;

  ${ItemContent}:hover & {
    border-color: var(--border-color);
  }
`;

const ViewMore = styled.span`
  font-size: var(--text-xs);
  color: var(--accent);
  font-weight: var(--font-medium);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;

  ${ItemContent}:hover & {
    opacity: 1;
    transform: translateX(0);
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

export default function Timeline() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const { language } = useLanguage();
  const t = translations[language].timeline;

  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGsap(headerRef, { duration: 0.8, ease: "power3.out" });
  useGsap(timelineRef, { duration: 0.8, ease: "power3.out", delay: 0.2 });

  return (
    <Section id="experience">
      <Container>
        <Header ref={headerRef}>
          <Title>{t.title}</Title>
          <Heading>{t.heading}</Heading>
          <Text>
            {t.description1} {t.description2}
          </Text>
        </Header>

        <TimelineWrapper ref={timelineRef}>
          {experiences.map((exp) => (
            <TimelineItem key={exp.id} onClick={() => setSelectedExp(exp)}>
              <ItemContent>
                <ItemHeader>
                  <ItemTitleGroup>
                    <ItemTitle>{exp.title}</ItemTitle>
                    <ItemCompany>{exp.company}</ItemCompany>
                  </ItemTitleGroup>
                  <ItemMeta>
                    <Period>{exp.period}</Period>
                    <TypeBadge type={exp.type}>
                      {exp.type === "education" ? "📚" : "💼"}
                    </TypeBadge>
                  </ItemMeta>
                </ItemHeader>

                <ItemDescription>{exp.shortDesc}</ItemDescription>

                <SkillsRow>
                  {exp.skills.slice(0, 5).map((skill) => (
                    <SkillTag key={skill}>{skill}</SkillTag>
                  ))}
                  {exp.skills.length > 5 && (
                    <SkillTag>+{exp.skills.length - 5}</SkillTag>
                  )}
                </SkillsRow>

                <ViewMore>
                  View details
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </ViewMore>
              </ItemContent>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </Container>

      <Modal experience={selectedExp} onClose={() => setSelectedExp(null)} />
    </Section>
  );
}
