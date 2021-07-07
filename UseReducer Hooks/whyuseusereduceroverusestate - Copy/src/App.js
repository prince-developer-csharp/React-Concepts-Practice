import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './modal';

function App() {

  const [people, setPeople] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      setShowModal(true);
      setPeople([...people, {
        id: new Date().getTime().toString(),
        name
      }
      ])
    }else{
      setShowModal(true);
    }
    setName('');
  }

  return (
    <>
    <div className="container">
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <button type="submit">Add</button>
      </form>
      {
      people.map(person => {
        return(
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })
    }
    </div>
    </>
  );
}

export default App;
