import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SliderContainer = styled.div`
  width: 100%;
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

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 400px;
`;

export const StyledSwiper = styled(Swiper)`
  .swiper-wrapper {
    position: relative;
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    padding-right: 80px;
    padding-left: 80px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
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
      border: 2px solid var(--color-accent);
      border-top: 0;
      border-left: 0;
      width: 7px;
      height: 7px;
    }
  }

  .swiper-button-next::after {
    transform: rotate(-45deg);
  }

  .swiper-button-prev::after {
    transform: rotate(135deg);
  }

  .swiper-button-disabled {
    display: none;
  }
`;
