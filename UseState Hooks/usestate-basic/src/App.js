import React, {useState} from 'react';
import './App.css';

function App() {
  let [text, setText] = useState("Random Title");

  const handleClick = () => {
    if(text === "Random Title") setText("Hello world")
    else setText("Random Title")
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button onClick={handleClick}>Change Title</button>
    </React.Fragment>
  );
}

export default App;
