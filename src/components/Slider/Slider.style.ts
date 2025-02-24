import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 80px;
`;

export const Title = styled.h3`
  margin-bottom: 15px;
  font-family: 'Bebas Neue', Arial, sans-serif;
  font-size: 25px;
  line-height: 120%;
  color: var(--color-accent);
`;

export const Description = styled.p`
  height: 90px;
  color: var(--color-text);
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
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
`;

export const ButtonPrev = styled(Button)`
  left: 20px;
  &::after {
    transform: translate(-50%, -50%) rotate(135deg);
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  max-width: 400px;
`;

export const StyledSwiper = styled(Swiper)`
  .swiper-wrapper {
    max-width: 1440px;
    margin: 0 auto;
  }
`;
