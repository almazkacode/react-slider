import * as SC from './EventItem.style';

type EventItemProps = {
  title: string;
  text: string;
};

export const EventItem: React.FC<EventItemProps> = ({ title, text }) => {
  return (
    <SC.Item>
      <SC.Title>{title}</SC.Title>
      <SC.Description>{text}</SC.Description>
    </SC.Item>
  );
};
