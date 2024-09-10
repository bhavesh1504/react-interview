import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ApiRequest() {
    const [name, setName] = useState("")
    const [getData, setGetData] = useState([])

    const PostData = async () => {
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
                title: name,
                completed: true
            })
            console.log(res.data)
            setGetData(prev => [res.data, ...prev])
        } catch (err) {
            console.log(err)
        }
    }

    const GetData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
            console.log(res.data)
            setGetData(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        GetData()
    }, [])

    const DeleteData = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            console.log(`Deleted item with id ${id}`)
            setGetData(prevData => prevData.filter(item => item.id !== id))
        } catch (err) {
            console.log(err)
        }
    }

    const updateData = async (id) => {
        try {
            const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                title: name,
                userId: 6,
                completed: true
            })
            console.log(res.data)
            setGetData(prevData => prevData.map(item => item.id === id ? res.data : item))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h3>ApiRequest</h3>
            <input placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            {getData.slice(0, 5).map(user => {
                return (
                    <div key={user.id}>
                        <p>{`${user.id}. ${user.title}`}</p>
                        <button onClick={() => updateData(user.id)}>Update</button>
                        <button onClick={() => DeleteData(user.id)}>Delete</button>
                    </div>
                )
            })}
            <button onClick={PostData}>Add Post data</button>
        </div>
    )
}

export default ApiRequest
