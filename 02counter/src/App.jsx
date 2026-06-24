import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter , setCounter] = useState(55) 
  //let counter = 55 ;
  const addValue = () => {
      counter+=1 ;
       setCounter(counter) ;
  }


  const removeValue =() =>{
    counter-=1 ;
    setCounter(counter) ;
  }
  return (
    <>
    <h1>chai or react</h1>
    <h2> Counter value: {counter}</h2>
    <button onClick = {addValue} >add value</button>
    <br />
    <button onClick ={removeValue}>remove value</button>
    </>
  )
}

export default App
