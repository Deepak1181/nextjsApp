'use client';
import React, { useEffect, useState } from 'react'
import styles from "@/app/styles/navbaar.module.css"
import axios from 'axios';
const Page = () => {

  const [task,setTask] = useState("") 
  const [todos,setTodos]  = useState("") 

//   console.log(task)


const gettask=()=>{
    axios.get("https://jsonserver-database-production.up.railway.app/todos")
    .then((res)=>setTodos(res.data))
    .catch((err)=>console.log(err))
    
}

const addtask=()=>{
    const todo={
      todo:task
    }
    axios.post("https://jsonserver-database-production.up.railway.app/todos",todo)
    .then((res)=>gettask())

    .catch((err)=>console.log(err))
}

useEffect(()=>{
  gettask()
},[])

console.log(todos,"todos")


  return (
    <div className={styles.todoapi}>
        <h1>
            Todo App with API
        </h1>
        <input placeholder='write here' type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={addtask}> Add your Task</button>



        {todos&&todos.map((el)=>{

            return(
                <div key ={el.id}>
                    <p>{el.todo}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Page