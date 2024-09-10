import React from 'react'

function Child2({name,set}) {
  return (
    <div>child2 
        <h1>{name}</h1>
        <p>{set}</p>
        <button onClick={()=>set('From child to parent :watermelon')}>Add from child to Parent</button>
    </div>
  )
}

export default Child2