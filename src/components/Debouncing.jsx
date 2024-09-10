import axios from 'axios'
import React, { useEffect, useState } from 'react'
const pinapi=`https://jsonplaceholder.typicode.com/posts/`
function Debouncing() {
    const[pin,setPin]=useState("")
    useEffect(()=>{
         const debounce=setTimeout(()=>{
axios.get(pinapi + pin)
.then((data)=>{
  console.log(data)
    console.log(data.data.title)
})
.catch((err)=>{
    console.log(err)
})
         },3000)
    },[pin])
console.log(pin)
  return (
    <div>Debouncing
        <input onChange={(event)=>setPin(event.target.value)}></input>
    </div>
  )
}

export default Debouncing