import styled from '@emotion/styled';

export const Range = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 70px;
  width: 100%;
  max-width: 973px;
  margin: 0 auto;
  font-size: 200px;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -2%;
`;

export const Date = styled.span<{ variant: 'start' | 'end' }>`
  color: ${({ variant }) =>
    variant === 'start' ? 'var(--color-range-start)' : 'var(--color-range-end)'};
`;
