import { useState } from 'react'
import List from './Components/List'

function App() {
  const [inp,setInp] = useState([])
  const getItems = e=>setInp(prevInp=>[...prevInp,...e.split(",").map((item,index)=><li key={index}>{item}</li>)])
  return (
    <>
      
      <input 
        id='inp'
        type="text"
      />

      <button
        onClick={()=>getItems(document.querySelector("#inp").value)}
      > Add </button>
      <List 
      inp={inp} 
      />
    </>
  )
}

export default App
