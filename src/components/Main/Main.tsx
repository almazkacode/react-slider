import * as SC from './Main.style';
import { useState } from 'react';
import { EVENTS } from '../../data';

import { Spinner } from '../Spinner/Spinner';
import { Slider } from '../Slider/Slider';
import { DateRange } from '../DateRange/DateRange';
import { Navigation } from '../Navigation/Navigation';

export const Main: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const years = EVENTS[currentItem].events.map((item) => item.year);

  return (
    <SC.Main>
      <SC.Container>
        <SC.CenterBlock>
          <SC.Title>Исторические даты</SC.Title>

          <SC.SpinnerWrapper>
            <Spinner
              items={EVENTS.map((event) => event.title)}
              currentIndex={currentItem}
              onItemClick={(index) => setCurrentItem(index)}
            />
          </SC.SpinnerWrapper>
          <SC.DateRangeWrapper>
            <DateRange startDate={Math.min(...years)} endDate={Math.max(...years)} />
          </SC.DateRangeWrapper>
          <SC.NavigationWrapper>
            <Navigation
              count={EVENTS.length}
              currentIndex={currentItem}
              onNavigate={(index) => setCurrentItem(index)}
            />
            <SC.StyledPagination
              count={EVENTS.length}
              currentIndex={currentItem}
              onNavigate={(index) => setCurrentItem(index)}
            />
          </SC.NavigationWrapper>
          <SC.SliderWrapper>
            <Slider data={EVENTS[currentItem].events} title={EVENTS[currentItem].title} />
          </SC.SliderWrapper>
        </SC.CenterBlock>
      </SC.Container>
    </SC.Main>
  );
};
