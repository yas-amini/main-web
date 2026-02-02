"use client";

import { useRef } from "react";
import styled from "@emotion/styled";
import { projects, Project } from "../data/projectsData";
import { Title, Heading, Text, BadgeMD } from "../styles";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { useGsap } from "../hooks/useGsap";

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  z-index: 1;
  padding: 4rem 2rem 6rem;
  /* Background removed so particles show through */
`;

const Container = styled.div`
  max-width: 64rem;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
  }
`;

const ProjectImage = styled.div`
  height: 180px;
  background: linear-gradient(135deg, var(--accent-dark), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 3rem;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
`;

const ProjectDescription = styled.p`
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-light);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const featuredProjects = projects.filter((p) => p.featured);

  const titleRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGsap(titleRef, { duration: 0.8, ease: "power3.out" });
  useGsap(headingRef, { duration: 0.8, ease: "power3.out", delay: 0.2 });
  useGsap(gridRef, { duration: 0.8, ease: "power3.out", delay: 0.4 });

  return (
    <Section id="projects">
      <Container>
        <Header>
          <div ref={titleRef}>
            <Title>{t.title}</Title>
          </div>
          <div ref={headingRef}>
            <Heading>{t.heading}</Heading>
          </div>
        </Header>

        <div ref={gridRef}>
          <ProjectsGrid>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectImage>💻</ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.techStack.map((tech) => (
                      <BadgeMD key={tech}>{tech}</BadgeMD>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <ProjectLink
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        {t.viewLive}
                      </ProjectLink>
                    )}
                    {project.githubUrl && (
                      <ProjectLink
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code of ${project.title} on GitHub`}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </div>
      </Container>
    </Section>
  );
}
