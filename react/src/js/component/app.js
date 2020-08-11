import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader';

console.log(data)

function App() {
  const [loaderList, setLoaderList] = useState([])
  function handleClick() {
    setLoaderList(data.loaders)
  }
  return (
    <div >
      <h1>
      increible app con react
      </h1>
      <ul>
        {
          loaderList.map((item)=> < Loader { ...item } key={item.id} />)
        }  
      </ul>  
      <button onClick={handleClick}> Mostart lo aprendido </button>  
      <p>
        Aqui hay un elemento p  
      </p> 
    </div>
  )
}

export default App