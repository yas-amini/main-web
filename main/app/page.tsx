"use client";

import styled from "@emotion/styled";
import Navigation from "./components/Navigation";
import Hero from "./hero/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Timeline from "./timeline/Timeline";
import About from "./sections/About";
import Contact from "./sections/Contact";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
`;

export default function Page() {
  return (
    <Container>
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
      <About />
      <Contact />
    </Container>
  );
}
