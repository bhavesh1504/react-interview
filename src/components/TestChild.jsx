import React from 'react'

function TestChild({name,age,setName,setAge}) {
  return (
    <div>{name}
    <h3>{setName}</h3>
    {/* <h3>{setAge}</h3> */}
    <button onClick={()=>setAge(30)}>Child to Parent</button>
    <p>{age}</p></div>
  )
}

export default TestChild