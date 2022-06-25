import React from 'react'

const BlogItem = ({title}) => {
  return (
    <li>{title} - <button className='btn btn-success'>desc</button></li>
  )
}

export default BlogItem