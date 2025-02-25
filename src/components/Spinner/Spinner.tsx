import React, { useRef, useState, useEffect, useMemo } from 'react';
import * as SC from './Spinner.style';
import { gsap } from 'gsap';

interface SpinnerProps {
  items: string[];
  currentIndex: number;
  onItemClick: (index: number) => void;
}

export const Spinner: React.FC<SpinnerProps> = ({ items, currentIndex, onItemClick }) => {
  const ITEMS_COUNT = items.length;
  const CIRCLE_RADIUS = 530 / 2;

  const [activeIndex, setActiveIndex] = useState<number | null>(currentIndex);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateRotationAngle = (index: number) => -(index * (360 / ITEMS_COUNT) + 60);

  const calculateShortestRotation = (from: number, to: number) => {
    let delta = (to - from) % 360;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    return delta;
  };

  const animateRotation = (index: number, onStart?: () => void) => {
    const newAngle = calculateRotationAngle(index);
    const delta = calculateShortestRotation(rotationAngle, newAngle);

    setIsRotating(true);
    setActiveIndex(index);

    gsap.to(containerRef.current, {
      rotate: rotationAngle + delta,
      duration: 1,
      ease: 'power1.out',
      force3D: true,
      onStart,
      onUpdate: () => {
        setRotationAngle(gsap.getProperty(containerRef.current, 'rotate') as number);
      },
      onComplete: () => {
        setIsRotating(false);
      },
    });
  };

  useEffect(() => {
    const initialAngle = calculateRotationAngle(currentIndex);
    setRotationAngle(initialAngle);
    gsap.set(containerRef.current, { rotate: initialAngle });
  }, []);

  useEffect(() => {
    if (activeIndex !== currentIndex) {
      animateRotation(currentIndex);
    }
  }, [currentIndex]);

  const handleItemClick = (index: number) => {
    if (index !== activeIndex) {
      animateRotation(index, () => onItemClick(index));
    }
  };

  const positions = useMemo(
    () =>
      items.map((_, index) => {
        const angle = index * (360 / ITEMS_COUNT) * (Math.PI / 180);
        return {
          x: CIRCLE_RADIUS + CIRCLE_RADIUS * Math.cos(angle),
          y: CIRCLE_RADIUS + CIRCLE_RADIUS * Math.sin(angle),
        };
      }),
    [items],
  );

  return (
    <SC.Circle ref={containerRef}>
      {items.map((item, index) => (
        <SC.Theme
          key={item}
          x={positions[index].x}
          y={positions[index].y}
          onClick={() => handleItemClick(index)}
        >
          <SC.ItemWrapper>
            <SC.Item isActive={activeIndex === index}>
              <SC.Number rotationAngle={rotationAngle}>{index + 1}</SC.Number>
            </SC.Item>
          </SC.ItemWrapper>

          <SC.Title rotationAngle={rotationAngle} isVisible={!isRotating && activeIndex === index}>
            {item}
          </SC.Title>
        </SC.Theme>
      ))}
    </SC.Circle>
  );
};
