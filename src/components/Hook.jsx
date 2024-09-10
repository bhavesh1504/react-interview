import React from 'react'
import useJSOnplaceholder from '../hooks/useJSOnplaceholder'
function Hook() {
    const{users,posts,todos}=useJSOnplaceholder()
  return (
    <div>
        {/* <h1>Users</h1>
        {users.slice(0,15).map(user=>{
return <h3>{user.name}</h3>
        })}

<h1>Posts</h1>
        {posts.slice(0,15).map(post=>{
return <h3>{post.title}</h3>
        })} */}

<h1>Todos</h1>
        {todos.slice(0,15).map(post=>{
return <h3>{post.title}</h3>
        })}


    </div>

  )
}

export default Hook