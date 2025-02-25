import styled from '@emotion/styled';

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 120px;

  @media (max-width: 480px) {
    justify-content: start;
    width: 70px;
    gap: 5px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: auto;
  color: var(--color-grey);
`;

const Button = styled.button`
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
  position: relative;

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }

  &:hover {
    background-color: var(--color-light);
  }

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border: 1px solid var(--color-grey);
    border-width: 0 2px 2px 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
`;

export const ButtonNext = styled(Button)`
  &::before {
    transform: rotate(-45deg);
  }
`;

export const ButtonPrev = styled(Button)`
  &::before {
    transform: rotate(135deg);
  }
`;
