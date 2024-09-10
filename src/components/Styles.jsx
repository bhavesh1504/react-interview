import React, { useState } from 'react'
import '../App.css'
function Styles() {
  const style={
    internal:{
      color:'blue'
    },
    dark:{
      backgroundColor:'black',
      color:'white'
    },
    light:{
backgroudColor:'white',
color:'black'
    }
  }
  const[theme,setTheme]=useState(false)
  const toggleTheme=()=>{
    setTheme(!theme)
  }
  return (
    <div style={theme ? style.light : style.dark}>
        <h3 className='externalSyles'>External</h3>
        <h3 style={style.internal}>Internal</h3>

        <h3 style={{color:'pink'}} >Inline</h3>
        <button onClick={toggleTheme}>Toggle Button</button>
    </div>
  )
}

export default Styles