import React, { useRef, useState, useEffect, } from 'react';
import './App.css';
import Comp from './componente';
import Comp2 from './componente2';

function App() {
  const ref = useRef(null);

  function changeDisplay(e){
    e.preventDefault();
    console.log(ref);
    ref.current.style = {...ref.current.style, display:"block"};
    ref.current.style.width = "1050px";
    ref.current.style.padding = "100px"
  };

  const [count, setCount] = useState (0);
  const [count2, setCount2] = useState (0);


  return (
    <>
      <Comp></Comp>
      <Comp2></Comp2>
      <hr></hr>
      <input ref={ref} type="text" style={{display:"none"}}></input>
      <button onClick={(e)=>changeDisplay(e)}>CLick to show!</button>
      <hr></hr>
      <h1>APP</h1>
      <p>Se han clickeado {count} times {count2}</p>
      <button onClick={() => setCount(count + 1)}> Sumar 1</button>
    </>
  );
}

export default App;
