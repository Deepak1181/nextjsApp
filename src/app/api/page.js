import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const page = async () => {

  const url = process.env.ApiKey;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '83fcb47a34mshefa34d9b15c5224p1ad70ajsn8933ea13d45a',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res = await fetch(url,options)
const data= await res.json()
const main = data.titles
console.log(data,"main")
  return (
    <div>
        <h1>Movie PAGE </h1>
      {
        main.map((el)=>{
          return  (
            <div key={el.id}>
              <Image src={el.jawSummary.backgroundImage.url} alt={el.jawSummary.tilte} width={250} height={200}/>
              <h2>{el.jawSummary.title}</h2>
              <p>{el.jawSummary.synopsis.substring(0,66)}</p>
              <Link href={`/api/${el.jawSummary.id}`}>Read more</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default page

