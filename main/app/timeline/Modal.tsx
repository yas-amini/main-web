"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Experience } from "./timelineData";
import { Heading, Span, Text, Title, BadgeMD } from "../styles";

interface ModalProps {
  experience: Experience | null;
  onClose: () => void;
}

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
`;

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #0f0f14;
  border: 1px solid rgba(30, 41, 59, 0.8);
  border-radius: 1.5rem;
  max-width: 32rem;
  width: 100%;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  max-height: 90%;
  overflow-y: auto;
  gap:1rem;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const CloseButton = styled.button`

  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: rgba(30, 41, 59, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: white;
    background: #334155;
  }
  svg {
    width: 1rem;
    height: 1rem;
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

const TopRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
 justify-content: space-between;
 width: 100%;
  color: #64748b;
  svg {
    width: 1rem;
    height: 1rem;
  }
`;


const SkillsSection = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1.5rem;
   border-top: 1px solid rgba(30, 41, 59, 0.8);
  padding-top: 1.5rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;




export default function Modal({ experience, onClose }: ModalProps) {
  useEffect(() => {
    if (experience) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [experience]);

  if (!experience) return null;

  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <Container
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >



        <Header>
          <TopRow>
            <div>
              {experience.period.split('|').map((p, i) => (
                <Title key={i}>{p.trim()}</Title>
              ))}
            </div>

            <CloseButton onClick={onClose}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </CloseButton>
          </TopRow>

          <Row>
            <Heading>{experience.title}</Heading>
          </Row>
          <Row>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <Span>{experience.company}</Span>
          </Row>

        </Header>

        <Text>{experience.fullDesc}</Text>

        <SkillsSection>
          <Title>[ SKILLS & TECHNOLOGIES ]</Title>
          <SkillsList>
            {experience.skills.map((skill) => (
              <BadgeMD key={skill}>{skill}</BadgeMD>
            ))}
          </SkillsList>
        </SkillsSection>


      </Container>
    </Overlay >
  );
}
