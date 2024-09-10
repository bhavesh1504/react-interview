import React from 'react'

function TemperatureLifting({temperature,setTemperature}) {
  return (

    <div>
        <input
        type="text"
        name={temperature}
        onChange={(e)=>setTemperature(e.target.value)}
    />
    </div>
  )
}

export default TemperatureLifting