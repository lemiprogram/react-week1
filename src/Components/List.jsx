import React from 'react'

function List({inp,category}) {
   
    const list = inp.filter(item=>item.category ===category.toLowerCase()).map((item)=><li key={item.id}>{item.item}</li>)
  return (
    <>  
        <div className="category-title">{category}</div>
        <ul>
            {list}
        </ul>
    </>
  )
}

export default List