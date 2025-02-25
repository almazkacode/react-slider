import styled from '@emotion/styled';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Dot = styled.button<{ isActive: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ isActive }) => (isActive ? 'var(--color-grey)' : 'rgba(66, 86, 122, 0.4)')};
  border: none;
  cursor: pointer;
  transition: var(--transition);
`;
