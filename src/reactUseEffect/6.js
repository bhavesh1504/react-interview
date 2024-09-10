import { useEffect, useState } from "react"

function Exercise51(){
const[count,setcount]=useState(1)
const handleClcik=()=>{
    console.log(count,'c')
    setcount((prev)=>prev +1)
    console.log(count,'c')

    setcount((prev)=>prev+ 44)
    console.log(count,'c')

    setcount((prev)=>prev +7)
    console.log(count,'c')


}
return(<>
<button onClick={handleClcik}>Click me</button>
<p>{count}</p></>)
}

export default Exercise51