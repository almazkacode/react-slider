import styled from '@emotion/styled';

export const Range = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  width: 100%;
  max-width: 973px;
  margin: 0 auto;
  font-size: 200px;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -2%;

  @media (max-width: 1340px) {
    font-size: 150px;
  }

  @media (max-width: 1024px) {
    font-size: 100px;
  }

  @media (max-width: 769px) {
    font-size: 70px;
  }

  @media (max-width: 480px) {
    font-size: 56px;
    max-width: 273px;
    gap: 20px;
  }
`;

export const Date = styled.span<{ variant: 'start' | 'end' }>`
  color: ${({ variant }) =>
    variant === 'start' ? 'var(--color-range-start)' : 'var(--color-range-end)'};
`;
