import * as SC from './Button.style';

type ButtonProps = {
  direction: 'prev' | 'next';
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ direction, disabled, onClick }) => {
  return <SC.Button type="button" direction={direction} disabled={disabled} onClick={onClick} />;
};
