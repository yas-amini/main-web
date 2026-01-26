import styled from "@emotion/styled";

export const Title = styled.span`
  color: #d579f9ff;
  font-size: 14px;
  font-family: monospace;
  letter-spacing: 0.1em;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: white;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: white;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  


`;

export const Text = styled.p`
  font-size: 16px;
  color: #cbd4e0ff;
  max-width: 28rem;
  line-height: 1.6;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const Span = styled.span`
  font-size: 14px;
  color: #acb6c5ff;
  font-weight: 500;
  transition: color 0.3s ease;
  .a:hover & {
    color: white;
  }
`;

export const BadgeMD = styled.span`
  padding: 0.375rem 0.75rem;
  background: rgba(15, 23, 42, 0.7);
  color: #e2e8f0;
  font-size: 14px;
  border-radius: 0.5rem;
  border: 1px solid rgba(51, 65, 85, 0.5);
  transition: all 0.3s ease;
  cursor: default;
display: flex;
align-items: center;
gap: 0.5rem;
min-width: fit-content;
  &:hover {
    border-color: rgba(139, 92, 246, 0.3);
    color: #ddd6fe;
  }
`;
