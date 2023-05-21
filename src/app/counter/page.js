
'use client';
import  { useState } from 'react'
//import { Caveat} from 'next/font/google';


import styles from "@/app/styles/navbaar.module.css"
// const caveat=Caveat({
//   subsets:["latin"],
//   display:"swap"
// })


const Counter = () => {
  const [count,setcount] = useState(0)

  return (
    <>
    {/* <html lang='en' className={caveat.className}> */}
      <div className={styles.counter}>

    <h1>Counter App</h1>
  
    <h3>Counter :{count}</h3>
    <button onClick={()=>setcount(count+1)}>ADD</button>
    <button  onClick={()=>setcount(count-1)}>Dec</button>
      </div>
    {/* </html> */}
    </>
  )
}

export default Counter


// 'use client';
 
// import { useState } from 'react';
 
// export default function Counter() {
//   const [count, setCount] = useState(0);
 
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }