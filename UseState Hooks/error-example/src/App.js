import './App.css';
import React from 'react'

function App() {

  let title = 'Random Title';

  const handleClick = () => {
    title = 'Hello World';
    console.log(title);
  }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button onClick = {handleClick}>Change Title</button>
    </React.Fragment>
  );
}

export default App;
