"use client";

import styled from "@emotion/styled";
import Hero from "./hero/Hero";
import Timeline from "./timeline/Timeline";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;


export default function Page() {
  return (
    <Container>
      <Hero />
      <Timeline />
    </Container>
  );
}

