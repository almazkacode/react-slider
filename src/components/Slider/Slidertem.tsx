import * as SC from './Slider.style';

interface SliderItemProps {
  title: number;
  text: string;
}

export const SliderItem: React.FC<SliderItemProps> = ({ title, text }) => {
  return (
    <>
      <SC.Year>{title}</SC.Year>
      <SC.Description>{text}</SC.Description>
    </>
  );
};
