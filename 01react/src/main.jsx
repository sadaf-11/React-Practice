import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
function Name(){
  const user='developer'
  return (
    <div>
    <h1>Saddu is a {user}....</h1>
    </div>
  )
}

const reactElement=(
  <a href="https://gogle.com" target="_blank">Visist google</a>
)
const user2='software Engineer'
const anotherElement=React.createElement(
  'a',
  {href:'https://google.com'},
  'click to visit google ',
  user2
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {anotherElement},
    <Name />
   </StrictMode>,
)
