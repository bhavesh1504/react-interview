import React from 'react'
import High2 from '../HigherOrderComponents/High2'
function Albums({data}) {
  return (
    <div>
        <h1>We are coming from component</h1>
{data.slice(0,12).map((photo)=>{
    return(
        <p>{photo.title} - {photo.url}</p>
    )
})}
    </div>
  )
}

const AlbumsComp=High2("reusable",Albums,"photos")
export default AlbumsComp