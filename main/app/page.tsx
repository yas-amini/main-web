"use client";

import styled from "@emotion/styled";
import Navigation from "./components/Navigation";
import Hero from "./hero/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Timeline from "./timeline/Timeline";
import Contact from "./sections/Contact";
import Particles from "./components/Particles";
import ClickSpark from "./components/ClickSpark";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
  transition: background-color 0.3s ease;
`;

// Fixed background that stays in place while scrolling
const ParticlesBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
`;

export default function Page() {
  return (
    <ClickSpark
      sparkColor="#ffffffff"
      sparkSize={10}
      sparkRadius={35}
      sparkCount={8}
      duration={400}
    >
      <Container>
        <ParticlesBackground>
          <Particles
            particleColors={["#ffffff", "#ffffffff", "#ffffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.05}
            particleBaseSize={80}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={false}
            sizeRandomness={0.5}
          />
        </ParticlesBackground>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </Container>
    </ClickSpark>
  );
}
