import React from 'react'

function getAllUSers() {
  return fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response=>response.json() )
}

export default getAllUSers