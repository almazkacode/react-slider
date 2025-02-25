import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 80px;

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 576px) {
    height: 310px;
  }

  @media (max-width: 480px) {
    height: 220px;
  }
`;

export const Year = styled.h3`
  margin-bottom: 15px;
  font-family: 'Bebas Neue', Arial, sans-serif;
  font-size: 25px;
  line-height: 120%;
  color: var(--color-accent);

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  min-height: 135px;
  color: var(--color-text);

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 145%;
  }
`;

const Button = styled.button`
  position: absolute;
  top: calc(50% - 50px);
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 15px 0 rgba(56, 119, 238, 0.1);
  background: var(--color-light);
  cursor: pointer;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid var(--color-accent);
    border-top: 0;
    border-left: 0;
    width: 7px;
    height: 7px;
  }

  &:disabled {
    display: none;
  }
`;

export const ButtonNext = styled(Button)`
  right: 20px;

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ButtonPrev = styled(Button)`
  left: 20px;

  &::after {
    transform: translate(-50%, -50%) rotate(135deg);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  max-width: 400px;
  min-height: 220px;

  @media (max-width: 480px) {
    max-width: 170px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  min-height: 220px;

  .swiper-wrapper {
    max-width: 1440px;
    display: flex;
    align-items: stretch;
    margin: 0 auto;
    cursor: pointer;
  }
`;

export const Title = styled.p`
  display: none;
  font-size: 30px;
  font-weight: 700;
  line-height: 120%;
  color: var(--color-grey);

  @media (max-width: 1024px) {
    display: block;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-line);
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
