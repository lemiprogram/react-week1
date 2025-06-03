import { useState } from 'react'
import List from './Components/List'

function App() {
  const [inp,setInp] = useState([])
  const getItems = (items, category)=>setInp(prevInp=>[...prevInp,...items.split(",").map((item,index)=>{return {id:index+inp.length,item,category}})])
  return (
    <>
      <select name="" id="category">
        <option value="books">Books</option>
        <option value="movies">Movies</option>
        <option value="music">Music</option>
      </select>
      <input 
        id='inp'
        type="text"
      />

      <button
        onClick={()=>getItems(document.querySelector("#inp").value,document.querySelector("#category").value)}
      > Add </button>
      <div className="categories">
        <List
        inp={inp}
        category="Books"
        />
        <List
        inp={inp}
        category="Movies"
        />
        <List
        inp={inp}
        category="Music"
        />
      </div>
    </>
  )
}

export default App
