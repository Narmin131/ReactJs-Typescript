import React from 'react'

const BlogItem = ({title,desc,url}) => {
  return (
    <>
    <div className="col-lg-4 pb-4">
       <div className="blog">
       <img src={url} alt="" />
        <h4>{title}</h4>
        <p>{desc}</p>
       </div>
    </div>
    </>
  )
}

export default BlogItem