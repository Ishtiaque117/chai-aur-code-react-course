import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
  const [data,setData] = useState([]);  

  useEffect(() => {
    fetch('https://github.com/Ishtiaque117')
    .then(response => response.json())
    .then(info => {
        console.log(info);
        setData(info);
    })
  },[])  
  return (
    <div className='text-center m-4
     bg-yellow-500 text-black p-4 text-2xl'>Github Followers: {data.followers}</div>
  )
}

export default Github