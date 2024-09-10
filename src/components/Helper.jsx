import React, { useEffect } from 'react'
import getAllUSers from '../helpers/getAllUSers'
import addSums from '../helpers/addSums'
import NameAdd from '../helpers/NameAdd'
function Helper() {
  const getHelper=async()=>{
    let data= await getAllUSers()
    // console.log(data)
  }
  useEffect(()=>{
getHelper()
  },[])

let addSumClick=()=>{
  let data2=addSums(2,3)
  console.log(data2)
}
useEffect(()=>{
  addSumClick()
},[])

let data3=NameAdd()
console.log(data3)
  return (
    <div>Helper
    <button onClick={addSumClick}>Add 2 nos</button>
    </div>
  )
}

export default Helper