import { useEffect, useState } from "react"

function Search(){
const[posts,setposts]=useState([])
const[queryData,setQueryData]=useState([])
const[input,setInput]=useState('')
const postData=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET'
    })
    // console.log(response)
    const data= await response.json()
    setposts(data)

}
useEffect(()=>{
const filterData=()=>{
if(!input)  {return setQueryData(posts)}
const filtre=posts.filter((f)=>
    f.title.startsWith(input)
)
setQueryData(filtre)
}

filterData()
},[input,posts])
useEffect(()=>{
    postData()
},[])
return(
    <>
    <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
    {queryData.map((post,id)=>
        <p key={id}>{post.title}</p>
    )}
    </>
)
}
export default Search