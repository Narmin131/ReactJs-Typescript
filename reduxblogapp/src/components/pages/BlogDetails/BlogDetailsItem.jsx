import React from 'react'

const BlogDetailsItem = ({id,title,desc}) => {
  return (
    <div className='container'>
        <p style={{fontWeight:"bold",textAlign:"center"}}>Blog ID: <span className='text-dark'>{id}</span></p>
        <p style={{fontWeight:"bold",textAlign:"center"}}>Blog Title: <span className='text-dark'>{title}</span> </p>
        <p style={{fontWeight:"bold",textAlign:"center"}}>Blog Description:<span className='text-dark'>{desc}</span></p>
    </div>
  )
}

export default BlogDetailsItem