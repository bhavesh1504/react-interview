import React, { useState } from 'react'

function ControlledUnControl() {
    let name=React.createRef()
    let age=React.createRef()
    const submit=(event)=>{
        console.log(event)
        console.log(name.current.value)
        console.log(age.current.value)
        // console.log(event.target.value)
    }

    const getName=(event)=>{
        console.log(event.target.value)
    }
    const getAge=(event)=>{
        console.log(event.target.value)
    }
  return (
    <div><h3>uncontrolled</h3>
    <input placeholder="name" ref={name}/>
    <input placeholder='age' ref={age}/>

    <h3>Controlled</h3>
    {/* <input placeholder='name' onChange={getName}/>
    <input placeholder='age' onChange={getAge}/> */}

    <button onClick={submit}>Submit</button>
    </div>
  )
}

export default ControlledUnControl