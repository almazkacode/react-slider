import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import gsap from 'gsap';
import { useRef, useEffect, useState } from 'react';

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
  const [localData, setLocalData] = useState<Event[]>(data);
  const sliderRef = useRef(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.out',
        onComplete: () => {
          setLocalData(data);
        },
      });
    }
  }, [data]);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        duration: 0.5,
        opacity: 1,
      });
    }
  }, [localData]);

  return (
    <SC.SliderContainer ref={sliderRef}>
      <SC.ButtonPrev ref={prevButtonRef} />
      <SC.StyledSwiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        onBeforeInit={(swiper: SwiperType) => {
          const navigationParams = swiper.params.navigation as {
            prevEl?: HTMLElement;
            nextEl?: HTMLElement;
          };

          navigationParams.prevEl = prevButtonRef.current ?? undefined;
          navigationParams.nextEl = nextButtonRef.current ?? undefined;
        }}
        scrollbar={{ draggable: true }}
      >
        {localData.map((item) => (
          <SwiperSlide key={item.text}>
            <SliderItem title={item.year} text={item.text} />
          </SwiperSlide>
        ))}
      </SC.StyledSwiper>
      <SC.ButtonNext ref={nextButtonRef} />
    </SC.SliderContainer>
  );
};
