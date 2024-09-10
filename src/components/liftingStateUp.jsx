import React, { useState } from 'react'
import TemperatureLifting from './TemperatureLifting'
function LiftingStateUp() {
    const[temperature,setTemperature]=useState('')
    const setTemp=(temperature)=>{
        console.log(temperature)
        setTemperature(temperature)
    }
  return (
    
    <div>
        <TemperatureLifting
        temperature={temperature}
        setTemperature={setTemp}/>
    </div>
  )
}

export default LiftingStateUp