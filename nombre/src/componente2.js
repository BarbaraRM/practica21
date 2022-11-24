import logo from './logo.svg';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';

function Componente2() {
  const [count, setCount] = useState (0);
  const [count2, setCount2] = useState (0);

  useEffect(()=> 
      {console.log({count})
      setCount2(count*2);
    },[count]
  );
  
  
  useLayoutEffect(()=>
    {console.log('Holi')}
  );

  return (
    <div className="App">      
      <h1>Componente 2</h1>
      <p>Se han clickeado {count2} times</p>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => setCount(count + 1)}> Sumar 1</button>
    </div>
  );
}

export default Componente2;
