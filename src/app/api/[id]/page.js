import Image from 'next/image';
import React from 'react'

const Page = async ({params}) => {
  const id=params.id
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '83fcb47a34mshefa34d9b15c5224p1ad70ajsn8933ea13d45a',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const res = await fetch(url,options)
const data= await res.json()
const main = data[0].details
console.log(main,"main")
  return (
    <div>
      <h1>{id}</h1> 
      
            <h2>NetFlix \ <span>{main.type}</span></h2> 
              <Image src={main.backgroundImage.url} alt={main.tilte} width={350} height={250}/>
              <h2>{main.title}</h2>
              <p>{main.synopsis}</p>
            
            
       
      
    </div>
  )
}

export default Page