import { useState } from 'react';
import 'normalize.css';
import './App.scss';
import { EVENTS } from './data';

import { Spinner } from './components/Spinner/Spinner';
import { Slider } from './components/Slider/Slider';

function App() {
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <div className="wrapper">
      <main className="main">
        <Spinner
          items={EVENTS.map((event) => event.title)}
          currentIndex={currentItem}
          onItemClick={(index) => setCurrentItem(index)}
        />

        <Slider data={EVENTS[currentItem].events} />
      </main>
    </div>
  );
}

export default App;
