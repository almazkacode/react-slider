import { useRef, useEffect, useState } from 'react';
import * as SC from './Slider.style';
import { SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import gsap from 'gsap';

import { SliderItem } from './Slidertem';

interface Event {
  year: number;
  text: string;
}

interface SliderProps {
  data: Event[];
  title: string;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({ data, title, className }) => {
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
    <SC.SliderContainer ref={sliderRef} className={className}>
      <SC.Title>{title}</SC.Title>
      <SC.ButtonPrev ref={prevButtonRef} />
      <SC.StyledSwiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
        autoHeight
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
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 80 },
          1024: { slidesPerView: 3, spaceBetween: 80 },
        }}
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
