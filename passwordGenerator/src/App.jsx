import { useState ,useCallback,useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef=useRef(null)

  const passwordgenerator=useCallback(()=>{
    let pass=""
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num)str+="0123456789"
    if(char)str+="!@#$%^&*()_+=-|/.,?><"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)  
      pass+=str.charAt(char)  
      setPassword(pass)
    }
  },[length,num,char,setPassword])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },[password])

 useEffect(()=>{
  passwordgenerator()
 },[length,num,char,passwordgenerator])
  return (
    <>
      <h1 className='flex justify-center text-4xl text-center font-bold text-white'>Password Generator</h1>
      <div className='flex justify-center'>
        <div className=' w-130 mt-3 bg-gray-700 h-35 '>
          <input type="text" value={password} placeholder='password' id="password" className='bg-white mt-10 w-sm p-1  outline-0' readOnly ref={passwordRef} />
          <button  onClick={copyPassword} className=' bg-pink-400 p-1 cursor-pointer'>copy</button>   
        <div className='flex text-sm gap-x-2 mt-7 ml-3.5'>
        <div className='flex items-center gap-x-1'>
          <input className='cursor-pointer ' type="range" value={length} min={6} max={100} onChange={(e)=>{setLength(e.target.value)}} />
          <label className='text-emerald-500' >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={num} id='numinput' onChange={()=>{
            setNum((prev)=>!prev)
          }}/>
           <label className='text-emerald-500' >Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={char} id='charinput' onChange={()=>{
            setChar((prev)=>!prev)
          }}/>
           <label className='text-emerald-500' >Characters</label>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
