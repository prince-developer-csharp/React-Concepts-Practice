
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() =>{
      // setValue(value + 1);
      setValue((previousValue) => {
        return previousValue + 1;
      })
    }, 2000)
  }

  return (
    <>
    <h1>{value}</h1>
    <button onClick = {() => setValue(value + 1)}>Increase</button>
    <button onClick = {() => setValue(0)}>Reset</button>
    <button onClick = {() => setValue(value - 1)}>Decrease</button>
    <h1>{value}</h1>
    <button onClick= {complexIncrease}>Complex Increase</button>
    </>
  );
}

export default App;
