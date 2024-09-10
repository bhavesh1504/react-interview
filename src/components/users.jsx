import React, { useEffect, useState } from 'react'
import HighOrderComp from '../HigherOrderComponents/HighOrderComp'
function Users({data}) {
//     const[users,setUsers]=useState([])
//     useEffect(()=>{
        
// const userData=async()=>{
//     const response=await fetch("https://jsonplaceholder.typicode.com/users")
//     console.log(response.ok)
//     if(response.ok){
//         try{
//         const data=await response.json()
//         console.log(data)
//         setUsers(data)
//         }
//        catch(err){
//             console.log(err)
//         }
//     }else{
//         console.log('Wrong with api response')
//     }
   

// }
// userData()
//     },[])
  return (

//     <div>
//         <h1>Users</h1>{users.map((user)=>{
//  return <h3>{user.name}</h3>
//     })}</div>
<div>
    <h1>Hello from users</h1>
    {data.slice(0,12).map((user)=> {return <p>{user.name}</p>})}
</div>
  )
}

const UsersComp=HighOrderComp("Users",Users,"users","users fetchingg here")
export default UsersComp