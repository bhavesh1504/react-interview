import React, { useState } from 'react'
import '../App.css'
function Toggle() {
    let style={
        internal:{
            color:'purple'
        }
    }
    let[toggle,setToggle]=useState(false)
    
let change=()=>{
    setToggle(true)
    // style.background="black"
}

  return (
    <div style={{color:'white',background:'black'}}>
    {toggle && <h3 className="ext">External</h3>}
    <h3 style={style.internal}>Internal</h3>
    <h3 style={{color:'yellow'}}>Inline</h3>
    <button onClick={change}>Change Theme</button>
    </div>
  )
}

export default Toggle