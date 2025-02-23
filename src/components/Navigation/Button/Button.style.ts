import styled from '@emotion/styled';

export const Button = styled.button<{ direction: 'prev' | 'next' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--color-line);
  background: transparent;
  transition: var(--transition);
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;    
    border: 1px solid var(--color-grey);
    border-width: 0 2px 2px 0;    
    transform: ${({ direction }) => (direction === 'prev' ? 'rotate(135deg)' : 'rotate(-45deg)')};

  &:disabled {
    opacity: 0.5;
    cursor: default;

    &:hover {
        background: transparent;
      }
  }

  &:hover {
		background-color: var(--color-light);
	}
`;
