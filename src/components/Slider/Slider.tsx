import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';

import * as SC from './Slider.style';
import { SliderItem } from './Slidertem';

interface Event {
  year: number;
  text: string;
}

interface SliderProps {
  data: Event[];
}

export const Slider: React.FC<SliderProps> = ({ data }) => {
  const swiperRef = useRef(null);

  return (
    <SC.SliderContainer>
      <SC.StyledSwiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.text}>
            <SliderItem title={item.year} text={item.text} />
          </SwiperSlide>
        ))}
      </SC.StyledSwiper>
    </SC.SliderContainer>
  );
};
