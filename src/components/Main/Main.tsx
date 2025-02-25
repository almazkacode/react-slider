import { useState } from 'react';
import * as SC from './Main.style';

import { EVENTS } from '../../data';
import { Spinner } from '../Spinner/Spinner';
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

          <SC.StyledDateRange startDate={Math.min(...years)} endDate={Math.max(...years)} />

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

          <SC.StyledSlider data={EVENTS[currentItem].events} title={EVENTS[currentItem].title} />
        </SC.CenterBlock>
      </SC.Container>
    </SC.Main>
  );
};
