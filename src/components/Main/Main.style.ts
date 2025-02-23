import styled from '@emotion/styled';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--color-background);
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding-left: 320px;
  padding-right: 160px;
`;

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  padding-top: 170px;
  padding-left: 77px;
  padding-right: 77px;

  border-left: 1px solid var(--color-line);
  border-right: 1px solid var(--color-line);

  &::before {
    content: '';
    position: absolute;
    width: 120px;
    height: 5px;
    background: linear-gradient(90deg, var(--color-accent), var(--color-range-end));
    top: 170px;
    left: 0;
    transform-origin: left center;
    transform: rotate(90deg);
  }
`;

export const Lines = styled.div`
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 1440px;
    max-width: 100%;
    height: 1px;
    background: var(--color-line);
    top: calc(50% + 40px);
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 1px;
    height: 100%;
    background: var(--color-line);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Title = styled.h1`
  position: absolute;
  left: 77px;
  max-width: 360px;
  font-size: 56px;
  font-weight: 700;
  line-height: 120%;
  color: var(--color-grey);
`;

export const CenterBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  overflow: hidden;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
`;

export const DateRangeWrapper = styled.div`
  position: absolute;
  top: calc(50% + 20px);
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
`;

export const SliderWrapper = styled.div`
  margin-top: auto;
  width: 100%;
`;
