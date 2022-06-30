import React from 'react'

const BlogDetailsItem = ({id,title,desk}) => {
  return (
    <div>
        <p className='text-primary'>Blog ID: <span className='text-dark'>{id}</span></p>
        <p className='text-danger'>Blog Title: <span className='text-dark'>{title}</span> </p>
        <p className='text-success'>Blog Description:<span className='text-dark'>{desk}</span></p>
    </div>
  )
}

export default BlogDetailsItem