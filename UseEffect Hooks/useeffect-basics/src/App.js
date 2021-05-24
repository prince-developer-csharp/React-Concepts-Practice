import './App.css';
import { useEffect, useState } from 'react';

//if does not contain any hooks as per rule but hooks contain if and else statement
function App() {

  const [value, setValue] = useState(0);

  //array contains any dependencies when change the value of dependencies it runs  
  useEffect(() => {
    console.log("useEffect");
  }, [value])

  //array does not contain any dependencies it runs only one time 
  useEffect(() => {
    console.log("Hello world");
  }, [])

  console.log("render component")

  return (
    <div className="App">
      <h1>UseEffect Basics</h1>
      <p>{value}</p>
      <button onClick = {() => setValue(value + 1)}>Click me</button>
    </div>
  );
}

export default App;
