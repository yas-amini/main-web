"use client";

import styled from "@emotion/styled";
import { Experience } from "./timelineData";
import { Span, Text, Title, BadgeMD, Subtitle } from "../styles";
interface CardProps {
  experience: Experience | null;
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
   background: #0f0f14;
  border: 1px solid rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(24px);
  border-radius: 1rem;
  padding: 1rem;
  transition: border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &:hover {
    border-color: rgba(139, 92, 246, 0.4);
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-bottom: 1px solid rgba(30, 41, 59, 0.8);
 padding-bottom: 1rem;
  gap:1rem;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const SkillsSection = styled.div`
 display: flex;
 flex-wrap: wrap;
  gap: 0.5rem;
 
`;


export default function Card({ experience }: CardProps) {
  if (!experience) return null;
  return (

    <Container>
      <Header>
        {experience.period.split('|').map((p, i) => (
          <Title key={i}>{p.trim()}</Title>
        ))}
        <Subtitle>{experience.title}</Subtitle>
        <Row>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <Span>{experience.company}</Span>
        </Row>
      </Header>



      <Text>{experience.shortDesc}</Text>

      <SkillsSection>
        {experience.skills.slice(0, 4).map((skill) => (
          <BadgeMD key={skill}>{skill}</BadgeMD>
        ))}
        {experience.skills.length > 4 && (
          <Span>+{experience.skills.length - 4}</Span>
        )}
      </SkillsSection>
    </Container>


  );
}
