import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader';
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';
import '../../css/sass/sass.scss';//importante la extension


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
      <video src={video} width={500} controls ></video>
      <img src={logo} width={100}></img> 
      <ul>
        {
          loaderList.map((item)=> < Loader { ...item } key={item.id} />)
        }  
      </ul>  
      <button onClick={handleClick}> Mostart lo aprendido </button>  
      <p>
        Aqui hay un elemento p  
      </p> 
      <p class="sass">
        parrafo escrito con la variable de sass
      </p> 
    </div>
  )
}

export default App