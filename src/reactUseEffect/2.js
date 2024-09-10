import { useEffect, useState } from "react";

function Exercise2(){
    const[txet,setText]=useState('')

    // useEffect(()=>{
    //     setText(txet + 'worl')
    //     setText('r4e')
    // },[])

    const handleClick=()=>{
        setText(txet + 'worl')
        setText('r4e')
        setText('viii')
}

    return(<>

    <button onClick={handleClick}>Click me</button>
    {txet}</>)
}

export default Exercise2