import React from 'react'
import styles from "@/app/styles/navbaar.module.css"
import Link from 'next/link'
const Navbaar = () => {
  return (
    <div className={styles.navbaar}>
      <div >
      <ul className={styles.navbaarlist}>
        <li>
          <Link href="/">Home</Link>
        </li>
        
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/fetch">Fetch</Link>
        </li>
        <li>
          <Link href="/api">API</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/todolocal">TodoLocal</Link>
        </li>
        <li>
          <Link href="/taskapp">TodoApi</Link>
        </li>
       </ul>
      </div>
    </div>
  )
}

export default Navbaar