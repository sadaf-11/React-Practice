import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
import { useState,useEffect} from "react"
function App() {
  const [count,setCount]=useState(0)
  const [name,setName]=useState("");
  const [greet,setGreet]=useState("");
  const handleInput = (e) => setName(e.target.value);
      const handleChange=()=>
      setGreet(`Hello ${name}`);
  useEffect(() => {
    alert("welcome to my page")
  }, [])
  useEffect(() => {
    alert("count was changed")
  }, [count])
  useEffect(() => {
    alert(`${name} was greeeted`)
  }, [greet])
  
  return (
    <>
      <Navbar/>
      <div className="cards">
      <Card title ="card1" description="carddddd111"/>    
      <Card title ="card2" description="carddddd222"/>    
      <Card title ="card3" description="carddddd333"/>    
      <Card title ="card4" description="carddddd444"/>
      <h1><button onClick={()=>{
        setCount(count+1)
        }
        }>Count is {count}
        </button>
        </h1>
      </div>    

       <h1>Wlcom to the greeting page</h1>

      <input type="text" value={name} onChange={handleInput} placeholder="Enter your name"/>
      <button onClick={handleChange}>Submit</button>
      <h2>{greet}</h2>
      <Footer/>
    </>
  )
}

export default App
