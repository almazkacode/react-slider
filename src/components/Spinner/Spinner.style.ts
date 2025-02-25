import styled from '@emotion/styled';

export const Circle = styled.div`
  position: relative;
  width: 530px;
  height: 530px;
  border: 1px solid var(--color-line);
  border-radius: 50%;
`;

export const Theme = styled.div<{ x: number; y: number }>`
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
`;

export const ItemWrapper = styled.div`
  width: 56px;
  height: 56px;
  border: none;

  @media (hover: hover) {
    &:hover > div {
      background-color: var(--color-background);
      transform: scale(1);
    }
  }
`;

export const Item = styled.div<{ isActive: boolean }>`
  width: 56px;
  height: 56px;
  background-color: ${({ isActive }) =>
    isActive ? 'var(--color-background)' : 'var(--color-grey)'};
  border: 1px solid rgba(48, 62, 88, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 30px;
  transform: scale(${({ isActive }) => (isActive ? 1 : 0.1)});
  transition:
    transform 0.4s linear,
    background-color 0.4s linear;
  cursor: pointer;
`;

export const Number = styled.span<{ rotationAngle: number }>`
  color: var(--color-grey);
  transform: rotate(${({ rotationAngle }) => -rotationAngle}deg);
  will-change: transform;
  text-rendering: optimizeLegibility;
`;

export const Title = styled.h3<{ rotationAngle: number; isVisible: boolean }>`
  position: absolute;
  transform: rotate(${({ rotationAngle }) => -rotationAngle}deg) translateX(85%);
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  white-space: nowrap;
  text-align: left;
  width: 150px;
  z-index: 100;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s linear;
`;
