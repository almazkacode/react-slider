import { Slider } from './components/Slider/Slider';
import 'normalize.css';
import './App.scss';
import { EVENTS } from './data';

function App() {
  const event = EVENTS[0].events;
  return (
    <div className="wrapper">
      <main className="main">
        <Slider data={event} />
      </main>
    </div>
  );
}

export default App;
