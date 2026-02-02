import styled from "@emotion/styled";

/**
 * Typography Components using CSS custom properties
 * See globals.css for the full typography scale
 */

// Section label / eyebrow text (small, uppercase)
export const Title = styled.span`
  color: var(--accent);
  font-size: var(--text-sm);
  font-family: var(--mono);
  font-weight: var(--font-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  text-shadow: var(--shadow-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Main heading (h1 equivalent)
export const Heading = styled.h1<{ cuteFont?: boolean }>`
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  text-shadow: var(--shadow-text);
  ${(props) => props.cuteFont && `
    font-family: "Cute Font", sans-serif;
  `}
`;

// Section heading (h2 equivalent)
export const Subtitle = styled.h2`
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  line-height: var(--leading-snug);
  text-shadow: var(--shadow-text);
`;

// Body text
export const Text = styled.p`
  font-size: var(--text-base);
  color: var(--text-secondary);
  max-width: 32rem;
  line-height: var(--leading-relaxed);
  text-shadow: var(--shadow-text);
`;

// Small text / labels
export const Span = styled.span`
  font-size: var(--text-sm);
  color: var(--text-muted);
  font-weight: var(--font-medium);
  transition: color 0.3s ease;

  .a:hover & {
    color: var(--text-primary);
  }
`;

// Caption text (smallest)
export const Caption = styled.span`
  font-size: var(--text-xs);
  color: var(--text-muted);
  letter-spacing: var(--tracking-wide);
`;

// Badge component
export const BadgeMD = styled.span`
  padding: 0.375rem 0.75rem;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  cursor: default;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: fit-content;

  &:hover {
    border-color: var(--border-hover);
    color: var(--accent-light);
  }
`;

// Lead paragraph (slightly larger body text)
export const Lead = styled.p`
  font-size: var(--text-md);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 40rem;
`;
