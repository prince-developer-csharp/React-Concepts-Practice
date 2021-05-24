import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    console.log('use effect')
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    })

    // return () => window.removeEventListener('resize', () => {
    //   setSize(window.innerWidth)
    // })
  }, [])

  return (
    <div className="App">
      <h1>UseEffect CleanUp</h1>
      <hr></hr>
      <p>Window</p>
      <p>{size}</p>
    </div>
  );
}

export default App;
