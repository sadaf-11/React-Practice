import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
function App() {
  const [color, setColor] = useState('lightpink')

  return (
    <>
      <div className='fixed h-screen w-full m-0 flex justify-center items-center' style={{backgroundColor:color}}>
        <div className='mx-9 my-9  h-15 rounded-full  bg-cyan-50 flex justify-between items-center px-4 gap-3 '>
          <button onClick={()=>setColor('red')} className='outline-0 bg-orange-600 rounded-full px-5 py-2 text-white font-bold hover:scale-120' style={{backgroundColor:"red"}}>red</button>
          <button onClick={()=>setColor('#22c55e')} className='outline-0 bg-green-500 rounded-full px-5 py-2 text-white font-bold hover:scale-120'style={{backgroundColor:"#22c55e"}}>green</button>
          <button onClick={()=>setColor('#316ff6')} className='outline-0 bg-blue-500 rounded-full px-5 py-2 text-white font-bold hover:scale-120'style={{backgroundColor:"#316ff6"}}>blue</button>
          <button  onClick={()=>setColor('#facc15')} className='outline-0 bg-yellow-400 rounded-full px-5 py-2 text-white font-bold hover:scale-120' style={{backgroundColor:"#facc15"}}>yellow</button>
          <button  onClick={()=>setColor('#9333ea')} className='outline-0 bg-purple-600 rounded-full px-5 py-2 text-white font-bold hover:scale-120' style={{backgroundColor:"#9333ea"}}>purple</button>
          <button  onClick={()=>setColor('#6b7280')} className='outline-0 bg-gray-500 rounded-full px-5 py-2 text-white font-bold hover:scale-120' style={{backgroundColor:"#6b7280"}}>gray</button>
          <button   onClick={()=>setColor('#000000')} className='outline-0 bg-black rounded-full px-5 py-2 text-white font-bold hover:scale-120' style={{backgroundColor:"#000000"}}>black</button>
        </div>
      </div>
    </>
  )
}

export default App
