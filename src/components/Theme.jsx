import React, { useState } from 'react'

function Theme() {

let[theme,setTheme]=useState(false)
let change=()=>{
    setTheme(!theme)
}

let style={internal:{
    color:'pink'
},
light:{
    color:'black',
    background:'grey'
},
dark:{
    color:'white',
    background:"blue"
}}
  return (
    <div style={theme ? style.light : style.dark}>            <h3 className='ext'>External</h3>

            <h3 style={style.internal}>Internal</h3>
    <h3 style={{color:'yellow'}}>Inline</h3>
    <button onClick={change}>Change Theme</button>
    </div>
  )
}

export default Theme