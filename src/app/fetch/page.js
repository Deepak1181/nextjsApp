'use client';
import React, { useEffect, useState } from 'react'
const Fetch = () => {
    const [item,setItem]= useState([])
    const func=async()=>{
        const res= await fetch(`https://jsonplaceholder.typicode.com/posts`,
        {cache:"no-store"}
        )
         const data= await res.json()
        // console.log(data[0].id,"dddddd")
        // console.log("resd")
        setItem(data)
    
    }
    // {item.map((el)=>{
    //     console.log(el)
    // })}
    useEffect(()=>{
        func()
    },[])
  return (
    <div>
      
        <div style={{border:"1px solid red",display:"grid",gridTemplateColumns:"repeat(1fr,2)"}}>
          
        {item.map((el)=>(
           <div style= {{border:"1px solid green",display:"flex",gap:"15px"}} key={el.id}>
            <p>{el.id} </p>
           
            <p>{el.title} .</p>
             
            <p>*{el.body}</p>
           </div>
        ))}
        </div>
       
    </div>
  )
}

export default Fetch