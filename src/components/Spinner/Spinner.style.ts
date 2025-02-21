import styled from '@emotion/styled';

export const Circle = styled.div`
  position: relative;
  width: 530px;
  height: 530px;
  border: 1px solid var(--color-grey);
  border-radius: 50%;
  transition: var(--transition);
`;

export const ItemWrapper = styled.div<{ x: number; y: number }>`
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover > div {
    background-color: var(--color-background);
    transform: scale(1);
  }
`;

export const Item = styled.div<{ isActive: boolean }>`
  width: 56px;
  height: 56px;
  background-color: ${(props) =>
    props.isActive ? 'var(--color-background)' : 'var(--color-grey)'};
  border: 1px solid rgba(48, 62, 88, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 30px;
  transform: scale(${(props) => (props.isActive ? 1 : 0.1)});
  transition: var(--transition);
  cursor: pointer;
`;

export const Number = styled.span`
  color: var(--color-grey);
`;

export const Title = styled.span<{ isActive: boolean }>`
  position: absolute;
  left: 70px;
  font-weight: 700;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
  transition: var(--transition);
`;
