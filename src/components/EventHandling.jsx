import React, { useState } from 'react'

function EventHandling() {
    //mamintain a state
    const[objState,setObjState]=useState({})
    const getInput=(event)=>{
        console.log(event.target.value)
    }
    const addSums=(n1,n2)=>{
        console.log(2+2)

        return 2+2
    }
    const getInputsOfvariousInputs=(name,value)=>{
        // console.log({[name]:value})
        let data=({[name]:value}) 
        setObjState({...objState,...data})
    }
    console.log(objState)

    const onSubnitData=(event)=>{
        event.preventDefault()
console.log(objState)
    }
  return (
    <div>
        {/* adding inputs */}
        <form onSubmit={onSubnitData}>
<input placeholder='enter text' name="name" text="name" type="text" onChange={(event)=>getInputsOfvariousInputs(event.target.name,event.target.value)}/>

<input placeholder='enter age' name="age" text="age" type="number" onChange={(event)=>getInputsOfvariousInputs(event.target.name,event.target.value)}/>
<input placeholder='enter hobbies' name="hobbies" text="hobbies" type="text" onChange={(event)=>getInputsOfvariousInputs(event.target.name,event.target.value)}/>


<input placeholder='enter date' name="birthdate" text="date" type="date" onChange={(event)=>getInputsOfvariousInputs(event.target.name,event.target.value)}/>
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>

</form>
        <input placeholder='add sometingg---' onChange={getInput} name="input"/>
        <p onClick={addSums}>Add nos</p></div>
  )
}

export default EventHandling