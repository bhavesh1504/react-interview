import { useEffect, useState } from "react"

function Exercise5(){
const[state,setstate]=useState({count:1})
const handleClcik=()=>{
    setstate(prev=>({count:prev.count+1}))
    setstate(prev=>({count:prev.count+3}))
    setstate(prec=>({count:prec.count+6}))
}
return(<>
<button onClick={handleClcik}>Click me</button>
<p>{state.count}</p></>)
}

export default Exercise5