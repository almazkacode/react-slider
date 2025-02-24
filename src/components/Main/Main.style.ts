import styled from '@emotion/styled';

export const Main = styled.main`
  width: 100%;
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
  max-width: 1440px;
  height: 1080px;
  padding: 170px 0 260px 0;
  overflow: hidden;

  border-left: 1px solid var(--color-line);
  border-right: 1px solid var(--color-line);

  &::before {
    content: '';
    position: absolute;
    width: 120px;
    height: 10px;
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
    top: calc(50% - 55px);
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

export const CenterBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 615px;
  margin-bottom: 57px;
  padding: 0 80px;
`;

export const Title = styled.h1`
  max-width: 360px;
  font-size: 56px;
  font-weight: 700;
  line-height: 120%;
  color: var(--color-grey);
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 100;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const DateRangeWrapper = styled.div`
  position: absolute;
  top: calc(50%);
  left: 49%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;
