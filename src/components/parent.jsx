import React, { useState } from 'react'
import Child from './clild'
function Parent() {
    const[name,settName]=useState("krishna")
    const onChaneNAme=(value)=>{
        // settName("radhe")
        console.log(value)
        settName(value)
    }
  return (
    <div>
        <Child name={name} onChaneNAme={onChaneNAme}/>
        {/* <button onClick={onChaneNAme}>Add Name</button> */}
    </div>

  )
}

export default Parent