import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="App">
      <h1>Typescript ~ Javascript</h1>

      {counter}
      <br />
      <button onClick={()=>{
        setCounter(counter+1)
      }}
      >
        Increase 1
      </button>
    </div>
  );
}

export default App;
