"use client";

import styled from "@emotion/styled";
import { Title, Heading, Text } from "../styles";

const Section = styled.section`
  min-height: 60vh;
  position: relative;
  z-index: 10;
  padding: 4rem 2rem 6rem;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
`;

const Container = styled.div`
  max-width: 48rem;
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

const Content = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
`;

const Highlight = styled.span`
  color: var(--accent);
  font-weight: 500;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const InfoLabel = styled.span`
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const InfoValue = styled.span`
  font-size: 0.875rem;
  color: var(--text-primary);
  font-weight: 500;
`;

export default function About() {
  return (
    <Section id="about">
      <Container>
        <Header>
          <Title>[ ABOUT ]</Title>
          <Heading>Who I Am</Heading>
        </Header>

        <Content>
          <Paragraph>
            I'm a <Highlight>frontend development student</Highlight> at EC
            Utbildning in Sweden, passionate about building accessible and
            user-friendly web interfaces. My journey into tech started with a
            curiosity about how websites work, and has grown into a deep
            interest in creating meaningful digital experiences.
          </Paragraph>

          <Paragraph>
            Currently studying React, TypeScript, and modern web development
            practices. I bring a unique background in{" "}
            <Highlight>SEO, content creation, and customer service</Highlight> —
            skills that help me understand both the technical and human sides of
            building products.
          </Paragraph>

          <Paragraph>
            I'm looking for a{" "}
            <Highlight>LIA internship starting April 2026</Highlight> where I
            can contribute to real projects, learn from experienced developers,
            and grow as part of a collaborative team.
          </Paragraph>

          <InfoGrid>
            <InfoItem>
              <InfoLabel>Location</InfoLabel>
              <InfoValue>Stockholm, Sweden</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Education</InfoLabel>
              <InfoValue>EC Utbildning (2025–2027)</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Languages</InfoLabel>
              <InfoValue>English, Swedish, Korean</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>LIA Availability</InfoLabel>
              <InfoValue>April 2026</InfoValue>
            </InfoItem>
          </InfoGrid>
        </Content>
      </Container>
    </Section>
  );
}
