import * as SC from './DateRange.style';

interface DateRangeProps {
  startDate: number;
  endDate: number;
}

export const DateRange: React.FC<DateRangeProps> = ({ startDate, endDate }) => (
  <SC.Range>
    <SC.Date variant="start">{startDate}</SC.Date>
    <SC.Date variant="end">{endDate}</SC.Date>
  </SC.Range>
);
