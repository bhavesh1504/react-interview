import React from 'react'

function clild({name,onChaneNAme}) {
  return (
    <div><h1>Child here</h1><p>{name}</p><h3>{onChaneNAme}</h3>
    <button onClick={()=>onChaneNAme("sudhama")}>Change From child to parent</button></div>
  )
}

export default clild