import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

//preserves the value
//DOES NOT trigger re-render
//target dom nodes / elements

function App() { 

  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  }

  return (
    <>
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer}/>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref = {divContainer}>
        <h1>Hello world</h1>
      </div>
    </div>
    </>
  );
}

export default App;
