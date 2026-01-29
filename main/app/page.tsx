"use client";

import styled from "@emotion/styled";
import Hero from "./hero/Hero";
import Timeline from "./timeline/Timeline";
import ThemeToggle from "./components/ThemeToggle";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  min-height: 100vh;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
`;

export default function Page() {
  return (
    <Container>
      <ThemeToggle />
      <Hero />
      <Timeline />
    </Container>
  );
}
