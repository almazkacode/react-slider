import * as SC from './Button.style';

type ButtonProps = {
  direction: 'prev' | 'next';
  // onClick: (index: number) => void;
};

export const Button: React.FC<ButtonProps> = ({ direction }) => {
  return <SC.Button type="button" direction={direction}></SC.Button>;
};
