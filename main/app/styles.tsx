import styled from "@emotion/styled";

export const Title = styled.span`
  color: var(--accent);
  font-size: 14px;
  font-family: monospace;
  letter-spacing: 0.1em;
  text-shadow: var(--shadow-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: var(--text-primary);
  text-shadow: var(--shadow-text);
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  text-shadow: var(--shadow-text);
`;

export const Text = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  max-width: 28rem;
  line-height: 1.6;
  text-shadow: var(--shadow-text);
`;

export const Span = styled.span`
  font-size: 14px;
  color: var(--text-muted);
  font-weight: 500;
  transition: color 0.3s ease;
  .a:hover & {
    color: var(--text-primary);
  }
`;

export const BadgeMD = styled.span`
  padding: 0.375rem 0.75rem;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  font-size: 14px;
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
