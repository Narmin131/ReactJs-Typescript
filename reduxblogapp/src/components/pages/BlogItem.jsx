import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({title,id}) => {
  return (
      <div className="card col-12 col-sm-12 col-md-4 border-dark p-3">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{id}</p>
      {/* <p className="card-text">{desc}</p> */}
      <Link to={`/blog/${id}`} className="btn btn-dark">Read More</Link>
    </div>
  </div>
    
  )
}

export default BlogListItem