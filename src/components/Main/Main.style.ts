import styled from '@emotion/styled';
import { Pagination } from '../Pagination/Pagination';

export const Main = styled.main`
  width: 100%;
  background-color: var(--color-background);
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding-left: 320px;
  padding-right: 160px;

  @media (max-width: 1600px) {
    padding: 0 100px;
  }

  @media (max-width: 1340px) {
    padding: 0;
  }
`;

export const CenterBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 60px;
  max-width: 1440px;
  padding-top: 170px;
  padding-bottom: 60px;
  overflow: hidden;

  border-left: 1px solid var(--color-line);
  border-right: 1px solid var(--color-line);

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 1440px;
    max-width: 100%;
    height: 1px;
    background: var(--color-line);
    top: calc(50% - 60px);
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 1340px) {
      display: none;
    }
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

    @media (max-width: 1340px) {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    padding: 80px 50px 15px;
    margin-bottom: 0;
  }

  @media (max-width: 576px) {
    padding: 60px 20px 15px;
  }
`;

export const Title = styled.h1`
  max-width: 360px;
  font-size: 56px;
  font-weight: 700;
  line-height: 120%;
  color: var(--color-grey);
  padding: 0 80px;

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

    @media (max-width: 1340px) {
      display: none;
    }
  }

  @media (max-width: 1340px) {
    font-size: 42px;
    max-width: 270px;
  }

  @media (max-width: 1024px) {
    padding: 0;
    margin-bottom: 70px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    max-width: 130px;
    margin-bottom: 48px;
  }
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: calc(50% - 60px);
  transform: translateY(-50%);
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 100;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const DateRangeWrapper = styled.div`
  position: absolute;
  top: calc(50% - 60px);
  left: 49%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    position: static;
    left: 0;
    transform: translate(0);
    margin-bottom: 35px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const NavigationWrapper = styled.div`
  padding: 0 80px;
  padding-top: 387px;
  margin-bottom: 55px;

  @media (max-width: 1024px) {
    position: relative;
    padding: 0;
    order: 1;
    margin-bottom: 0;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const StyledPagination = styled(Pagination)`
  display: none;

  @media (max-width: 1024px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    margin-top: 5px;
  }
`;
