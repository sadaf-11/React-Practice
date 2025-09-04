import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const setCounter=()=>{
    if(count<20){
      setCount(count+1)
    }
  }
  const removeCounter=()=>{
    if(count>0){
    setCount(count-1)
    }
  }

  return (
    <>
      <div>
        <h1>Learn Counter in React</h1>
        <h3>Counter value :~{count}</h3>
        {/* <button onClick={()=> setCount(count+1)}>Count is </button><br /> */}
        <button onClick={setCounter}>Increase Count</button><br /><br />
        <button onClick={removeCounter}>reduce count </button>
      </div>
      
    </>
  )
}

export default App
