import React from 'react'
import HighOrderComp from '../HigherOrderComponents/HighOrderComp'

function Todos({data}) {
  return (
    <div>
        <h4>Todos data from data coming from higherorder</h4>
        <p>TODO DATA</p>
        {data.slice(0,12).map(todo=>{return <p>{todo.title}</p>})}
    </div>
  )
}

const TodoComp=HighOrderComp("Todo Title",Todos,"todos")
export default TodoComp