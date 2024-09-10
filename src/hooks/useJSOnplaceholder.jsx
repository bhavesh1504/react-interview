import React, { useEffect, useState } from 'react'

function useJSOnplaceholder() {
    const[users,setUsers]=useState([])
    const[posts,setPosts]=useState([])    
    const[todos,setTodos]=useState([])

    const getUsers=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json() )
        .then(json=>setUsers(json))
    }
    const getPosts=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json() )
        .then(json=>setPosts(json))
    }
    const gettodods=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>response.json() )
        .then(json=>setTodos(json))
    }

    useEffect(()=>{
        getUsers()
        getPosts()
        gettodods()
    },[])
  return {users,posts,todos}
}

export default useJSOnplaceholder