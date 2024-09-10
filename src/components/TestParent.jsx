import React, { useState } from 'react'
import TestChild from './TestChild'
function TestParent() {    
    const[name,setName]=useState('parent to child')

    const[age,setAge]=useState(20)

  return (
    <div>
        <TestChild name={name} age={age} setAge={setAge}/>
        <button onClick={()=>setName('name value chnaged')}>update name</button>       
         {/* <button onClick={()=>setAge(25)}>update age</button> */}

    </div>
  )
}

export default TestParent