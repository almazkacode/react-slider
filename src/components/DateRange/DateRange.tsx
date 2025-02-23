import { useEffect, useState } from 'react';
import gsap from 'gsap';
import * as SC from './DateRange.style';

interface DateRangeProps {
  startDate: number;
  endDate: number;
}

export const DateRange: React.FC<DateRangeProps> = ({ startDate, endDate }) => {
  const [animatedStart, setAnimatedStart] = useState(startDate);
  const [animatedEnd, setAnimatedEnd] = useState(endDate);

  useEffect(() => {
    const startObj = { value: animatedStart };
    gsap.to(startObj, {
      value: startDate,
      duration: 0.8,
      ease: 'power1.out',
      onUpdate: () => setAnimatedStart(Math.round(startObj.value)),
    });

    const endObj = { value: animatedEnd };
    gsap.to(endObj, {
      value: endDate,
      duration: 1,
      ease: 'power1.out',
      onUpdate: () => setAnimatedEnd(Math.round(endObj.value)),
    });
  }, [startDate, endDate]);

  return (
    <SC.Range>
      <SC.Date variant="start">{animatedStart}</SC.Date>
      <SC.Date variant="end">{animatedEnd}</SC.Date>
    </SC.Range>
  );
};
