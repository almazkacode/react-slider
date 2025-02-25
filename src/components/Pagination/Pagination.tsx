import * as SC from './Pagination.style';

interface PaginationProps {
  count: number;
  currentIndex: number;
  onNavigate: (index: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  count,
  currentIndex,
  onNavigate,
  className,
}) => {
  return (
    <SC.Pagination className={className}>
      {[...Array(count)].map((_, index) => (
        <SC.Dot key={index} isActive={index === currentIndex} onClick={() => onNavigate(index)} />
      ))}
    </SC.Pagination>
  );
};
