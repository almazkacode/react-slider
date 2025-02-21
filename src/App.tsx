import { useState } from 'react';
import 'normalize.css';
import './App.scss';
import { EVENTS } from './data';

import { Spinner } from './components/Spinner/Spinner';
import { Slider } from './components/Slider/Slider';
import { DateRange } from './components/DateRange/DateRange';

function App() {
  const [currentItem, setCurrentItem] = useState(0);
  const years = EVENTS[currentItem].events.map((item) => item.year);

  return (
    <div className="wrapper">
      <main className="main">
        <Spinner
          items={EVENTS.map((event) => event.title)}
          currentIndex={currentItem}
          onItemClick={(index) => setCurrentItem(index)}
        />

        <DateRange startDate={Math.min(...years)} endDate={Math.max(...years)} />

        <Slider data={EVENTS[currentItem].events} />
      </main>
    </div>
  );
}

export default App;
