import { useState } from 'react';
import './App.css';

function App() {

  const personData = {
    id: 1,
    name : "prince",
    message : "He is the software engineer"
  }

  const [person, setPerson] = useState(personData);

  const [name, setName] = useState(personData.name);
  const [message, setMessage] = useState(personData.message);

  const changeMessage = () => {
    person.message = "He is the unpredictable coder";
    setMessage(person.message)
    // setPerson({...person,message: person.message})
  }

  return (
    <>
    <h1>{name}</h1>
    <h1>{message}</h1>
    <button onClick={changeMessage}>Change Message</button>
    </>
  );
}

export default App;
