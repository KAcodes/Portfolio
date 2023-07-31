import React from 'react'

const Project = ({src}) => {
  return (
    <div>
        <div>
            <img src={src}/>
        </div>
        <div>
            <div>
                <p>Title</p>
                <p>Link</p>
                <p>Description</p>
            </div>
        </div>
    </div>
  )
}

export default Project