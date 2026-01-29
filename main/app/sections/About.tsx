"use client";

import styled from "@emotion/styled";
import { Title, Heading, Text } from "../styles";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

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
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <Section id="about">
      <Container>
        <Header>
          <Title>{t.title}</Title>
          <Heading>{t.heading}</Heading>
        </Header>

        <Content>
          <Paragraph>
            {t.paragraph1.split(t.highlights.student)[0]}
            <Highlight>{t.highlights.student}</Highlight>
            {t.paragraph1.split(t.highlights.student)[1]}
          </Paragraph>

          <Paragraph>
            {t.paragraph2.split(t.highlights.background)[0]}
            <Highlight>{t.highlights.background}</Highlight>
            {t.paragraph2.split(t.highlights.background)[1]}
          </Paragraph>

          <Paragraph>
            {t.paragraph3.split(t.highlights.internship)[0]}
            <Highlight>{t.highlights.internship}</Highlight>
            {t.paragraph3.split(t.highlights.internship)[1]}
          </Paragraph>

          <InfoGrid>
            <InfoItem>
              <InfoLabel>{t.infoLabels.location}</InfoLabel>
              <InfoValue>{t.infoValues.location}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>{t.infoLabels.education}</InfoLabel>
              <InfoValue>{t.infoValues.education}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>{t.infoLabels.languages}</InfoLabel>
              <InfoValue>{t.infoValues.languages}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>{t.infoLabels.availability}</InfoLabel>
              <InfoValue>{t.infoValues.availability}</InfoValue>
            </InfoItem>
          </InfoGrid>
        </Content>
      </Container>
    </Section>
  );
}
