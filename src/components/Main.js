import { useState } from 'react';
import Counter from './Counter';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  
  const [counters, setCounters] = useState([0, 0, 0]);

  
  const handleIncrement = (index) => {
    const updatedCounters = [...counters];
    updatedCounters[index]++;
    setCounters(updatedCounters);
  };

  
  const handleDecrement = (index) => {
    const updatedCounters = [...counters];
    updatedCounters[index]--;
    setCounters(updatedCounters);
  };

 
  const handleReset = () => {
    setCounters([0, 0, 0]);
  };

  
  const handleDelete = (index) => {
    const updatedCounters = counters.filter((_, i) => i !== index);
    setCounters(updatedCounters);
  };

  return (
    <div className="main">
      
      <button className="btn btn-success m-3" onClick={handleReset}>
        Refresh All
      </button>

     
      {counters.map((count, index) => (
        <Counter
          key={index}
          count={count}
          onIncrement={() => handleIncrement(index)}
          onDecrement={() => handleDecrement(index)}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default Main;
