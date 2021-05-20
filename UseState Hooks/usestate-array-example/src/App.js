import logo from './logo.svg';
import './App.css';
import data from './Person'
import React, {useState} from 'react';

function App() {

  const [person, setPerson] = useState(data);

  const deleteAllPerson = () => {
    setPerson([]);
  }

  const deleteSinglePerson = (id) => {
    const updatePerson = person.filter(singleperson => {
      return singleperson.id !== id;
    })
    setPerson(updatePerson)
  }

  return (
    <React.Fragment>
      {person.map((singlePerson, index) => {
        const {id, name} = singlePerson;
        return(
          <div key = {id}> 
            <p>{name}</p>
            <button onClick = {() => deleteSinglePerson(id)}>Remove</button>
          </div>
        )
      })}
      
      <button onClick={deleteAllPerson}>Clear Person</button>
    </React.Fragment>
  );
}

export default App;
