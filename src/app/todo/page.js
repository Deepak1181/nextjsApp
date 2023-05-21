'use client';
import React, { useState } from 'react'

const Todo = () => {
  const [text,settext] = useState("")
   const [add,setADD] = useState([])

  const addfun = () =>{
setADD((add)=>{
  const updated =[...add,text]
  console.log(updated,"update")
  settext("")
  return updated
})
  }


  const remove=(i)=>{
 const removeupdate=add.filter((el,id)=>{
  return i!=id
})
setADD(removeupdate)
  }


  const removeall=()=>{
    setADD([])
  }
  return (
    <>
      <h1>Todo App</h1>
      <input placeholder='Task' value={text}  onChange={(e)=>{settext(e.target.value)}} />
      <button onClick={addfun}>ADD</button>
    {add!=[]&& add.map((el,i)=>{
      return(
        <div>
         <div zkey={i}>
         <h3>{el}</h3>
          <button onClick={()=>remove(i)}>Remove</button>
         </div>
       
        </div>
        
      )
    })}
        {add.length>=1&& <button onClick={removeall}>Remove All</button>}
    </>
  )
}

export default Todo