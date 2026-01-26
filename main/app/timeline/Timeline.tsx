"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import { Experience, experiences } from "./timelineData";
import Modal from "./Modal";
import Card from "./Card";
import { Title, Heading, Text } from "../styles";


const Section = styled.section`
  min-height: 100vh;
  position: relative;
  z-index: 10;
  padding: 4rem 2rem 6rem;
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
 gap:2rem;
`;


const TimelineWrapper = styled.div`
  position: relative;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-0.5px);
  top: 0;
  bottom: 4rem;
  width: 2px;
  background: linear-gradient(to bottom, #8b5cf6, #a78bfa);
  opacity: 0.5;
`;

const TimelineNodes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

interface TimelineItemProps {
  isEven: boolean;
}

const TimelineItem = styled.div <TimelineItemProps>`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  ${props => props.isEven ? 'flex-direction: row;' : 'flex-direction: row-reverse;'}
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

const TimelineMarker = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 1.5rem;
  z-index: 20;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MarkerDot = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  border: 2px solid #0a0a0f;
  background: #a78bfa;
`;

interface CardWrapperProps {
  isEven: boolean;
}

const CardWrapper = styled.div<CardWrapperProps>`
  position: relative;
  z-index: 10;
  width: calc(50% - 2rem);
  ${props => props.isEven ? 'padding-right: 2rem;' : 'padding-left: 2rem;'}
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 32rem;
    padding: 0;
  }
`;







const CardSpacer = styled.div`
  width: calc(50% - 2rem);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const JourneyStart = styled.div`
  display: flex;
  justify-content: center;
`;

const JourneyCircle = styled.div`
  position: relative;
`;

const JourneyIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background: #a78bfa;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    color: white;
    font-size: 1rem;
  }
`;

const JourneyLabel = styled.div`
  position: absolute;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  
  span {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 500;
  }
`;

export default function Timeline() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <Section>
      <Container>
        <Header>
          <Title>[ EXPERIENCES ]</Title>
          <Heading>My Journey</Heading>
          <Text>
            A timeline of my experiences  <br />Click on each experience to learn more
          </Text>
        </Header>

        <TimelineWrapper>
          <TimelineLine />

          <TimelineNodes>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                isEven={index % 2 === 0}
                onClick={() => setSelectedExp(exp)}
              >
                <TimelineMarker>
                  <MarkerDot />
                </TimelineMarker>

                <CardWrapper isEven={index % 2 === 0}>
                  <Card experience={exp} />
                </CardWrapper>

                <CardSpacer />
              </TimelineItem>
            ))}

            <JourneyStart>
              <JourneyCircle>
                <JourneyIcon>
                  <span>✨</span>
                </JourneyIcon>
                <JourneyLabel>
                  <span>The Beginning</span>
                </JourneyLabel>
              </JourneyCircle>
            </JourneyStart>
          </TimelineNodes>
        </TimelineWrapper>
      </Container>

      {/* Modal */}
      <Modal experience={selectedExp} onClose={() => setSelectedExp(null)} />
    </Section>
  );
}
