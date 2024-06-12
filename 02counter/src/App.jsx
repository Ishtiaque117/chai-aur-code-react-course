import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(5);
  
  const increaseValue = () => {
    setCounter(counter+1);
    setCounter((prevCounter) => prevCounter+1 );
    setCounter((prevCounter) => prevCounter+1 );
  }

  const decreaseValue = () => {
    if(counter>0) setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increaseValue}>Increase value</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
