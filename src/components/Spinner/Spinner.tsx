import * as SC from './Spinner.style';

interface SpinnerProps {
  items: string[];
  currentIndex: number;
  onItemClick: (index: number) => void;
}

export const Spinner: React.FC<SpinnerProps> = ({ items, currentIndex, onItemClick }) => {
  const ITEMS_COUNT = items.length;
  const CIRCLE_RADIUS = 530 / 2;

  const positions = items.map((_, index) => {
    const angle = index * (360 / ITEMS_COUNT) * (Math.PI / 180);
    const x = CIRCLE_RADIUS + CIRCLE_RADIUS * Math.cos(angle);
    const y = CIRCLE_RADIUS + CIRCLE_RADIUS * Math.sin(angle);
    return { x, y };
  });

  return (
    <SC.Circle>
      {items.map((item, index) => (
        <SC.ItemWrapper
          key={item}
          x={positions[index].x}
          y={positions[index].y}
          onClick={() => onItemClick(index)}
        >
          <SC.Item isActive={currentIndex === index}>
            <SC.Number>{index + 1}</SC.Number>
            <SC.Title isActive={currentIndex === index}>{item}</SC.Title>
          </SC.Item>
        </SC.ItemWrapper>
      ))}
    </SC.Circle>
  );
};
