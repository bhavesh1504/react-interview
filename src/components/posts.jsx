import React, { useEffect, useState } from 'react'

import HighOrderComp from '../HigherOrderComponents/HighOrderComp'
function Posts({data}) {
//     const[posts,setposts]=useState([])
//     useEffect(()=>{
        
// const postData=async()=>{
//     const response=await fetch("https://jsonplaceholder.typicode.com/posts")
//     console.log(response.ok)
//     if(response.ok){
//         try{
//         const data=await response.json()
//         console.log(data)
//         setposts(data)
//         }
//        catch(err){
//             console.log(err)
//         }
//     }else{
//         console.log('Wrong with api response')
//     }
   

// }
// postData()
//     },[])
  return (

//     <div>
//         <h1>posts</h1>{posts.map((post)=>{
//  return <h3>{post.title}</h3>
//     })}</div>
<div>
    <h1> hello from posts</h1>
    {data.slice(0,12).map(post=>{
        return <h3>{post.title}</h3>
    })}
</div>
  )
}

const PostComp=HighOrderComp('Posts',Posts,"posts")

export default PostComp