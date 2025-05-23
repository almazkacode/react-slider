import * as SC from './Navigation.style';

interface NavigationProps {
  count: number;
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ count, currentIndex, onNavigate }) => {
  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <SC.Navigation>
      <SC.Text>
        {formatNumber(currentIndex + 1)}/{formatNumber(count)}
      </SC.Text>
      <SC.ButtonWrapper>
        <SC.ButtonPrev disabled={currentIndex === 0} onClick={() => onNavigate(currentIndex - 1)} />
        <SC.ButtonNext
          disabled={currentIndex === count - 1}
          onClick={() => onNavigate(currentIndex + 1)}
        />
      </SC.ButtonWrapper>
    </SC.Navigation>
  );
};
