import React, { useState } from 'react'
import Child2 from './child2'
function Parent2() {
    const[name,setName]=useState('Apple')
    const set=()=>{
setName('kiwi')
    }
  return (
    <div>parent2
        <Child2 name={name} set={set} />
        {/* <button onClick={()=>setName('kiwi')}>Add Fruit</button> */}
        {/* <button onClick={set}>Add fruit</button> */}
        
    </div>
  )
}

export default Parent2