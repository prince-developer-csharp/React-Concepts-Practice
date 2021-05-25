import './App.css';
import { useState } from 'react';

function App() {

  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: ""
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]:value});
    console.log(person)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.email && person.age){
      const newPerson = {...person, id: new Date().getTime().toString()}
      setPeople([...people, newPerson]);
      setPerson({
        firstName: "",
        email: "",
        age: ""
      })
    }
  }

  return (
    <>
    <div className="container">
      <form className="form">
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input type="text" 
          id="firstName"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input type="text" 
          id="email"
          name="email"
          value= {person.email}
          onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age : </label>
          <input type="text" 
          id="age"
          name="age"
          value= {person.age}
          onChange={handleChange}
          />
        </div>
        <button onClick = {handleSubmit} type="submit">Submit</button>
      </form>
    </div>
    {
      people.map((person, index) => {
        const {id, firstName, age, email} = person;
        return <div className="item" key ={id}>
          <h4>{firstName}</h4>
          <p>{age}</p>
          <p>{email}</p>
        </div>
      })
    }
    </>
  );
}

export default App;
