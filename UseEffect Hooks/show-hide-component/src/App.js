import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [isShow, setIsShow] = useState(false);

  return (
    <>
    <div className="container"> 
    <button className="btn" onClick = {() => setIsShow(!isShow)}>show/hide</button>
    {isShow && <Item />}
    </div>
    </>
  );
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener('resize', checkSize);
  })

  
    return (
      <>
      <h1>Window</h1>
      <p>{size} px</p>
      </>
    )
}

export default App;
