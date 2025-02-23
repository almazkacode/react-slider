import { Button } from './Button/Button.style';
import * as SC from './Navigation.style';

interface NavigationProps {
  count: number;
  currentIndex: number;
}

export const Navigation: React.FC<NavigationProps> = ({ count, currentIndex }) => {
  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <SC.Navigation>
      <SC.Text>
        {formatNumber(currentIndex)}/{formatNumber(count)}
      </SC.Text>
      <SC.ButtonWrapper>
        <Button direction="prev" disabled={currentIndex === 1} />
        <Button direction="next" disabled={currentIndex === count} />
      </SC.ButtonWrapper>
    </SC.Navigation>
  );
};
