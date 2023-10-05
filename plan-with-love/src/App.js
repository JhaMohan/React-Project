import { useState } from 'react';
import Tours from './components/Tours';
import data from './data'
import NoTour from './components/NoTour';

function App() {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  if (tours.length === 0) {
    return (<div>
      <NoTour setTours={setTours}></NoTour>
    </div>)

  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
