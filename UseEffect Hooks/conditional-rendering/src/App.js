import { useEffect, useState } from 'react';
import './App.css';

const url = 'https://api.github.com/users/QuincyLarson'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then(resp => {
        if(resp.status >= 200 && resp.status <= 299){
          return resp.json();
        }
        else{
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const {login} = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch(error => console.log(error))
  }, []);

  if(isLoading) {
    return (
      <h1>Loading......</h1>
    ) 
  }

  if(isError) {
    return (
      <h1>Error......</h1>
    ) 
  }

  return(
    <h1>{user}</h1>
  )
}

export default App;
