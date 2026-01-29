"use client";

import styled from "@emotion/styled";
import { skillCategories } from "../data/skillsData";
import { Title, Heading, Text, BadgeMD } from "../styles";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Section = styled.section`
  min-height: 60vh;
  position: relative;
  z-index: 10;
  padding: 4rem 2rem 6rem;
  background: var(--bg-secondary);
  transition: background-color 0.3s ease;
`;

const Container = styled.div`
  max-width: 56rem;
  width: 100%;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--border-hover);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 1rem 0;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <Section id="skills">
      <Container>
        <Header>
          <Title>{t.title}</Title>
          <Heading>{t.heading}</Heading>
        </Header>

        <SkillsGrid>
          {skillCategories.map((category) => (
            <SkillCategory key={category.title}>
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill) => (
                  <BadgeMD key={skill}>{skill}</BadgeMD>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </Section>
  );
}
